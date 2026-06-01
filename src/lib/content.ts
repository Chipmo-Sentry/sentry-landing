/** Бүх marketing copy нэг газар. Шинэ хэл/текст нэмэхэд эндээ.
 *  Pattern: { mn: "...", en: "..." }. */

import type { Lang } from "./i18n";

type LocalizedString = Record<Lang, string>;

const T = (mn: string, en: string): LocalizedString => ({ mn, en });

export function tr(s: LocalizedString, lang: Lang): string {
  return s[lang];
}

// ── Brand ────────────────────────────────────────────────────────────
export const BRAND = {
  name: "Chipmo Sentry",
  tagline: T(
    "Дэлгүүрийн камер — ажилтанд орлох AI",
    "Your store cameras — staffed by AI",
  ),
};

// ── Nav ──────────────────────────────────────────────────────────────
export const NAV = [
  { href: "#how", label: T("Хэрхэн ажилладаг", "How it works") },
  { href: "#features", label: T("Боломжууд", "Features") },
  { href: "#pricing", label: T("Үнэ", "Pricing") },
  { href: "#faq", label: T("Асуулт", "FAQ") },
];

// ── Hero ─────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: T("AI-аар хулгайн илрүүлэлт SaaS", "AI shoplifting detection · SaaS"),
  title: T(
    "Хулгайч гарахад нь биш, гараагүй цагт нь барина",
    "Catch shoplifters in the act — not after.",
  ),
  subtitle: T(
    "Чиний одоо байгаа IP камер дээр AI 24/7 хүн бүрд эрсдлийн оноо тавьж, 70%-аас давсан мөч нь staff-н утсанд Telegram-аар очно. Шинэ hardware шаардлагагүй, өдрийн $0.30-аас эхэлнэ.",
    "AI scores every shopper's risk on the cameras you already own. When risk crosses 70%, staff get a Telegram alert with the clip — in under 15 seconds. No new hardware. Starts at $0.30/day.",
  ),
  primaryCta: T("Үнэгүй туршилт авах", "Start free pilot"),
  secondaryCta: T("Хэрхэн ажилладаг", "See how it works"),
  trustline: T(
    "Hikvision · Dahua · UNV · Tapo — RTSP стандарттай аль ч камертай нийцнэ",
    "Works with any RTSP IP camera — Hikvision, Dahua, UNV, Tapo, and more",
  ),
};

// ── How It Works (4 steps) ──────────────────────────────────────────
export const HOW = {
  title: T("Хэрхэн ажилладаг", "How it works"),
  subtitle: T(
    "4 алхамтай, 5 минутын дотор install",
    "4 steps, installed in under 5 minutes",
  ),
  steps: [
    {
      n: "01",
      title: T("Агент суулгах", "Install the agent"),
      body: T(
        "Дэлгүүрийн PC дээр Windows .exe татаад асаа. Camera-ийн RTSP URL-ээ оруул. PC өөр зүйлд ашиглагдаж байсан ч зүгээр.",
        "Run the Windows .exe on your shop PC and paste each camera's RTSP URL. Existing PC is fine — agent uses <5% CPU.",
      ),
    },
    {
      n: "02",
      title: T("Live stream + AI overlay", "Live stream + AI overlay"),
      body: T(
        "Browser-аас Dashboard нээгээд бүх камер бодит цагт харагдана. AI хүн тус бүрд 🟢🟡🔴 эрсдэлийн box зурна. Latency 1-2 секунд.",
        "Open the dashboard in your browser — every camera live, with AI risk boxes (🟢🟡🔴) drawn around each person. 1–2 second latency.",
      ),
    },
    {
      n: "03",
      title: T("Threshold breach", "Threshold breach"),
      body: T(
        "Нэг хүний эрсдэл 70% хүрвэл AI clip автомат хадгалж, VLM нэмэлт тайлбар бичиж, staff Telegram alert хүлээн авна.",
        "When a person's risk crosses 70%, AI saves the clip, a VLM writes a reasoning blurb, and staff get a Telegram alert.",
      ),
    },
    {
      n: "04",
      title: T("Reasonable response", "Sensible response"),
      body: T(
        "Staff утасанд clip-тэй мэдээлэл ирнэ — 2 минутын дотор тэр хүнд хүрч очно. Алдсан бол ✗ дарж AI-г сургана. Pure post-event review биш — **prevention**.",
        "Staff sees the clip on their phone and can reach the customer within 2 minutes. Mistake? Tap ✗ and the model learns. **Prevention, not just post-event review.**",
      ),
    },
  ],
};

// ── Features (bento grid) ────────────────────────────────────────────
export const FEATURES = {
  title: T("Юунд анхаардаг вэ", "Built for the way real stores work"),
  subtitle: T(
    "5 жил Монгол retail-д ажиллаж байсан хүний бодсон засвар",
    "Designed from 5 years of frontline Mongolian retail",
  ),
  cards: [
    {
      kind: "large",
      icon: "live",
      title: T("Live monitoring + AI overlay", "Live monitoring + AI overlay"),
      body: T(
        "Бүх камер дэлгэцийн grid-д live харагдана. AI бодит цагт хүн бүрд 🟢🟡🔴 эрсдэлийн % зурна. 24/7 хүн ажиллах хэрэггүй.",
        "All cameras live in one grid. AI draws live risk percentages (🟢🟡🔴) per person. No 24/7 human monitoring needed.",
      ),
    },
    {
      kind: "small",
      icon: "shield",
      title: T("Шинэ hardware шаардлагагүй", "No new hardware"),
      body: T(
        "Чиний одоо байгаа Hikvision/UNV/Dahua/TP-Link камеруудтай. PC дээр .exe л.",
        "Works with your existing Hikvision/UNV/Dahua/TP-Link cameras. Just a .exe on your shop PC.",
      ),
    },
    {
      kind: "small",
      icon: "telegram",
      title: T("Telegram alert", "Telegram alert"),
      body: T(
        "Staff утаст clip + reasoning Mongolian хэлээр ирнэ. 5-20 секундын дотор.",
        "Staff phone receives the clip + Mongolian reasoning in 5–20 seconds.",
      ),
    },
    {
      kind: "small",
      icon: "save",
      title: T("Дискний орон зай хэмнэнэ", "Storage-friendly"),
      body: T(
        "24/7 бичлэг ҮГҮЙ. Зөвхөн сэжигтэй мөч (~2 GB/cam/сар) автоматаар хадгалагдана.",
        "No 24/7 recording. Only suspicious moments saved (~2 GB/cam/month).",
      ),
    },
    {
      kind: "small",
      icon: "privacy",
      title: T("Хүний таних ҮГҮЙ", "No facial recognition"),
      body: T(
        "Зөвхөн зан үйлийн шинж тэмдэг — нэр таних, биометр хадгалах ҮГҮЙ.",
        "Behavior-only — we never identify faces or store biometric data.",
      ),
    },
    {
      kind: "small",
      icon: "language",
      title: T("100% Монгол UI", "100% Mongolian UI"),
      body: T(
        "Dashboard, alert, AI-н тайлбар бүгд Монголоор. English mode мөн бий.",
        "Dashboard, alerts, AI reasoning — all in Mongolian. English mode also available.",
      ),
    },
    {
      kind: "medium",
      icon: "feedback",
      title: T("Худал сэрэлтийг засдаг", "It learns from your feedback"),
      body: T(
        "Worker AI-ийг ажилчин тэмдэглэлээр сургана. 2 долоо хоногийн дараа худал сэрэлт 50%-аар буурдаг.",
        "Mark mistakes with one tap. Two weeks in, false alerts drop ~50% as the model adapts to your store.",
      ),
    },
    {
      kind: "medium",
      icon: "lightning",
      title: T("1-2 секундын live latency", "1–2 second live latency"),
      body: T(
        "WebRTC-ээр HLS-ийн 6-10 секундын алдагдал биш — real-time prevention-д тохирно.",
        "WebRTC streaming gives sub-2-second latency — enough to actually intervene.",
      ),
    },
  ],
};

// ── Pricing ──────────────────────────────────────────────────────────
export const PRICING = {
  title: T("Хямд, тодорхой", "Simple, predictable pricing"),
  subtitle: T(
    "Нэг дэлгүүр / сар. Бүх tier-д alert хязгааргүй.",
    "Per store / month. Unlimited alerts on every tier.",
  ),
  pilotNote: T(
    "🎁 Эхний 3 сар үнэгүй (пилот үе)",
    "🎁 First 3 months free (pilot period)",
  ),
  tiers: [
    {
      id: "starter",
      name: T("Starter", "Starter"),
      price: T("25,000₮", "$8"),
      period: T("/ сар", "/ mo"),
      tagline: T("Жижиг дэлгүүр, 1-4 камер", "Small shop, 1–4 cameras"),
      cta: T("Туршилт эхлүүлэх", "Start trial"),
      features: [
        T("4 хүртэл камер", "Up to 4 cameras"),
        T("Live AI overlay", "Live AI overlay"),
        T("Telegram alert", "Telegram alerts"),
        T("7 өдрийн clip retention", "7-day clip retention"),
        T("Email support", "Email support"),
      ],
      highlight: false,
    },
    {
      id: "pro",
      name: T("Pro", "Pro"),
      price: T("50,000₮", "$15"),
      period: T("/ сар", "/ mo"),
      tagline: T("Дунд хэмжээний дэлгүүр", "Medium store, multi-aisle"),
      cta: T("Туршилт эхлүүлэх", "Start trial"),
      features: [
        T("12 хүртэл камер", "Up to 12 cameras"),
        T("Starter-ын бүх боломж", "Everything in Starter"),
        T("30 өдрийн clip retention", "30-day clip retention"),
        T("Auto-learning (худал сэрэлт буурах)", "Auto-learning (FP reduction)"),
        T("Ажлын цагт priority support", "Priority support (business hours)"),
        T("Pi Zero edge box опц (+200,000₮ нэг удаа)", "Pi Zero edge add-on (+$59 one-time)"),
      ],
      highlight: true,
    },
    {
      id: "premium",
      name: T("Premium", "Premium"),
      price: T("100,000₮", "$30"),
      period: T("/ сар", "/ mo"),
      tagline: T("Том сүлжээ, аюулгүй байдлын баг", "Chains, in-house security"),
      cta: T("Холбоо барих", "Talk to us"),
      features: [
        T("20 хүртэл камер", "Up to 20 cameras"),
        T("Pro-ийн бүх боломж", "Everything in Pro"),
        T("90 өдрийн clip retention", "90-day clip retention"),
        T("24/7 phone support + SLA", "24/7 phone support + SLA"),
        T("Pi 5 NPU edge box опц (+500,000₮)", "Pi 5 NPU edge add-on (+$149)"),
        T("Custom integration (POS, ERP)", "Custom integrations (POS, ERP)"),
      ],
      highlight: false,
    },
  ],
};

// ── FAQ ──────────────────────────────────────────────────────────────
export const FAQ = {
  title: T("Олон асуудаг асуулт", "Frequently asked"),
  items: [
    {
      q: T(
        "Шинэ камер худалдан авах хэрэгтэй юу?",
        "Do I need to buy new cameras?",
      ),
      a: T(
        "Үгүй. RTSP стандарттай аль ч IP камертай (Hikvision, Dahua, UNV, TP-Link, Tapo, Reolink, ...) ажиллана. Сүүлийн 5 жилд худалдан авсан бараг бүх камер RTSP-тэй.",
        "No. Any IP camera with RTSP works (Hikvision, Dahua, UNV, TP-Link, Tapo, Reolink, ...). Almost every camera sold in the last 5 years supports RTSP.",
      ),
    },
    {
      q: T(
        "Хүний нүүрийг таних уу?",
        "Does it use facial recognition?",
      ),
      a: T(
        "Үгүй. Бид зөвхөн **зан үйлийг** дүгнэдэг — гар халаас руу очих, эргэж харах, бөхийх г.м. Хүний нэр таних, биометр хадгалах ҮГҮЙ. Энэ нь хууль ёсны хувьд цэвэр, customer-ийн нууцлалд ээлтэй.",
        "No. We score behavior only — hands going to pockets, looking around, crouching, etc. We never identify or store biometric data. Cleaner legally, friendlier to your customers.",
      ),
    },
    {
      q: T(
        "Худал сэрэлт хэр их вэ?",
        "How many false alerts will we get?",
      ),
      a: T(
        "Эхний долоо хоногт ~20-30% худал сэрэлт. Staff ✗ дараад AI-ийг сургахад 2 долоо хоногын дараа 10-15% хүртэл буурдаг. Дэлгүүр тус бүрд тохируулсан loop-той.",
        "About 20–30% false alerts the first week. As staff mark them ✗, the model adapts — usually 10–15% by week 2. Per-store learning loop.",
      ),
    },
    {
      q: T(
        "Видео бичлэгийг хаана хадгална? Нууцлал?",
        "Where is the video stored? Privacy?",
      ),
      a: T(
        "**24/7 бичлэг ХАДГАЛАХГҮЙ.** Зөвхөн threshold-аас давсан мөч (5-15 сек clip) хадгалагдана. Энэ нь Hetzner-ын EU data center дээр — GDPR-стандарттай. 7-90 хоногийн дараа автоматаар устгана. Customer хүсвэл бүх data-аа татаж эсвэл устгаж болно.",
        "**We don't record 24/7.** Only threshold-breach moments (5–15 sec clips) are saved, on Hetzner EU servers — GDPR-grade. Auto-deleted after 7–90 days. Customers can export or delete all their data on request.",
      ),
    },
    {
      q: T(
        "Цахилгаан тасрахад юу болох вэ?",
        "What happens if power goes out?",
      ),
      a: T(
        "Агент PC асаасны дараа автоматаар сэргэдэг. Camera, network эргэж ирмэгцээ stream дахин эхэлнэ. UPS байгаа нь сайн — гэхдээ заавал биш.",
        "Agent auto-resumes when the PC powers back on. Streaming restarts as soon as camera + network return. A UPS is nice but not required.",
      ),
    },
    {
      q: T(
        "Хичнээн камер хэрэгтэй вэ?",
        "How many cameras do I need?",
      ),
      a: T(
        "Хамгийн чухал газрууд: касс орчим (хулгай ихтэй), хаалга (гарах үеийн алдагдал), үнэт бараа (electronics, гоо сайхан, согтууруулах). Жижиг convenience store-д 2-4, supermarket-д 8-15 камер хангалттай.",
        "Focus on hotspots: checkout area (theft), exits (loss-on-exit), premium shelves (electronics, cosmetics, alcohol). 2–4 cameras for a small convenience store, 8–15 for a supermarket.",
      ),
    },
    {
      q: T(
        "GPU эсвэл өндөр чанартай PC хэрэгтэй юу?",
        "Do I need a GPU or high-end PC?",
      ),
      a: T(
        "Үгүй. Агент 5%-аас бага CPU зарцуулна (i3, 4 GB RAM ч хангалттай). AI-ийн хүнд ажил (VLM) манай cloud дээр явдаг — таны PC дээр биш.",
        "No. The agent uses <5% CPU (even an i3 with 4 GB RAM is fine). The heavy AI (VLM) runs on our cloud, not your PC.",
      ),
    },
    {
      q: T(
        "Интернет тасрахад юу болох вэ?",
        "What if internet goes down?",
      ),
      a: T(
        "AI шинжилгээ түр зогсоно (cloud GPU-д хүрэхгүй болно). Гэхдээ агент сэргэхээр шууд reconnect хийдэг. Live monitoring зөвхөн интернеттэй үед.",
        "AI analysis pauses (no cloud reach). Agent auto-reconnects as soon as internet returns. Live monitoring requires internet — it's a cloud service.",
      ),
    },
  ],
};

// ── CTA ──────────────────────────────────────────────────────────────
export const CTA = {
  title: T(
    "3 сар үнэгүй туршаад үз",
    "Try it free for 3 months",
  ),
  subtitle: T(
    "Pilot хөтөлбөрт хязгаарлагдмал тооны дэлгүүр — хүсэлт явуулаад 24 цагт хариулна.",
    "Limited pilot spots — submit your interest and we'll reply within 24 hours.",
  ),
  emailPlaceholder: T("email@delgur.mn", "you@store.com"),
  storeFieldPlaceholder: T("Дэлгүүрийн нэр", "Store name"),
  cameraCountPlaceholder: T("Камерын тоо", "Number of cameras"),
  submit: T("Хүсэлт явуулах", "Request access"),
  privacyNote: T(
    "Email-ийг зөвхөн pilot-той холбоо барихад ашиглана. Spam үгүй.",
    "Email used only to reach you about the pilot. No spam.",
  ),
};

// ── Footer ───────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: T(
    "Монголын ритэйлд зориулсан AI хяналт",
    "AI surveillance built for Mongolian retail",
  ),
  product: T("Бүтээгдэхүүн", "Product"),
  productLinks: [
    { href: "#how", label: T("Хэрхэн ажилладаг", "How it works") },
    { href: "#features", label: T("Боломжууд", "Features") },
    { href: "#pricing", label: T("Үнэ", "Pricing") },
    { href: "#faq", label: T("Асуулт хариулт", "FAQ") },
  ],
  company: T("Компани", "Company"),
  companyLinks: [
    { href: "/privacy", label: T("Нууцлал", "Privacy") },
    { href: "/terms", label: T("Үйлчилгээний нөхцөл", "Terms") },
    { href: "mailto:hello@chipmo.mn", label: T("Холбоо барих", "Contact") },
  ],
  open: T("Open source", "Open source"),
  openLinks: [
    { href: "https://github.com/Chipmo-Sentry", label: "GitHub" },
  ],
  copyright: T(
    "© 2026 Chipmo LLC · Улаанбаатар, Монгол",
    "© 2026 Chipmo LLC · Ulaanbaatar, Mongolia",
  ),
};
