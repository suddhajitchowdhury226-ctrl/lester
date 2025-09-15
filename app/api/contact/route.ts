import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, category, budget, message } = body;

    if (!name || !email || !category || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // This will be replaced with your domain
      to: ['lestercalvert377@gmail.com', 'supratimdhara@gmail.com'],
      subject: `🚀 New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Project Inquiry</h2>
          <p>You've received a new project inquiry through your website contact form.</p>
          <h3>Project Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Company:</strong> ${company || 'Not specified'}</li>
            <li><strong>Service Category:</strong> ${category}</li>
            <li><strong>Budget Range:</strong> ${budget || 'Not specified'}</li>
          </ul>
          <h3>Message:</h3>
          <p>${message}</p>
          <hr>
          <p><small>This message was sent from the website contact form on ${new Date().toLocaleString()}.</small></p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
