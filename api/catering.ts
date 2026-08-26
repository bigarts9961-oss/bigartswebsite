import { Resend } from "resend";

interface CateringRequest {
  name: string;
  phone: string;
  email?: string;
  date: string;
  headcount: string | number;
  eventType: string;
  package?: string;
  notes?: string;
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

    const body = req.body as Partial<CateringRequest>;

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const date = String(body.date || "").trim();
    const headcount = String(body.headcount || "").trim();
    const eventType = String(body.eventType || "").trim();
    const cateringPackage = String(body.package || "").trim();
    const notes = String(body.notes || "").trim();

    // Required fields
    if (!name || !phone || !date || !headcount || !eventType) {
      return res.status(400).json({
        success: false,
        error: "Please fill in all required fields.",
      });
    }

    // Basic email validation if email was provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
      from: "Big Art's Tacos Catering <info@bigartstacos.com>",
      to: ["rahul@expansureglobal.com"],
      subject: `New Catering Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 700px; margin: 0 auto; color: #222;">
          <h2 style="color: #c91c2a;">New Catering Inquiry</h2>

          <h3>Customer Information</h3>

          <p>
            <strong>Name:</strong><br>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Phone:</strong><br>
            ${escapeHtml(phone)}
          </p>

          <p>
            <strong>Email:</strong><br>
            ${email ? escapeHtml(email) : "Not provided"}
          </p>

          <h3>Event Information</h3>

          <p>
            <strong>Event Date:</strong><br>
            ${escapeHtml(date)}
          </p>

          <p>
            <strong>Estimated Headcount:</strong><br>
            ${escapeHtml(headcount)}
          </p>

          <p>
            <strong>Event Type:</strong><br>
            ${escapeHtml(eventType)}
          </p>

          <p>
            <strong>Catering Package:</strong><br>
            ${escapeHtml(cateringPackage || "Not specified")}
          </p>

          <h3>Additional Notes</h3>

          <p>
            ${
              notes
                ? escapeHtml(notes).replace(/\n/g, "<br>")
                : "No additional notes provided."
            }
          </p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

          <p style="font-size: 12px; color: #777;">
            This catering inquiry was submitted through the Big Art's Tacos website.
          </p>
        </div>
      `,
    };

    // Only add Reply-To when customer supplied an email
    if (email) {
      emailOptions.replyTo = email;
    }

    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        error: "Unable to send catering request.",
      });
    }

    console.log("Catering email sent:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Catering request sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Catering API error:", error);

    return res.status(500).json({
      success: false,
      error: "Something went wrong while sending your request.",
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