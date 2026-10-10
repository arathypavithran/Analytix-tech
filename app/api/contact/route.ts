import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required contact fields" },
        { status: 400 }
      );
    }

    // STUB: Ready for Resend, SendGrid, Postmark, or AWS SES email integration
    // Example:
    // await resend.emails.send({
    //   from: 'inquiries@analytixtech.io',
    //   to: 'info@analytixtech.io',
    //   subject: `New Lead: ${name} (${service})`,
    //   text: message,
    // });

    console.log("[Analytix Contact API] Received strategy consultation inquiry:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      service,
      messageLength: message.length,
    });

    return NextResponse.json({
      success: true,
      message: "Consultation inquiry successfully logged.",
    });
  } catch (error) {
    console.error("[Analytix Contact API] Error processing inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
