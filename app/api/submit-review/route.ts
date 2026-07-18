import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, age, sipAmount, insuranceCover, consultationDate } = body;

    // Create a transporter using your email service (e.g., Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to yourself
      subject: `New Portfolio Review Request: ${fullName}`,
      html: `
        <h1>New Portfolio Review Request</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Monthly SIP:</strong> ₹${sipAmount}</p>
        <p><strong>Existing Life Cover:</strong> ₹${insuranceCover}</p>
        <p><strong>Preferred Consultation:</strong> ${new Date(consultationDate).toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ message: 'Success! Your request has been received.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}