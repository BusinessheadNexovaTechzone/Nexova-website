import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();
    
    // Extract form fields
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const linkedin = formData.get('linkedin') as string;
    const message = formData.get('message') as string;
    const resumeFile = formData.get('resume') as File;

    // Validate required fields
    if (!fullName || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Validate file
    if (!resumeFile || resumeFile.size === 0) {
      return NextResponse.json(
        { error: 'Please upload your resume.' },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(resumeFile.type)) {
      return NextResponse.json(
        { error: 'Please upload a PDF, DOC, or DOCX file.' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    if (resumeFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Resume file size must be less than 5MB.' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await resumeFile.arrayBuffer();
    const fileBuffer = Buffer.from(bytes);
    const fileName = resumeFile.name;
    const fileType = resumeFile.type;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare HTML email content for HR
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1E3A5F 0%, #0F2B45 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { padding: 30px; background: #f9f9f9; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; padding: 12px; background: white; border-radius: 8px; border-left: 3px solid #dc2626; }
          .label { font-weight: bold; color: #1E3A5F; display: block; margin-bottom: 8px; font-size: 14px; }
          .value { color: #333; font-size: 15px; }
          .resume-badge { display: inline-block; padding: 8px 15px; background: #dc2626; color: white; border-radius: 5px; font-size: 13px; font-weight: bold; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; border-top: 1px solid #e0e0e0; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📄 New Job Application with Resume</h2>
            <p style="margin: 5px 0 0 0; font-size: 16px;">Position: <strong>${position}</strong></p>
          </div>
          <div class="content">
            <h3>👤 Candidate Details:</h3>
            
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${fullName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value">${email}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">${phone}</div>
            </div>
            
            <div class="field">
              <div class="label">Position Applied For</div>
              <div class="value">${position}</div>
            </div>
            
            <div class="field">
              <div class="label">Years of Experience</div>
              <div class="value">${experience || 'Not specified'}</div>
            </div>
            
            <div class="field">
              <div class="label">LinkedIn Profile</div>
              <div class="value">${linkedin ? `<a href="${linkedin}" target="_blank" style="color: #dc2626;">${linkedin}</a>` : 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">Cover Letter / Message</div>
              <div class="value">${message?.replace(/\n/g, '<br>') || 'No message provided.'}</div>
            </div>
            
            <div class="field">
              <div class="label">Resume Attachment</div>
              <div class="value">
                <span class="resume-badge">📎 ${fileName}</span>
              </div>
            </div>
          </div>
          <div class="footer">
            <p>This application was submitted through the Nexova Tech Zone Careers Portal.</p>
            <p>© ${new Date().getFullYear()} Nexova Tech Zone. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to HR with attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'businesshead@nexovatechzone.com',
      subject: `New Job Application with Resume - ${position} - ${fullName}`,
      html: emailContent,
      attachments: [{
        filename: fileName,
        content: fileBuffer,
        contentType: fileType,
      }],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true,
        message: 'Application submitted successfully!' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting your application. Please try again.' },
      { status: 500 }
    );
  }
}