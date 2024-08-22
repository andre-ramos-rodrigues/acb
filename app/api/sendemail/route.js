import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      // Send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"${name}" <${email}>`, // sender address
        to: process.env.RECEIVER_EMAIL, // list of receivers
        subject: "New Contact Form Submission", // Subject line
        text: message, // plain text body
        html: `<b>${message}</b>`, // html body
      });

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}