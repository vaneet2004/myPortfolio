import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "shahvaneet@example.com"

    console.log("[v0] Contact form received:")
    console.log("[v0] Name:", name)
    console.log("[v0] Email:", email)
    console.log("[v0] Message:", message)
    console.log("[v0] RESEND_API_KEY exists:", !!RESEND_API_KEY)
    console.log("[v0] RECIPIENT_EMAIL:", RECIPIENT_EMAIL)

    if (!RESEND_API_KEY) {
      console.log("[v0] WARNING: RESEND_API_KEY not found! Emails won't be sent.")
      console.log("[v0] Contact form submission logged (email service not configured):", {
        name,
        email,
        message,
        timestamp: new Date(),
      })

      return NextResponse.json(
        {
          success: true,
          message: "Message received! I'll get back to you soon.",
        },
        { status: 200 },
      )
    }

    // Send email to your inbox
    console.log("[v0] Sending email to:", RECIPIENT_EMAIL)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: RECIPIENT_EMAIL,
        subject: `New Message from ${name} - Portfolio Contact`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00ff88;">New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border: 1px solid #00ff88; margin: 20px 0;">
            <h3 style="color: #00d9ff;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            <hr style="border: 1px solid #00ff88; margin: 20px 0;">
            <p style="color: #999; font-size: 12px;">Sent from your portfolio contact form</p>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] Resend error:", errorData)
      throw new Error("Failed to send email")
    }

    console.log("[v0] Email sent successfully!")
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
