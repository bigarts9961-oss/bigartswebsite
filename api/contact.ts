import { Resend } from "resend";

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default async function handler(req: any, res: any) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    // Check Resend API key before creating the client
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return res.status(500).json({
        success: false,
        error: "Email service is not configured.",
      });
    }

    const resend = new Resend(apiKey);

    const body = req.body as Partial<ContactRequest>;

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    // Required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Please fill in all required fields.",
      });
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid email address.",
      });
    }

    const emailOptions: {
      from: string;
      to: string[];
      subject: string;
      html: string;
      replyTo?: string;
    } = {
      from: "Big Art's Tacos Contact Form <info@bigartstacos.com>",
      to: ["rahul@expansureglobal.com"],
      subject: `New Contact Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 700px; margin: 0 auto; color: #222;">
          <h2 style="color: #c91c2a;">New Contact Form Message</h2>

          <h3>Sender Information</h3>

          <p>
            <strong>Name:</strong><br>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong><br>
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Phone:</strong><br>
            ${phone ? escapeHtml(phone) : "Not provided"}
          </p>

          <h3>Subject</h3>

          <p>
            ${escapeHtml(subject)}
          </p>

          <h3>Message</h3>

          <p>
            ${escapeHtml(message).replace(/\n/g, "<br>")}
          </p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

          <p style="font-size: 12px; color: #777;">
            This message was submitted through the Big Art's Tacos website contact form.
          </p>
        </div>
      `,
      replyTo: email,
    };

    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        error: "Unable to send your message.",
      });
    }

    console.log("Contact email sent:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      error: "Something went wrong while sending your message.",
    });
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}