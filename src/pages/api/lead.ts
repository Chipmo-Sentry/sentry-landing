/** Pilot lead form handler.
 *
 * Captures a demo request and forwards it to sentry-backend's public
 * `POST /api/v1/leads` endpoint (LD.1), which persists it and pings the
 * founder. When the backend isn't configured, falls back to a stdout log so
 * leads are never silently lost in local/dev runs.
 *
 * Spam protection (LD.2): a hidden `website` honeypot field. Real users leave
 * it empty; bots that fill every input get a friendly redirect and nothing is
 * forwarded. The backend independently rate-limits + re-checks the honeypot.
 */

import type { APIRoute } from "astro";

export const prerender = false;

const BACKEND = import.meta.env.SENTRY_BACKEND_URL ?? "";

export const POST: APIRoute = async ({ request, redirect, clientAddress }) => {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const industry = String(formData.get("industry") ?? "").trim();
  const cameraCount = Number(formData.get("camera_count") ?? 0);
  const honeypot = String(formData.get("website") ?? "").trim();

  // Honeypot tripped → silently accept (send the bot to the thank-you page so
  // it sees a success) but never forward or persist.
  if (honeypot) {
    console.warn("[lead] honeypot tripped — dropped");
    return redirect("/thank-you", 303);
  }

  // Invalid email → bounce back to the form with a friendly inline message
  // (CTA.astro reads ?form=error) instead of showing a bare 400 page.
  if (!email || !email.includes("@")) {
    return redirect("/?form=error#cta", 303);
  }

  const payload = {
    email,
    name: name || null,
    organization: organization || null,
    phone: phone || null,
    industry: industry || null,
    camera_count: Number.isFinite(cameraCount) && cameraCount > 0 ? cameraCount : null,
    source: "landing",
  };

  if (BACKEND) {
    try {
      const resp = await fetch(`${BACKEND}/api/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Forward the real visitor IP so the backend rate-limits per-visitor
          // rather than per-landing-server.
          ...(clientAddress ? { "X-Forwarded-For": clientAddress } : {}),
        },
        body: JSON.stringify(payload),
      });
      if (!resp.ok) {
        console.error("[lead] backend rejected:", resp.status);
      }
    } catch (e) {
      // Don't fail the user request if the backend is down — log so the lead
      // can still be recovered from server logs.
      console.error("[lead] forward failed:", e, JSON.stringify(payload));
    }
  } else {
    console.log("[lead]", JSON.stringify(payload));
  }

  return redirect("/thank-you", 303);
};
