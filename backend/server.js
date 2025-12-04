import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, mobile, email, course, message } = req.body;

  if (!name || !mobile || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // 1. Admin Notification Email (To You)
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #ffffff; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #000000; }
          .header { background-color: #f4f4f4; padding: 30px 20px; text-align: center; border-bottom: 1px solid #e2e8f0; }
          .logo { max-width: 180px; height: auto; margin-bottom: 10px; }
          .title { color: #345a36; margin: 0; font-size: 24px; font-weight: 600; }
          .content { padding: 40px 30px; }
          .footer { background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; }
          table { width: 100%; border-collapse: collapse; }
          th { padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: left; background-color: #f8f9fa; color: #7f6c2a; width: 30%; vertical-align: top; }
          td { padding: 12px; border-bottom: 1px solid #e2e8f0; color: #2d3748; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://i.postimg.cc/y8153nbj/Zed.png" alt="Zeducators" class="logo" style="display: block; margin: 0 auto 15px;">
            <h1 class="title">New Website Inquiry</h1>
          </div>
          <div class="content">
            <table>
              <tr>
                <th>Full Name</th>
                <td>${name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td><a href="mailto:${email}" style="color: #345a36; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <th>Mobile</th>
                <td><a href="tel:${mobile}" style="color: #345a36; text-decoration: none;">${mobile}</a></td>
              </tr>
              <tr>
                <th>Interested Course</th>
                <td>${course || 'Not Specified'}</td>
              </tr>
              <tr>
                <th>Message</th>
                <td style="white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div class="footer">
            <p>This email was sent from the Zeducators website contact form.</p>
            <p>&copy; ${new Date().getFullYear()} Zeducators. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  // 2. User Acknowledgement Email (To Client)
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Thank you for contacting Zeducators`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #ffffff; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #000000; }
          .header { background-color: #f4f4f4; padding: 30px 20px; text-align: center; border-bottom: 1px solid #e2e8f0; }
          .logo { max-width: 180px; height: auto; margin-bottom: 10px; }
          .title { color: #345a36; margin: 0; font-size: 24px; font-weight: 600; }
          .content { padding: 40px 30px; }
          .text { margin-bottom: 20px; font-size: 16px; color: #2d3748; }
          .highlight { color: #7f6c2a; font-weight: 600; }
          .footer { background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; }
          .btn { display: inline-block; background-color: #7f6c2a; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 50px; font-weight: 600; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://i.postimg.cc/y8153nbj/Zed.png" alt="Zeducators" class="logo" style="display: block; margin: 0 auto 15px;">
            <h1 class="title">We Received Your Message</h1>
          </div>
          <div class="content">
            <p class="text">Dear <span class="highlight">${name}</span>,</p>
            <p class="text">Thank you for reaching out to <strong>Zeducators</strong>. We have received your inquiry and our team will review it shortly.</p>
            <p class="text">We typically respond within 24 hours. If your matter is urgent, please feel free to call us directly at <strong><a href="tel:+919966002827" style="color: #345a36; text-decoration: none;">+91 9966002827</a></strong>.</p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://zeducators.org" class="btn">Visit Our Website</a>
            </div>
          </div>
          <div class="footer">
            <p>Zeducators - Where Future Achievers Begin Their Journey</p>
            <p>Hno 17-8-659/16, Chanchal Guda, Hyderabad 500024</p>
            <p>&copy; ${new Date().getFullYear()} Zeducators. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);
    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Health check
app.get('/', (req, res) => {
  res.send('Zeducators Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
