// api/contact.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { name, email, company, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        console.log('New contact form submission:', { name, email, company, message });
        // add email/SendGrid logic here

        return res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Function error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}