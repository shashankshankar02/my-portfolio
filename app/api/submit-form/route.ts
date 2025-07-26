import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Validate form data
    if (!formData.name || !formData.email) {
      return NextResponse.json({ 
        error: 'Missing required fields' 
      }, { status: 400 })
    }

    // Determine email content based on form type
    const emailContent = formData.type === 'seo-audit' 
      ? createAuditRequestEmail(formData)
      : createConsultationRequestEmail(formData)

    // Send email using Resend's default domain
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Default Resend sender
      to: 'shashank.m.s2580@gmail.com',
      subject: emailContent.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
          <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h1 style="color: #333; border-bottom: 2px solid #4a90e2; padding-bottom: 10px;">${emailContent.subject}</h1>
            ${emailContent.body}
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              This is an automated notification from your portfolio website.
            </p>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('Email send error:', error)
      return NextResponse.json({ 
        error: 'Failed to send notification email',
        details: JSON.stringify(error)
      }, { status: 500 })
    }

    // Log submission
    console.log('Form Submission:', formData)

    return NextResponse.json({ 
      message: 'Submission successful', 
      emailSent: true,
      data: data
    }, { status: 200 })

  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ 
      error: 'Submission failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Helper function to create email for SEO Audit request
function createAuditRequestEmail(data: any) {
  return {
    subject: 'New SEO Audit Request',
    body: `
      <div style="color: #333;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Website:</strong> ${data.website}</p>
        <p>A potential client has requested an SEO audit. Please review their website and prepare a comprehensive analysis.</p>
      </div>
    `
  }
}

// Helper function to create email for Consultation request
function createConsultationRequestEmail(data: any) {
  return {
    subject: 'New Consultation Request',
    body: `
      <div style="color: #333;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Goals:</strong> ${data.goals}</p>
        <p>A potential client is interested in scheduling a consultation. Please review their goals and reach out to discuss further.</p>
      </div>
    `
  }
} 