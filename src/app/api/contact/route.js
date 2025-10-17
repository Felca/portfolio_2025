import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Configure the transporter using your environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT == 465, // Should be false if using 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      // NOTE: Use 400 for client-side errors
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // CRITICAL DEBUG: If you are seeing errors, temporarily log the variables (DO NOT LEAVE THIS IN PRODUCTION)
    console.log('--- SMTP Local Debug Info ---');
    console.log(`Sending FROM: ${process.env.SMTP_USER} TO: ${process.env.TO_EMAIL}`);
    console.log(`Host:Port: ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}`);
    console.log('-----------------------------');


    const mailData = {
      to: process.env.TO_EMAIL, 
      from: process.env.SMTP_USER, 
      subject: `New Contact Submission from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
      replyTo: email, 
    };

    // This is the line that is currently crashing the process if credentials fail
    await transporter.sendMail(mailData);
    
    // Success: Return a proper JSON response
    return NextResponse.json({ message: 'Email sent successfully!' });
    
  } catch (error) {
    // This catches the Nodemailer error and prints the details to your local terminal
    console.error('--- NODEMAILER CRITICAL ERROR ---');
    console.error('Check App Password, Host, and Port configuration.');
    console.error('Detailed Error:', error); 
    console.error('-----------------------------------');
    
    // Fail: Return a proper JSON 500 response so the frontend doesn't crash
    return NextResponse.json(
      { message: 'Failed to send email due to server misconfiguration.' }, 
      { status: 500 }
    );
  }
}
