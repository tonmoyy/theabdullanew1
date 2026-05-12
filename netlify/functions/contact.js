const postmark = require('postmark');
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, company, message } = JSON.parse(event.body);

        await client.sendEmail({
            From: 'website@abdullacapital.com',
            To: 'hello@abdullacapital.com',
            Subject: `New enquiry from ${name}`,
            HtmlBody: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Company:</strong> ${company}</p>
                 <p>${message}</p>`,
        });

        return { statusCode: 200, body: JSON.stringify({ message: 'Sent' }) };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};