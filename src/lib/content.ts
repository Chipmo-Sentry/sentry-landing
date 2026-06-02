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
  name: "Chipmo Sentry",
  tagline: T(
    "CCTV-г AI хяналтын ажилтан болго",
    "Turn your CCTV into an AI security operator",
  ),
};

// ── Nav (хуудасны шинэ дараалалд тааруулсан) ─────────────────────────
export const NAV = [
  { href: "#risks", label: T("Эрсдэл", "Detection") },
  { href: "#how", label: T("Хэрхэн ажилладаг", "How it works") },
  { href: "#use-cases", label: T("Хэрэглээ", "Use cases") },
  { href: "#pricing", label: T("Үнэ", "Pricing") },
  { href: "#faq", label: T("Асуулт", "FAQ") },
];

// ── Hero ─────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: T("AI видео хяналтын платформ", "AI video intelligence platform"),
  title: T(
    "CCTV-г AI ажилтан болго",
    "Turn your CCTV into an AI operator",
  ),
  subtitle: T(
    "Таны одоо байгаа камерыг ашиглан хулгай, сэжигтэй үйлдэл, хөдөлмөр хамгаалалт болон үйл ажиллагааны эрсдэлийг бодит цагт илрүүлнэ.",
    "Use the cameras you already have to detect theft, suspicious behavior, safety violations, and operational risks — in real time.",
  ),
  bullets: [
    T("Шинэ камер шаардлагагүй", "No new cameras"),
    T("24/7 автомат хяналт", "24/7 automated monitoring"),
    T("Бодит цагийн сэрэмжлүүлэг", "Real-time alerts"),
    T(
      "Дэлгүүр, агуулах, үйлдвэр, оффист ашиглах боломжтой",
      "Works for retail, warehouses, factories, and offices",
    ),
  ],
  primaryCta: T("Demo үзэх", "Book a demo"),
  secondaryCta: T("Үнийн санал авах", "Get a quote"),
  trustline: T(
    "Ритэйл болон үйлдвэрийн талбайд туршилтын төсөл хийх боломжтой.",
    "Pilot projects available for retail and industrial sites.",
  ),
  // Hero-гийн доорх enterprise итгэлийн товч заагчид
  trustIndicators: [
    T("Одоо байгаа CCTV-тэй нийцнэ", "Existing CCTV compatible"),
    T("Бодит цагийн сэрэмжлүүлэг", "Real-time alerts"),
    T("Edge / server байршуулалт", "Edge / server deployment"),
    T("Ритэйл + Үйлдвэрийн хэрэглээ", "Retail + Industrial use cases"),
  ],
};

// ── Ямар эрсдэл илрүүлэх вэ? (нэг богино өгүүлбэр карт) ───────────────
export const RISKS = {
  title: T("Ямар эрсдэл илрүүлэх вэ?", "What risks can it detect?"),
  subtitle: T(
    "Нэг AI давхарга — олон төрлийн эрсдэл.",
    "One AI layer — many kinds of risk.",
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
      title: T("Ажилтны дотоод зөрчил", "Internal misconduct"),
      body: T(
        "Дотоод хулгай, дүрэм зөрчлийг анзаарна.",
        "Catches internal theft and policy violations.",
      ),
    },
    {
      icon: "zone",
      title: T("Хориглосон бүс рүү нэвтрэх", "Restricted-area access"),
      body: T(
        "Зөвшөөрөлгүй хүн хязгаарлагдмал бүсэд орохыг илрүүлнэ.",
        "Detects unauthorized entry into restricted zones.",
      ),
    },
    {
      icon: "ppe",
      title: T("PPE / хамгаалах хэрэгсэл", "PPE compliance"),
      body: T(
        "Каск, хантааз зэрэг хамгаалах хэрэгсэл зүүсэн эсэхийг шалгана.",
        "Checks whether helmets, vests, and other PPE are worn.",
      ),
    },
    {
      icon: "safety",
      title: T("Агуулах, үйлдвэрийн аюулгүй байдал", "Warehouse & factory safety"),
      body: T(
        "Аюултай бүс, осолд хүргэх нөхцөлийг хянана.",
        "Monitors hazardous zones and accident-prone conditions.",
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
  title: T("Яагаад бизнесүүдэд хэрэгтэй вэ?", "Why businesses need it"),
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

// ── Нэг платформ. Олон хэрэглээ. (industries) ────────────────────────
export const USE_CASES = {
  title: T("Нэг платформ. Олон хэрэглээ.", "One platform. Many use cases."),
  subtitle: T(
    "Ритэйлээс эхэлсэн ч ритэйлээр хязгаарлагдахгүй.",
    "Starts with retail — but isn't limited to it.",
  ),
  cards: [
    {
      icon: "retail",
      title: T("Retail Security", "Retail Security"),
      body: T(
        "Дэлгүүрийн хулгай, сэжигтэй үйлдэл, кассын бүсийн хяналт.",
        "Shoplifting, suspicious behavior, checkout-zone monitoring.",
      ),
    },
    {
      icon: "warehouse",
      title: T("Warehouse Monitoring", "Warehouse Monitoring"),
      body: T(
        "Агуулахын хөдөлгөөн, бараа алдагдал, хориглосон бүс.",
        "Warehouse movement, inventory loss, restricted zones.",
      ),
    },
    {
      icon: "factory",
      title: T("Factory Safety", "Factory Safety"),
      body: T(
        "PPE detection, near-miss, аюултай бүсийн хяналт.",
        "PPE detection, near-miss events, hazardous-zone monitoring.",
      ),
    },
    {
      icon: "office",
      title: T("Office / Building", "Office / Building"),
      body: T(
        "Ирц, зөвшөөрөлгүй нэвтрэлт, хамгаалалтын хяналт.",
        "Attendance, unauthorized access, security monitoring.",
      ),
    },
  ],
};

// ── Pricing (камер тутамд / сард) ────────────────────────────────────
export const PRICING = {
  title: T("Ил тод, камер тутмын үнэ", "Transparent, per-camera pricing"),
  subtitle: T(
    "Камер тутамд / сард. Бүх багцад бодит цагийн сэрэмжлүүлэг.",
    "Per camera / month. Real-time alerts on every plan.",
  ),
  note: T(
    "Туршилтын хугацаа болон байгууллагын хэрэгцээнд тохирсон багцыг demo уулзалтаар санал болгоно.",
    "Trial period and a plan tailored to your needs are offered during the demo call.",
  ),
  tiers: [
    {
      id: "starter",
      name: T("Starter", "Starter"),
      price: T("25,000₮", "$8"),
      period: T("/ камер / сар", "/ camera / mo"),
      tagline: T("Жижиг бизнес, эхлэлийн багц", "Small business, getting started"),
      cta: T("Demo авах", "Book a demo"),
      features: [
        T("Бодит цагийн AI илрүүлэлт", "Real-time AI detection"),
        T("Telegram / email сэрэмжлүүлэг", "Telegram / email alerts"),
        T("Эрсдэлийн event бүртгэл", "Risk event log"),
        T("И-мэйл дэмжлэг", "Email support"),
      ],
      highlight: false,
    },
    {
      id: "pro",
      name: T("Pro", "Pro"),
      price: T("50,000₮", "$15"),
      period: T("/ камер / сар", "/ camera / mo"),
      tagline: T("Олон камертай бизнест", "Multi-camera businesses"),
      cta: T("Demo авах", "Book a demo"),
      features: [
        T("Starter-ийн бүх боломж", "Everything in Starter"),
        T("Олон салбар / олон хэрэглэгч", "Multi-site / multi-user"),
        T("Дэвшилтэт эрсдэлийн төрлүүд", "Advanced risk types"),
        T("Нэн тэргүүний дэмжлэг", "Priority support"),
      ],
      highlight: true,
    },
    {
      id: "enterprise",
      name: T("Enterprise", "Enterprise"),
      price: T("Тусгай санал", "Custom"),
      period: T("", ""),
      tagline: T("Том сүлжээ, үйлдвэр", "Chains & industrial sites"),
      cta: T("Холбоо барих", "Talk to us"),
      features: [
        T("Pro-ийн бүх боломж", "Everything in Pro"),
        T("Edge / server байршуулалт", "Edge / server deployment"),
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
    "Камеруудаа зүгээр бичлэг хадгалагч биш, AI хяналтын ажилтан болго",
    "Make your cameras an AI operator — not just a recorder",
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
    T("Ритэйл / Дэлгүүр", "Retail / Store"),
    T("Агуулах / Логистик", "Warehouse / Logistics"),
    T("Үйлдвэр", "Factory"),
    T("Оффис / Барилга", "Office / Building"),
    T("Бусад", "Other"),
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
    { href: "#use-cases", label: T("Хэрэглээ", "Use cases") },
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
