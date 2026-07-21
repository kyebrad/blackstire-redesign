interface PageviewPayload {
  path?: string;
  referrer?: string;
}

// Minimal first-party analytics: no third-party account, no cookies, no PII
// beyond what the request already carries. Visible in Netlify's function
// logs today; the shape here is what you'd point at a real store (a
// Netlify Blob, a Sheet, Postgres) if this needed a dashboard later.
export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(null, { status: 405 });
  }

  let body: PageviewPayload = {};
  try {
    body = await req.json();
  } catch {
    // ignore malformed beacons rather than fail the page
  }

  console.log("pageview", {
    path: body.path,
    referrer: body.referrer,
    country: req.headers.get("x-nf-geo") ?? undefined,
    userAgent: req.headers.get("user-agent") ?? undefined,
    at: new Date().toISOString(),
  });

  return new Response(null, { status: 204 });
};

export const config = {
  path: "/api/pageview",
};
