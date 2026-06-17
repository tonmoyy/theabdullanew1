// netlify/functions/submit-deal.js
const nodemailer = require('nodemailer');
const Busboy = require('busboy');

// Parse multipart form data (fields + files) using Busboy
function parseMultipart(event) {
    return new Promise((resolve, reject) => {
        const busboy = Busboy({
            headers: {
                'content-type':
                    event.headers['content-type'] || event.headers['Content-Type'],
            },
        });

        const fields = {};
        const files = [];
        const fileWrites = [];

        busboy.on('field', (name, val) => {
            fields[name] = val;
        });

        busboy.on('file', (fieldname, file, info) => {
            const { filename, mimeType } = info;
            const chunks = [];

            file.on('data', (chunk) => chunks.push(chunk));

            file.on('end', () => {
                files.push({
                    fieldname,
                    filename,
                    content: Buffer.concat(chunks),
                    contentType: mimeType,
                });
            });
        });

        busboy.on('finish', () => {
            resolve({ fields, files });
        });

        busboy.on('error', reject);

        busboy.write(event.body, event.isBase64Encoded ? 'base64' : 'binary');
        busboy.end();
    });
}

exports.handler = async (event) => {
    // Only POST allowed
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        const { fields, files } = await parseMultipart(event);

        // Build plain text summary of the form data
        const emailText = Object.entries(fields)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');

        // Create a transporter using your email credentials
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,         // e.g. smtp.gmail.com
            port: process.env.SMTP_PORT || 587,
            secure: false,                       // true for 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Prepare the email
        const mailOptions = {
            from: `"Deal Submission" <${process.env.SMTP_USER}>`,
            to: process.env.RECIPIENT_EMAIL,    // the company email where submissions go
            subject: 'New Deal Submission from ' + (fields.full_name || 'Unknown'),
            text: emailText,
            attachments: files.map((f) => ({
                filename: f.filename,
                content: f.content,
                contentType: f.contentType,
            })),
        };

        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ ok: true }),
        };
    } catch (error) {
        console.error('Email send error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
};