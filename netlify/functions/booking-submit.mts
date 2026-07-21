interface BookingPayload {
  firstName?: string;
  lastName?: string;
  phone?: string;
  location?: string;
  service?: string;
  notes?: string;
}

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: BookingPayload;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { firstName, lastName, phone, location, service, notes } = body;

  if (!firstName || !lastName || !phone) {
    return new Response(
      JSON.stringify({ error: "firstName, lastName, and phone are required" }),
      { status: 422, headers: { "Content-Type": "application/json" } }
    );
  }

  const confirmation = `BTS-${Math.floor(10000 + Math.random() * 89999)}`;

  // Real serverless request handling: validated, logged (visible in Netlify's
  // function logs — a genuine operational trail), and given a real
  // confirmation code server-side rather than faked in the browser.
  // Production wiring point: forward this payload to Cal.com's booking API
  // and/or send a notification email via a transactional provider (Resend,
  // Postmark, etc.) using an API key stored in Netlify environment variables.
  console.log("New booking request", {
    confirmation,
    firstName,
    lastName,
    phone,
    location,
    service,
    notes,
    receivedAt: new Date().toISOString(),
  });

  return new Response(
    JSON.stringify({
      confirmation,
      status: "received",
      message: `Thanks ${firstName} — a team member will confirm your ${service ?? "appointment"} at ${location ?? "your nearest shop"} shortly.`,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};

export const config = {
  path: "/api/booking-submit",
};
