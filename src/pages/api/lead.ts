/** Pilot lead form handler.
 *
 * M1-д minimal — log + 303 redirect to /thank-you.
 * M2-д sentry-backend-ийн `/api/v1/leads` endpoint руу forward хийнэ.
 */

import type { APIRoute } from "astro";

export const prerender = false;

const BACKEND = import.meta.env.SENTRY_BACKEND_URL ?? "";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const industry = String(formData.get("industry") ?? "").trim();
  const cameraCount = Number(formData.get("camera_count") ?? 0);

  // Invalid email → bounce back to the form with a friendly inline message
  // (CTA.astro reads ?form=error) instead of showing a bare 400 page.
  if (!email || !email.includes("@")) {
    return redirect("/?form=error#cta", 303);
  }

  const payload = {
    email,
    name,
    organization,
    phone,
    industry,
    camera_count: cameraCount,
    // Back-compat alias: the M2 backend `/api/v1/leads` originally expected
    // `store_name`. Send both until the backend contract is finalized.
    store_name: organization,
    source: "landing",
    submitted_at: new Date().toISOString(),
  };

  // Forward to backend if configured (M2+); otherwise stdout log.
  if (BACKEND) {
    try {
      await fetch(`${BACKEND}/api/v1/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      // Don't fail the user request if backend is down — capture anyway.
      console.error("[lead] forward failed:", e);
    }
  } else {
    console.log("[lead]", JSON.stringify(payload));
  }

  return redirect("/thank-you", 303);
};
