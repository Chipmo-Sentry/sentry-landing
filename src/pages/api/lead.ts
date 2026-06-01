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
  const storeName = String(formData.get("store_name") ?? "").trim();
  const cameraCount = Number(formData.get("camera_count") ?? 0);

  if (!email || !email.includes("@")) {
    return new Response("Invalid email", { status: 400 });
  }

  const payload = {
    email,
    store_name: storeName,
    camera_count: cameraCount,
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
