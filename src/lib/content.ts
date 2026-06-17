/** Бүх marketing copy нэг газар. Шинэ хэл/текст нэмэхэд эндээ.
 *  Pattern: { mn: "...", en: "..." }. Монгол primary, English secondary. */

import type { Lang } from "./i18n";

type LocalizedString = Record<Lang, string>;

const T = (mn: string, en: string): LocalizedString => ({ mn, en });

export function tr(s: LocalizedString, lang: Lang): string {
  return s[lang];
}

// ── Brand ────────────────────────────────────────────────────────────
export const BRAND = {
  name: "Sentry",
  tagline: T(
    "Дэлгүүрийн CCTV-г 24/7 AI хяналтын ажилтан болгоно",
    "Turns your store's CCTV into a 24/7 AI loss-prevention operator",
  ),
};

// ── Nav (хуудасны шинэ дараалалд тааруулсан) ─────────────────────────
export const NAV = [
  { href: "#risks", label: T("Эрсдэл", "Detection") },
  { href: "#how", label: T("Хэрхэн ажилладаг", "How it works") },
  { href: "#use-cases", label: T("Бүсүүд", "Use cases") },
  { href: "#pricing", label: T("Үнэ", "Pricing") },
  { href: "#faq", label: T("Асуулт", "FAQ") },
];

// ── Hero ─────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: T("Ритэйлд зориулсан AI хяналт", "AI loss prevention for retail"),
  title: T(
    "24/7 камер хяналтын AI ажилтантай болоорой",
    "Get a 24/7 AI camera-monitoring operator",
  ),
  subtitle: T(
    "Таны дэлгүүрийн одоо байгаа камерыг ашиглан хулгай, сэжигтэй үйлдэл, кассын залилан болон дотоод алдагдлыг бодит цагт илрүүлж шууд мэдэгдэнэ.",
    "Use your store's existing cameras to catch shoplifting, suspicious behaviour, checkout fraud, and internal shrinkage — in real time.",
  ),
  bullets: [
    T("Шинэ камер шаардлагагүй", "No new cameras"),
    T("24/7 автомат хяналт", "24/7 automated monitoring"),
    T("Бодит цагийн сэрэмжлүүлэг", "Real-time alerts"),
    T(
      "Жижиг дэлгүүрээс том ритэйл сүлжээ хүртэл",
      "From a single shop to a national retail chain",
    ),
  ],
  primaryCta: T("Demo үзэх", "Book a demo"),
  secondaryCta: T("Үнийн санал авах", "Get a quote"),
  trustline: T(
    "Дэлгүүр, ритэйл сүлжээнд туршилтын төсөл хийх боломжтой.",
    "Pilot projects available for shops and retail chains.",
  ),
  // Hero-гийн доорх enterprise итгэлийн товч заагчид
  trustIndicators: [
    T("Одоо байгаа CCTV-тэй нийцнэ", "Existing CCTV compatible"),
    T("Бодит цагийн сэрэмжлүүлэг", "Real-time alerts"),
    T("Edge / server байршуулалт", "Edge / server deployment"),
    T("Ритэйлд тусгайлан зориулсан", "Purpose-built for retail"),
  ],
};

// ── Ямар эрсдэл илрүүлэх вэ? (нэг богино өгүүлбэр карт) ───────────────
export const RISKS = {
  title: T("Ямар эрсдэл илрүүлэх вэ?", "What risks can it detect?"),
  subtitle: T(
    "Нэг AI давхарга — дэлгүүрийн олон төрлийн алдагдал.",
    "One AI layer — every kind of retail loss.",
  ),
  cards: [
    {
      icon: "theft",
      title: T("Дэлгүүрийн хулгай", "Shoplifting"),
      body: T(
        "Бараа нуух, төлбөргүй гарах оролдлогыг илрүүлнэ.",
        "Detects concealment and walk-outs without payment.",
      ),
    },
    {
      icon: "suspicious",
      title: T("Сэжигтэй үйлдэл", "Suspicious behavior"),
      body: T(
        "Хэвийн бус хөдөлгөөн, эргэлзээтэй зан төлвийг таниулна.",
        "Flags abnormal movement and questionable behavior.",
      ),
    },
    {
      icon: "internal",
      title: T("Ажилтны дотоод хулгай", "Internal theft"),
      body: T(
        "Ажилтны дотоод хулгай, дүрэм зөрчлийг анзаарна.",
        "Catches staff theft and policy violations behind the counter.",
      ),
    },
    {
      icon: "zone",
      title: T("Кассын залилан", "Checkout fraud"),
      body: T(
        "Дутуу цохилт, баримтгүй буцаалт, sweethearting зэрэг кассын зөрчлийг анзаарна.",
        "Spots under-ringing, fake refunds, and sweethearting at the till.",
      ),
    },
    {
      icon: "afterhours",
      title: T("Цагийн бус нэвтрэлт", "After-hours entry"),
      body: T(
        "Хаалтын дараах зөвшөөрөлгүй нэвтрэлт, эвдрэлийг илрүүлнэ.",
        "Detects unauthorized entry and break-ins after closing.",
      ),
    },
    {
      icon: "ticket",
      title: T("Шошго солих, бараа сольж авах", "Ticket switching"),
      body: T(
        "Үнийн шошго солих, баглаа задлах зэрэг луйврын оролдлогыг анзаарна.",
        "Flags price-tag swaps and packaging-tamper attempts.",
      ),
    },
  ],
};

// ── Sentry хэрхэн ажилладаг вэ? (3 алхам) ────────────────────────────
export const HOW = {
  title: T("Sentry хэрхэн ажилладаг вэ?", "How Sentry works"),
  subtitle: T(
    "3 алхам — одоо байгаа системдээ AI давхарга нэмнэ.",
    "3 steps — add an AI layer to the system you already run.",
  ),
  steps: [
    {
      n: "01",
      title: T("Камертай холбогдоно", "Connect to cameras"),
      body: T(
        "Одоо байгаа CCTV/NVR системтэй холбогдоно.",
        "Connects to your existing CCTV/NVR system.",
      ),
    },
    {
      n: "02",
      title: T("AI бодит цагт шинжилнэ", "AI analyzes in real time"),
      body: T(
        "Видео урсгалаас эрсдэлтэй үйлдэл, хөдөлгөөн, дүрэм зөрчилтийг илрүүлнэ.",
        "Detects risky actions, movement, and violations in the video stream.",
      ),
    },
    {
      n: "03",
      title: T("Шууд мэдэгдэнэ", "Alerts instantly"),
      body: T(
        "Ажилтанд app, email эсвэл Telegram-р анхааруулга илгээнэ.",
        "Sends alerts to staff via app, email, or Telegram.",
      ),
    },
  ],
};

// ── Яагаад бизнесүүдэд хэрэгтэй вэ? (outcome-driven) ──────────────────
export const VALUE = {
  title: T("Яагаад дэлгүүрүүдэд хэрэгтэй вэ?", "Why retailers need it"),
  subtitle: T(
    "Технологи биш — бизнесийн үр дүн.",
    "Not technology for its own sake — business outcomes.",
  ),
  cards: [
    {
      icon: "loss",
      title: T("Алдагдал бууруулна", "Reduce losses"),
      body: T(
        "Бичлэгийг дараа нь шалгахаас өмнө эрсдэлийг тухайн үед нь илрүүлнэ.",
        "Catches risk as it happens — not by reviewing footage after the fact.",
      ),
    },
    {
      icon: "workload",
      title: T("Хяналтын ажилтны ачааллыг багасгана", "Lighten the monitoring load"),
      body: T(
        "Олон камерыг хүн гараар байнга харах шаардлага багасна.",
        "Less need for staff to watch many cameras by hand around the clock.",
      ),
    },
    {
      icon: "leverage",
      title: T("Одоо байгаа камерын үнэ цэнийг нэмнэ", "Get more from existing cameras"),
      body: T(
        "Шинэ камер солихгүйгээр AI давхарга нэмнэ.",
        "Add an AI layer without replacing any cameras.",
      ),
    },
    {
      icon: "report",
      title: T("Тайлан, нотолгоо үүсгэнэ", "Create records & evidence"),
      body: T(
        "Илэрсэн эрсдэл, үйл явдлыг бүртгэж, дараа нь шалгах боломжтой болгоно.",
        "Logs detected risks and events so they can be reviewed later.",
      ),
    },
  ],
};

// ── Дэлгүүрийн бүх бүсэд (store zones) ───────────────────────────────
export const USE_CASES = {
  title: T("Дэлгүүрийн бүх бүсэд", "Every zone of your store"),
  subtitle: T(
    "Орцоос касс хүртэл — нэг AI давхарга бүх цэгийг хянана.",
    "From the entrance to the checkout — one AI layer covers it all.",
  ),
  cards: [
    {
      icon: "checkout",
      title: T("Кассын бүс", "Checkout"),
      body: T(
        "Дутуу цохилт, баримтгүй буцаалт, кассын луйврыг хянана.",
        "Watches for under-ringing, fake refunds, and till fraud.",
      ),
    },
    {
      icon: "aisles",
      title: T("Лангуу, тавиурын эгнээ", "Aisles & shelves"),
      body: T(
        "Бараа нуух, халаасандаа хийх зэрэг хулгайн үйлдлийг илрүүлнэ.",
        "Detects concealment and shelf theft along the aisles.",
      ),
    },
    {
      icon: "entrance",
      title: T("Орц / гарц", "Entrance & exit"),
      body: T(
        "Төлбөргүй гарах, цагийн бус нэвтрэлтийг анзаарна.",
        "Catches walk-outs and after-hours entry.",
      ),
    },
    {
      icon: "stockroom",
      title: T("Склад / агуулах", "Stockroom"),
      body: T(
        "Ажилтны дотоод хулгай, барааны алдагдлыг хянана.",
        "Monitors internal theft and stock shrinkage in the back room.",
      ),
    },
  ],
};

// ── Pricing (дэлгүүр бүрд: платформ төлбөр + камер тутмын үнэ) ───────
export const PRICING = {
  title: T("Ил тод, дэлгүүртээ тохирсон үнэ", "Transparent pricing that fits your store"),
  subtitle: T(
    "Дэлгүүр бүрд платформын төлбөр + камер тутмын үнэ. Бүх багцад бодит цагийн AI илрүүлэлт, Telegram / апп мэдэгдэл, бүх горим багтсан.",
    "Per store: a platform fee plus a per-camera rate. Every plan includes real-time AI detection, Telegram / app alerts, and all detection modes.",
  ),
  note: T(
    "Төлбөр урьдчилсан цэнэглэлтийн (хэтэвч) загвартай. Туршилтын хугацаа болон байгууллагын хэрэгцээнд тохирсон багцыг demo уулзалтаар санал болгоно.",
    "Billing is prepaid (wallet top-up). Trial period and a plan tailored to your needs are offered during the demo call.",
  ),
  tiers: [
    {
      id: "starter",
      name: T("Starter", "Starter"),
      range: T("1–9 камер", "1–9 cameras"),
      price: T("49,000₮", "₮49,000"),
      period: T("/ дэлгүүр / сар", "/ store / mo"),
      perCamera: T("+ 22,000₮ / камер / сар", "+ ₮22,000 / camera / mo"),
      example: T("", ""),
      tagline: T("Жижиг дэлгүүр, эхлэлийн багц", "Small shop, getting started"),
      cta: T("Demo авах", "Book a demo"),
      features: [
        T("Бодит цагийн AI илрүүлэлт", "Real-time AI detection"),
        T("Telegram / апп мэдэгдэл", "Telegram / app alerts"),
        T("Бүх илрүүлэлтийн горим", "All detection modes"),
        T("Эрсдэлийн event бүртгэл", "Risk event log"),
      ],
      highlight: false,
    },
    {
      id: "pro",
      name: T("Pro", "Pro"),
      range: T("10–50 камер", "10–50 cameras"),
      price: T("39,000₮", "₮39,000"),
      period: T("/ дэлгүүр / сар", "/ store / mo"),
      perCamera: T("+ 17,000₮ / камер / сар", "+ ₮17,000 / camera / mo"),
      example: T(
        "Жишээ: 20 камертай дэлгүүрт сард ~379,000₮",
        "Example: a 20-camera store pays ~₮379,000 / mo",
      ),
      tagline: T("Дунд хэмжээний дэлгүүр, сүлжээнд", "Mid-size stores and chains"),
      cta: T("Demo авах", "Book a demo"),
      features: [
        T("Starter-ийн бүх боломж", "Everything in Starter"),
        T("Камер тутмын хямдруулсан үнэ", "Lower per-camera rate"),
        T("Олон салбар / олон хэрэглэгч", "Multi-site / multi-user"),
        T("Нэн тэргүүний дэмжлэг", "Priority support"),
      ],
      highlight: true,
    },
    {
      id: "enterprise",
      name: T("Enterprise", "Enterprise"),
      range: T("51+ камер", "51+ cameras"),
      price: T("29,000₮", "₮29,000"),
      period: T("/ дэлгүүр / сар", "/ store / mo"),
      perCamera: T("+ 12,000₮ / камер / сар", "+ ₮12,000 / camera / mo"),
      example: T("", ""),
      tagline: T("Том ритэйл сүлжээ", "Large retail chains"),
      cta: T("Холбоо барих", "Talk to us"),
      features: [
        T("Pro-ийн бүх боломж", "Everything in Pro"),
        T("Хамгийн хямд камерын үнэ", "Lowest per-camera rate"),
        T("Тусгай холболт (POS, ERP)", "Custom integrations (POS, ERP)"),
        T("SLA + 24/7 дэмжлэг", "SLA + 24/7 support"),
      ],
      highlight: false,
    },
  ],
};

// ── FAQ (бизнесийн эргэлзээнд хариулсан) ─────────────────────────────
export const FAQ = {
  title: T("Түгээмэл асуулт", "Frequently asked"),
  items: [
    {
      q: T("Шинэ камер авах шаардлагатай юу?", "Do I need to buy new cameras?"),
      a: T(
        "Үгүй. Sentry нь ихэнх одоо байгаа CCTV/NVR системтэй холбогдон ажиллах боломжтой.",
        "No. Sentry works with most existing CCTV/NVR systems.",
      ),
    },
    {
      q: T("Интернэт тасарвал яах вэ?", "What if the internet goes down?"),
      a: T(
        "Суурилуулалтын төрлөөс хамааран edge/server дээр ажиллах боломжтой. Байгууллагын нөхцөлд тохируулж шийднэ.",
        "Depending on the deployment, it can run on edge/server. We tailor this to your environment.",
      ),
    },
    {
      q: T("Бичлэг хадгалдаг уу?", "Does it store recordings?"),
      a: T(
        "Sentry нь үндсэн CCTV/NVR бичлэг хадгалалтыг орлохгүй. Харин AI илрүүлэлт, alert, event бүртгэл үүсгэнэ.",
        "Sentry doesn't replace your CCTV/NVR storage. It adds AI detection, alerts, and an event log.",
      ),
    },
    {
      q: T("100% зөв илрүүлэх үү?", "Is it 100% accurate?"),
      a: T(
        "AI систем нь эрсдэлийг автоматаар илрүүлж анхааруулах зорилготой. Эцсийн шалгалтыг байгууллагын ажилтан баталгаажуулна.",
        "The AI is designed to automatically surface and flag risks. Final verification is done by your staff.",
      ),
    },
    {
      q: T("Монголд суурилуулж болох уу?", "Can it be deployed in Mongolia?"),
      a: T(
        "Тийм. Demo болон pilot суурилуулалтыг байгууллагын орчинд тохируулж хийх боломжтой.",
        "Yes. We run demos and pilot deployments tailored to your on-site environment.",
      ),
    },
  ],
};

// ── Final CTA ────────────────────────────────────────────────────────
export const CTA = {
  title: T(
    "Дэлгүүрээ 24/7 хянадаг AI ажилтантай болоорой",
    "Get a 24/7 AI operator watching over your store",
  ),
  subtitle: T(
    "Sentry таны одоо байгаа CCTV систем дээр AI давхарга нэмж, эрсдэлийг бодит цагт илрүүлнэ.",
    "Sentry adds an AI layer on top of your existing CCTV system and detects risk in real time.",
  ),
  namePlaceholder: T("Нэр", "Name"),
  orgPlaceholder: T("Байгууллага", "Organization"),
  phonePlaceholder: T("Утас", "Phone"),
  emailPlaceholder: T("Email", "Email"),
  cameraCountPlaceholder: T("Камерын тоо", "Number of cameras"),
  industryLabel: T("Ашиглах салбар", "Industry"),
  industryOptions: [
    T("Супермаркет / Хүнсний", "Supermarket / Grocery"),
    T("Хувцас / гоо сайхан", "Apparel / Cosmetics"),
    T("Цахилгаан бараа / эм", "Electronics / Pharmacy"),
    T("Олон салбартай сүлжээ", "Multi-branch chain"),
    T("Бусад ритэйл", "Other retail"),
  ],
  submit: T("Demo авах", "Book a demo"),
  privacyNote: T(
    "Мэдээллийг зөвхөн demo-той холбоотойгоор ашиглана. Спам байхгүй.",
    "Your details are used only to arrange the demo. No spam.",
  ),
  errorNote: T(
    "Зөв и-мэйл хаяг оруулна уу.",
    "Please enter a valid email address.",
  ),
};

// ── Footer ───────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: T(
    "Одоо байгаа CCTV дээр AI давхарга — эрсдэлийг бодит цагт илрүүлнэ.",
    "An AI layer on your existing CCTV — detecting risk in real time.",
  ),
  product: T("Бүтээгдэхүүн", "Product"),
  productLinks: [
    { href: "#risks", label: T("Эрсдэл илрүүлэлт", "Detection") },
    { href: "#how", label: T("Хэрхэн ажилладаг", "How it works") },
    { href: "#use-cases", label: T("Бүсүүд", "Use cases") },
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
  openLinks: [{ href: "https://github.com/Chipmo-Sentry", label: "GitHub" }],
  copyright: T(
    "© 2026 Chipmo LLC · Улаанбаатар, Монгол",
    "© 2026 Chipmo LLC · Ulaanbaatar, Mongolia",
  ),
};
