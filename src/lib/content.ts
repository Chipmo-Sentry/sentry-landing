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
    "Камер бүрийг сонор сэрэмжтэй AI харуул болгоно",
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
  eyebrow: T("Дэлгүүрт зориулсан AI хулгай хяналт", "AI shoplifting detection · SaaS"),
  title: T(
    "Хулгайч гарахад нь биш, гараагүй цагт нь барина",
    "Catch shoplifters in the act — not after.",
  ),
  subtitle: T(
    "Танай одоо ашиглаж буй IP камер дээр AI 24/7 хүн бүрд эрсдэлийн оноо тавьдаг. Эрсдэл 70% давмагц ажилтны утсанд бичлэгийн хамт Telegram мэдэгдэл шууд очно. Шинэ тоног төхөөрөмж авах шаардлагагүй — сард ердөө 25,000₮-аас, эхний 3 сар үнэгүй.",
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
    "4 алхам — 5 минутын дотор суулгана",
    "4 steps, installed in under 5 minutes",
  ),
  steps: [
    {
      n: "01",
      title: T("Агент суулгах", "Install the agent"),
      body: T(
        "Дэлгүүрийн компьютер дээр Windows программ (.exe) татаж асаагаад камерынхаа RTSP хаягийг оруулна. Компьютер өөр зүйлд ашиглагдаж байсан ч болно — программ 5%-аас бага хүчин чадал иднэ.",
        "Run the Windows .exe on your shop PC and paste each camera's RTSP URL. Existing PC is fine — agent uses <5% CPU.",
      ),
    },
    {
      n: "02",
      title: T("Бүх камер шууд дэлгэцэнд", "Live stream + AI overlay"),
      body: T(
        "Хөтчөөс хяналтын самбараа нээхэд бүх камер бодит цагт харагдана. AI хүн бүрийн эргэн тойронд 🟢🟡🔴 эрсдэлийн хүрээ зурна. Хоцролт ердөө 1–2 секунд.",
        "Open the dashboard in your browser — every camera live, with AI risk boxes (🟢🟡🔴) drawn around each person. 1–2 second latency.",
      ),
    },
    {
      n: "03",
      title: T("Эрсдэл хэтрэх үед", "Threshold breach"),
      body: T(
        "Хэн нэгний эрсдэл 70% хүрмэгц AI бичлэгийг автоматаар хадгалж, юу болсныг монголоор тайлбарлан ажилтны утсанд Telegram мэдэгдэл илгээнэ.",
        "When a person's risk crosses 70%, AI saves the clip, a VLM writes a reasoning blurb, and staff get a Telegram alert.",
      ),
    },
    {
      n: "04",
      title: T("Цаг алдалгүй арга хэмжээ", "Sensible response"),
      body: T(
        "Ажилтны утсанд бичлэгтэй мэдэгдэл ирэх тул 2 минутын дотор тухайн хүн дээр очиж амжина. Хэрэв буруу байвал ✗ дарахад AI суралцана. Дараа нь бичлэг ухах биш — **урьдчилан сэргийлэлт**.",
        "Staff sees the clip on their phone and can reach the customer within 2 minutes. Mistake? Tap ✗ and the model learns. **Prevention, not just post-event review.**",
      ),
    },
  ],
};

// ── Features (bento grid) ────────────────────────────────────────────
export const FEATURES = {
  title: T("Жинхэнэ дэлгүүрийн ажилд тааруулж бүтээсэн", "Built for the way real stores work"),
  subtitle: T(
    "Монголын ритэйлд 5 жил ажилласан хүний бодож олсон шийдэл",
    "Designed from 5 years of frontline Mongolian retail",
  ),
  cards: [
    {
      kind: "large",
      icon: "live",
      title: T("Шууд хяналт + AI эрсдэлийн хүрээ", "Live monitoring + AI overlay"),
      body: T(
        "Бүх камер нэг дэлгэцэнд шууд харагдана. AI хүн бүрийн дээр 🟢🟡🔴 эрсдэлийн хувийг бодит цагт зурна. 24/7 хүн сууж хянах хэрэггүй.",
        "All cameras live in one grid. AI draws live risk percentages (🟢🟡🔴) per person. No 24/7 human monitoring needed.",
      ),
    },
    {
      kind: "small",
      icon: "shield",
      title: T("Шинэ тоног төхөөрөмж шаардахгүй", "No new hardware"),
      body: T(
        "Танай одоогийн Hikvision/UNV/Dahua/TP-Link камеруудтайгаа. Компьютер дээр ердөө нэг программ суулгахад л болно.",
        "Works with your existing Hikvision/UNV/Dahua/TP-Link cameras. Just a .exe on your shop PC.",
      ),
    },
    {
      kind: "small",
      icon: "telegram",
      title: T("Telegram мэдэгдэл", "Telegram alert"),
      body: T(
        "Ажилтны утсанд бичлэг болон тайлбар монголоор, 5–20 секундын дотор очно.",
        "Staff phone receives the clip + Mongolian reasoning in 5–20 seconds.",
      ),
    },
    {
      kind: "small",
      icon: "save",
      title: T("Дискний орон зай хэмнэнэ", "Storage-friendly"),
      body: T(
        "24/7 бичлэг хийдэггүй. Зөвхөн сэжигтэй мөчүүд (камер тутамд сард ~2 GB) автоматаар хадгалагдана.",
        "No 24/7 recording. Only suspicious moments saved (~2 GB/cam/month).",
      ),
    },
    {
      kind: "small",
      icon: "privacy",
      title: T("Царай таних ҮГҮЙ", "No facial recognition"),
      body: T(
        "Зөвхөн зан төлөвийг ажигладаг — царай таних, биометр мэдээлэл хадгалах огт үгүй.",
        "Behavior-only — we never identify faces or store biometric data.",
      ),
    },
    {
      kind: "small",
      icon: "language",
      title: T("100% Монгол хэл дээр", "100% Mongolian UI"),
      body: T(
        "Хяналтын самбар, мэдэгдэл, AI-ийн тайлбар бүгд монголоор. Англи хэл рүү ч шилжүүлж болно.",
        "Dashboard, alerts, AI reasoning — all in Mongolian. English mode also available.",
      ),
    },
    {
      kind: "medium",
      icon: "feedback",
      title: T("Хуурамч дохиолол өөрөө буурдаг", "It learns from your feedback"),
      body: T(
        "Ажилтны нэг товшилтын тэмдэглэгээгээр AI суралцана. 2 долоо хоногийн дараа хуурамч дохиолол ихэвчлэн ~50% хүртэл буурдаг.",
        "Mark mistakes with one tap. Two weeks in, false alerts drop ~50% as the model adapts to your store.",
      ),
    },
    {
      kind: "medium",
      icon: "lightning",
      title: T("1–2 секундын хоцролт", "1–2 second live latency"),
      body: T(
        "WebRTC технологиор хоцролт 2 секундээс бага — алдагдсаны дараа биш, тэр дор нь арга хэмжээ авах боломжтой.",
        "WebRTC streaming gives sub-2-second latency — enough to actually intervene.",
      ),
    },
  ],
};

// ── Pricing ──────────────────────────────────────────────────────────
export const PRICING = {
  title: T("Энгийн, ил тод үнэ", "Simple, predictable pricing"),
  subtitle: T(
    "Нэг дэлгүүр / сар. Бүх багцад мэдэгдэл хязгааргүй.",
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
        T("Шууд AI эрсдэлийн хүрээ", "Live AI overlay"),
        T("Telegram мэдэгдэл", "Telegram alerts"),
        T("Бичлэг 7 хоног хадгална", "7-day clip retention"),
        T("И-мэйл дэмжлэг", "Email support"),
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
        T("Бичлэг 30 хоног хадгална", "30-day clip retention"),
        T("Өөрөө суралцах (хуурамч дохиолол буурах)", "Auto-learning (FP reduction)"),
        T("Ажлын цагаар нэн тэргүүний дэмжлэг", "Priority support (business hours)"),
        T("Pi Zero edge төхөөрөмж (нэг удаа +200,000₮)", "Pi Zero edge add-on (+$59 one-time)"),
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
        T("Бичлэг 90 хоног хадгална", "90-day clip retention"),
        T("24/7 утсаар дэмжлэг + SLA", "24/7 phone support + SLA"),
        T("Pi 5 NPU edge төхөөрөмж (+500,000₮)", "Pi 5 NPU edge add-on (+$149)"),
        T("Тусгай холболт (POS, ERP)", "Custom integrations (POS, ERP)"),
      ],
      highlight: false,
    },
  ],
};

// ── FAQ ──────────────────────────────────────────────────────────────
export const FAQ = {
  title: T("Түгээмэл асуулт", "Frequently asked"),
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
        "Хүний царайг таних уу?",
        "Does it use facial recognition?",
      ),
      a: T(
        "Үгүй. Бид зөвхөн **зан төлөвийг** дүгнэдэг — гар халаас руу очих, эргэн тойрноо ажих, бөхийх г.м. Хүний нэр таних, биометр мэдээлэл хадгалах огт үгүй. Энэ нь хууль ёсны хувьд цэвэр, үйлчлүүлэгчийн нууцлалд ээлтэй.",
        "No. We score behavior only — hands going to pockets, looking around, crouching, etc. We never identify or store biometric data. Cleaner legally, friendlier to your customers.",
      ),
    },
    {
      q: T(
        "Хуурамч дохиолол хэр их вэ?",
        "How many false alerts will we get?",
      ),
      a: T(
        "Эхний долоо хоногт ~20–30% хуурамч дохиолол гарна. Ажилтан ✗ дарж AI-г сургах тусам 2 дахь долоо хоногт ихэвчлэн 10–15% хүртэл буурдаг. Дэлгүүр бүр өөрийн гэсэн суралцах тохиргоотой.",
        "About 20–30% false alerts the first week. As staff mark them ✗, the model adapts — usually 10–15% by week 2. Per-store learning loop.",
      ),
    },
    {
      q: T(
        "Видео бичлэгийг хаана хадгалах вэ? Нууцлал?",
        "Where is the video stored? Privacy?",
      ),
      a: T(
        "**24/7 бичлэг хадгалдаггүй.** Зөвхөн эрсдэл хэтэрсэн мөч (5–15 сек бичлэг) хадгалагдана. Энэ нь Hetzner-ийн EU дата төвд — GDPR стандарттай. 7–90 хоногийн дараа автоматаар устгана. Үйлчлүүлэгч хүсвэл бүх мэдээллээ татаж эсвэл устгаж болно.",
        "**We don't record 24/7.** Only threshold-breach moments (5–15 sec clips) are saved, on Hetzner EU servers — GDPR-grade. Auto-deleted after 7–90 days. Customers can export or delete all their data on request.",
      ),
    },
    {
      q: T(
        "Цахилгаан тасрахад юу болох вэ?",
        "What happens if power goes out?",
      ),
      a: T(
        "Агент компьютер дахин асмагц өөрөө сэргэдэг. Камер, сүлжээ эргэж ирмэгц дамжуулалт дахин эхэлнэ. UPS байвал сайн — гэхдээ заавал биш.",
        "Agent auto-resumes when the PC powers back on. Streaming restarts as soon as camera + network return. A UPS is nice but not required.",
      ),
    },
    {
      q: T(
        "Хичнээн камер хэрэгтэй вэ?",
        "How many cameras do I need?",
      ),
      a: T(
        "Хамгийн чухал газрууд: касс орчим (хулгай ихтэй), хаалга (гарах үеийн алдагдал), үнэт бараа (электрон, гоо сайхан, согтууруулах). Жижиг дэлгүүрт 2–4, супермаркетад 8–15 камер хангалттай.",
        "Focus on hotspots: checkout area (theft), exits (loss-on-exit), premium shelves (electronics, cosmetics, alcohol). 2–4 cameras for a small convenience store, 8–15 for a supermarket.",
      ),
    },
    {
      q: T(
        "Хүчирхэг компьютер эсвэл GPU хэрэгтэй юу?",
        "Do I need a GPU or high-end PC?",
      ),
      a: T(
        "Үгүй. Агент 5%-аас бага хүчин чадал иднэ (i3, 4 GB RAM ч хангалттай). AI-ийн хүнд тооцоолол манай cloud дээр явдаг — танай компьютер дээр биш.",
        "No. The agent uses <5% CPU (even an i3 with 4 GB RAM is fine). The heavy AI (VLM) runs on our cloud, not your PC.",
      ),
    },
    {
      q: T(
        "Интернэт тасрахад юу болох вэ?",
        "What if internet goes down?",
      ),
      a: T(
        "AI шинжилгээ түр зогсоно (cloud-д хүрэхгүй болно). Гэхдээ интернэт сэргэмэгц агент шууд дахин холбогддог. Шууд хяналт зөвхөн интернэттэй үед ажиллана.",
        "AI analysis pauses (no cloud reach). Agent auto-reconnects as soon as internet returns. Live monitoring requires internet — it's a cloud service.",
      ),
    },
  ],
};

// ── CTA ──────────────────────────────────────────────────────────────
export const CTA = {
  title: T(
    "3 сар үнэгүй туршаад үзээрэй",
    "Try it free for 3 months",
  ),
  subtitle: T(
    "Пилот хөтөлбөрт хязгаарлагдмал тооны дэлгүүр авна — хүсэлтээ үлдээгээрэй, 24 цагийн дотор хариулна.",
    "Limited pilot spots — submit your interest and we'll reply within 24 hours.",
  ),
  emailPlaceholder: T("email@delgur.mn", "you@store.com"),
  storeFieldPlaceholder: T("Дэлгүүрийн нэр", "Store name"),
  cameraCountPlaceholder: T("Камерын тоо", "Number of cameras"),
  submit: T("Хүсэлт явуулах", "Request access"),
  privacyNote: T(
    "И-мэйлийг зөвхөн пилотын талаар холбоо барихад ашиглана. Спам байхгүй.",
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
