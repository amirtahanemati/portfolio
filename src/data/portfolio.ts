import type { Language } from "../i18n";

export type LocalizedText = Record<Language, string>;

export type ProjectLink = {
  label: LocalizedText;
  url: string;
  type: "myket" | "github" | "live" | "demo";
  primary?: boolean;
};

export type ProjectStat = {
  label: LocalizedText;
  value: string;
};

export type ProjectFeature = {
  title: LocalizedText;
  description: LocalizedText;
  tag?: string;
};

export type ProjectSection = {
  title: LocalizedText;
  content: LocalizedText;
};

export type ProjectMilestone = {
  version: string;
  date: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  overview: LocalizedText;
  accent: string;
  category: LocalizedText;
  tech: string[];
  image: string;
  logo?: string;
  url: string;
  links: ProjectLink[];
  stats: ProjectStat[];
  role: LocalizedText;
  timeline: LocalizedText;
  status: LocalizedText;
  features: ProjectFeature[];
  architecture: ProjectSection;
  challenges: ProjectSection[];
  milestones: ProjectMilestone[];
};

export type SkillGroup = {
  label: LocalizedText;
  items: string[];
};

export type HonorLink = {
  title: LocalizedText;
  url: string;
  source: string;
};

export type Honor = {
  id: string;
  rank: LocalizedText;
  medal: "silver" | "bronze" | "gold";
  title: LocalizedText;
  competition: LocalizedText;
  organizer: LocalizedText;
  date: LocalizedText;
  team: LocalizedText;
  description: LocalizedText;
  tags: string[];
  links: HonorLink[];
};

export type PressMention = {
  name: string;
  label: LocalizedText;
  url: string;
  badge: string;
};

export const profile = {
  name: "Amirtaha Nemati",
  persianName: "امیرطاها نعمتی",
  persianFullName: "امیرطاها نعمتی",
  brand: "AMIRTAHA",
  handle: "@amirtahanemati",
  role: "Software Developer",
  persianRole: "توسعه‌دهنده نرم‌افزار و مهندس کامپیوتر",
  location: "Iran",
  email: "amirtahanemati0@gmail.com",
  phone: "+989036458812",
  phoneDisplay: "+98 903 645 8812",
  github: "https://github.com/amirtahanemati",
  myket: "https://myket.ir/app/com.amirtaha.courseselection",
  linkedin: "https://www.linkedin.com/in/amirtahanemati/",
  instagram: "https://instagram.com/amirtahanemati",
  x: "https://x.com/amirtahanemati",
  telegram: "https://t.me/nematidev",
  telegramHandle: "@nematidev",
};

export const marqueeItems = [
  "PYTHON",
  "FASTAPI",
  "REACT",
  "REACT NATIVE",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "ELECTRON",
  "DOCKER",
  "SQLITE / POSTGRESQL",
  "KATEX & LATEX",
];

export const projects: Project[] = [
  {
    slug: "nemro",
    index: "01",
    name: "Nemro Assessment Platform",
    title: {
      en: "Nemro — Comprehensive Online Assessment, Question Bank & Grading Platform",
      fa: "سامانه جامع آزمون آنلاین، بانک سوالات و تصحیح هوشمند اوراق نمرو",
    },
    tagline: {
      en: "An intelligent, high-concurrency examination engine featuring live KaTeX LaTeX formula rendering, centralized question bank, and manual grading cartable.",
      fa: "پلتفرم هوشمند و پیشرفته برگزاری آزمون‌های آنلاین، استودیوی اختصاصی فرمول‌نویسی KaTeX، بانک سوالات متمرکز و کارتابل تصحیح اوراق تشریحی.",
    },
    description: {
      en: "A robust full-stack assessment platform built with FastAPI, Async SQLAlchemy 2.0, React 18, KaTeX and Tailwind CSS, offering live LaTeX math formula rendering, session guard security, and dual-mode testing.",
      fa: "سامانه جامع برگزاری آزمون با معماری مدرن FastAPI، دیتابیس آسنکرون SQLAlchemy 2.0، فرانت‌اند React 18 و KaTeX برای رندر فرمول‌های ریاضی و کسرها با تفکیک کامل راست‌چین و چپ‌چین.",
    },
    overview: {
      en: "Nemro was engineered to eliminate the biggest pain points in academic and high-stakes online examinations: rendering authentic mathematical fractions and formulas without UI distortion in RTL layouts, managing a categorized bank of reusable questions, and grading complex written answers with granular rubrics. The system enforces strict device session limits (Session Guard) to prevent credential sharing and delivers 100% genuine database metrics without synthetic hardcoded data.",
      fa: "سامانه جامع نمرو برای پاسخ به بزرگ‌ترین چالش‌های سامانه‌های آزمون آنلاین مدارس و دانشگاه‌ها طراحی شده است: رندر واقعی و آزمونی کسرها و فرمول‌های پیچیده ریاضی و فیزیک بدون به‌هم‌ریختگی در متون راست‌چین فارسی، مدیریت هوشمند بانک سوالات تفکیک‌شده بر اساس پایه و مبحث، و کارتابل تصحیح اوراق تشریحی با بارم‌بندی دقیق. نمرو با استفاده از سازوکار امنیتی Session Guard از ورود همزمان بیش از سقف مجاز جلوگیری کرده و تمامی گزارش‌ها و آمارهای خود را به‌صورت کاملاً واقعی و لحظه‌ای از دیتابیس استخراج می‌کند.",
    },
    accent: "EDTECH / FASTAPI & KATEX",
    category: {
      en: "Full-Stack Web & Assessment Engine",
      fa: "سامانه فول‌استک سازمانی و موتور آزمون",
    },
    tech: [
      "FastAPI",
      "React 18",
      "TypeScript",
      "Async SQLAlchemy 2.0",
      "KaTeX (LaTeX)",
      "Tailwind CSS",
      "Pydantic v2",
      "Docker",
    ],
    image: "/projects/nemro-live.png",
    logo: "/projects/nemro-logo.svg",
    url: "https://nemro.ir",
    links: [
      {
        label: { en: "Visit Live Website (nemro.ir)", fa: "ورود به وب‌سایت رسمی nemro.ir" },
        url: "https://nemro.ir",
        type: "live",
        primary: true,
      },
      {
        label: { en: "Request Demo & Access", fa: "درخواست دمو و همکاری" },
        url: "https://t.me/nematidev",
        type: "demo",
      },
    ],
    stats: [
      { label: { en: "Architecture", fa: "معماری بک‌اند" }, value: "FastAPI ASGI" },
      { label: { en: "Math Engine", fa: "موتور فرمول" }, value: "KaTeX / LaTeX" },
      { label: { en: "Security", fa: "حفاظت نشست" }, value: "Session Guard" },
      { label: { en: "Exam Modes", fa: "حالت‌های آزمون" }, value: "Dual Mode" },
    ],
    role: {
      en: "Sole System Architect & Full-Stack Developer",
      fa: "معمار ارشد سیستم و توسعه‌دهنده فول‌استک (طراحی بک‌اند، فرانت‌اند و ساختار داده)",
    },
    timeline: {
      en: "2025 – Present (Active Development)",
      fa: "۱۴۰۴ — ۱۴۰۵ (در حال توسعه فعال و تست‌های کاربری)",
    },
    status: {
      en: "Production-Ready Architecture / Private Beta",
      fa: "معماری آماده پروداکشن / نسخه بتا",
    },
    features: [
      {
        title: {
          en: "Academic Formula Studio (KaTeX / LaTeX)",
          fa: "استودیوی فرمول‌نویسی ریاضی و علمی آزمونی (LaTeX / KaTeX)",
        },
        description: {
          en: "Instant WYSIWYG formula toolbar supporting authentic fractional rendering (a/b fraction bar), radicals, limits, matrices, and complete bidirectional RTL/LTR text isolation.",
          fa: "رندر بلادرنگ و دقیق کسرها به شکل خط کسری استاندارد آزمونی، توان‌ها، رادیکال‌ها، حدها و نمادهای مهندسی با نوار ابزار فرمول‌ساز ۱-کلیکی برای طراحان آزمون بدون نیاز به دانش لاتک.",
        },
        tag: "KaTeX Math",
      },
      {
        title: {
          en: "Centralized Intelligent Question Bank",
          fa: "بانک سوالات متمرکز و هوشمند",
        },
        description: {
          en: "Structured categorization by educational grade, subject, topic, and difficulty level with live preview and 1-click importing into new tests.",
          fa: "دسته‌بندی موضوعی دقیق بر اساس پایه تحصیلی، رشته، مبحث و سطح دشواری (ساده، متوسط، دشوار) با امکان فیلتر ترکیبی، پیش‌نمایش زنده و درون‌ریزی ۱-کلیکی سوالات به آزمون‌های جدید.",
        },
        tag: "Question Bank",
      },
      {
        title: {
          en: "Manual Grading Cartable & Handwritten Review",
          fa: "کارتابل تصحیح اوراق تشریحی و دست‌نویس",
        },
        description: {
          en: "Dedicated evaluator workspace to inspect written submissions, handwritten photo uploads, granular rubric scoring, and per-question student feedback.",
          fa: "محیط اختصاصی بررسی پاسخ‌های تشریحی و تصاویر پاسخ‌های دست‌نویس ارسال‌شده توسط دانش‌آموزان با امکان ثبت ریزنمرات، بازخورد تشریحی و یادداشت استاد.",
        },
        tag: "Grading Studio",
      },
      {
        title: {
          en: "Dual-Method Examination Delivery",
          fa: "دو روش منعطف برگزاری آزمون",
        },
        description: {
          en: "Supports both step-by-step interactive studio tests (multiple-choice, true/false, subjective) and downloadable PDF question booklets with optical answer-sheet grading.",
          fa: "امکان برگزاری آزمون با دو ساختار منعطف: روش اول به‌صورت سوال‌به‌سوال تعاملی و روش دوم از طریق بارگذاری دفترچه آزمون PDF با پاسخبرگ نوری تستی و تصحیح خودکار.",
        },
        tag: "Dual Mode",
      },
      {
        title: {
          en: "Session Guard Active Device Enforcer",
          fa: "امنیت پیشرفته نشست‌ها و دستگاه‌ها (Session Guard)",
        },
        description: {
          en: "Strict 3-device concurrent cap that prevents account sharing and offers graceful remote session revocation upon new sign-in attempts.",
          fa: "محدودیت سقف ۳ دستگاه فعال همزمان برای جلوگیری از انتشار غیرمجاز حساب‌ها و مدیریت هوشمند نشست‌ها با امکان خروج انتخابی از نشست‌های قدیمی.",
        },
        tag: "Session Guard",
      },
      {
        title: {
          en: "Multimedia Support (Audio & Imagery)",
          fa: "پشتیبانی چندرسانه‌ای آزمون (صوت و تصویر)",
        },
        description: {
          en: "Native audio player for language listening exams and teacher vocal directions, accompanied by optimized image diagram uploads for STEM subjects.",
          fa: "پلیر صوتی اختصاصی برای آزمون‌های لیسنینگ زبان انگلیسی و قرائت استاد، همراه با آپلود و پیش‌نمایش تصاویر و نمودارهای هندسه و فیزیک.",
        },
        tag: "Multimedia",
      },
    ],
    architecture: {
      title: {
        en: "Engineering & Architecture Breakdown",
        fa: "معماری سیستم و پشته فناوری",
      },
      content: {
        en: "Backend relies on FastAPI ASGI utilizing asynchronous database pipelines with SQLAlchemy 2.0 (AsyncSession), validated by Pydantic v2 schemas and secured with JWT session authentication. The frontend is built on React 18 and TypeScript with Tailwind CSS for zero-runtime styling and KaTeX for high-performance math rendering.",
        fa: "هسته بک‌اند بر پایه فریم‌ورک پرسرعت FastAPI (ASGI) پیاده‌سازی شده است و تمامی کوئری‌های دیتابیس با استفاده از SQLAlchemy 2.0 به‌صورت کاملاً ناهمگام (AsyncSession) با aiosqlite در محیط توسعه و asyncpg/PostgreSQL در محیط عملیاتی اجرا می‌شوند. احراز هویت توکن‌محور همراه با الگوریتم رمزنگاری Bcrypt و اعتبارسنجی فیلدها با Pydantic v2 انجام می‌شود. در لایه فرانت‌اند، کامپوننت‌های React 18 با تایپ‌های دقیق TypeScript و استایل‌های بهینه Tailwind CSS و موتور سبک KaTeX بالاترین سرعت لود و رندر را برای داوطلبان فراهم می‌کنند.",
      },
    },
    challenges: [
      {
        title: {
          en: "Overcoming RTL/LTR Math Inversion",
          fa: "حل چالش تداخل متون راست‌چین فارسی با فرمول‌های چپ‌چین ریاضی",
        },
        content: {
          en: "When math formulas are embedded inside Persian sentences, browser bidirectional algorithms often distort parentheses and negative signs. By implementing custom LaTeX tokenizer containers with strict LTR CSS isolation and KaTeX display engines, formulas remain visually pristine within Persian paragraphs.",
          fa: "یکی از اساسی‌ترین مشکلات رندر فرمول‌ها در وب فارسی، وارونه شدن پرانتزها، توان‌ها و منفی‌ها هنگام قرارگیری در متون راست‌چین است. در سامانه نمرو با طراحی یک لایه توکنایزر اختصاصی و ایزولاسیون استایل‌های LTR در سطح کانتینرهای KaTeX، فرمول‌ها حتی در میان پاراگراف‌های طولانی فارسی کاملاً استاندارد و بدون جابجایی کاراکترها نمایش داده می‌شوند.",
        },
      },
      {
        title: {
          en: "100% Genuine Metrics Without Fake Counter Data",
          fa: "حذف داده‌های ماک و اتصال مستقیم تمام آمارها به دیتابیس",
        },
        content: {
          en: "Rather than displaying hardcoded or simulated statistics, all dashboard analytics, question counts, and exam scorecards are computed in real time from live relational queries.",
          fa: "برخلاف بسیاری از سامانه‌ها که از اعداد نمایشی استفاده می‌کنند، در نمرو تمامی اطلاعات کارنامه، تراز تحلیلی، تعداد سوالات و درصدها مستقیماً و بلادرنگ از کوئری‌های بهینه‌سازی‌شده پایگاه داده استخراج و نمایش داده می‌شوند.",
        },
      },
    ],
    milestones: [
      {
        version: "v1.2.0",
        date: { en: "October 2026", fa: "مهر ۱۴۰۵" },
        title: { en: "Dual Exam Engine & PDF Optical Grading", fa: "افزودن روش دفترچه آزمون PDF و پاسخبرگ نوری" },
        description: {
          en: "Integrated PDF exam booklet delivery alongside interactive studio questions, with automated optical key verification.",
          fa: "پیاده‌سازی حالت دوگانه آزمون: امکان برگزاری هم‌زمان به شیوه استودیویی سوال‌به‌سوال و شیوه دفترچه PDF با کلید تستی.",
        },
      },
      {
        version: "v1.1.0",
        date: { en: "August 2026", fa: "مرداد ۱۴۰۵" },
        title: { en: "KaTeX Math Studio & Formula Builder", fa: "طراحی نوار ابزار فرمول‌ساز و ایزولاسیون KaTeX" },
        description: {
          en: "WYSIWYG mathematical toolbar for fractional formatting and Greek symbol insertion.",
          fa: "طراحی استودیوی فرمول‌نویسی ریاضی و کسرها با دکمه‌های یک‌کلیکی برای سهولت کار اساتید بدون نیاز به تایپ کد لاتک.",
        },
      },
      {
        version: "v1.0.0",
        date: { en: "June 2026", fa: "تیر ۱۴۰۵" },
        title: { en: "Core FastAPI Architecture & Session Guard", fa: "پایه‌ریزی معماری Async و سیستم Session Guard" },
        description: {
          en: "Full async FastAPI and SQLAlchemy 2.0 core with JWT session enforcement across maximum 3 devices.",
          fa: "توسعه هسته آسنکرون بک‌اند با FastAPI، احراز هویت توکن‌محور و پیاده‌سازی سقف ۳ دستگاه فعال همزمان.",
        },
      },
    ],
  },
  {
    slug: "course-selection",
    index: "02",
    name: "CourseSelection Mobile (Myket)",
    title: {
      en: "CourseSelection Mobile — University Schedule Planner (Published on Myket)",
      fa: "اپلیکیشن اندروید ابزار انتخاب واحد (منتشر شده در استور مایکت)",
    },
    tagline: {
      en: "An intuitive mobile application published on the Myket Android Store to help students design weekly course timetables and instantly detect exam and class schedule collisions.",
      fa: "اپلیکیشن کاربردی موبایل منتشرشده در استور مایکت برای شبیه‌سازی انتخاب واحد، سازمان‌دهی هفتگی دروس و حل تداخل ساعت کلاس‌ها و امتحانات دانشگاهی.",
    },
    description: {
      en: "Published on Myket with a 5.0-star rating. Built with React Native, Expo, TypeScript, Zustand, and Tailwind CSS. Features offline storage, Persian RTL calendar grid, and one-click schedule image export.",
      fa: "منتشرشده در مارکت اندرویدی مایکت با امتیاز ۵.۰ از ۵ ستاره. ساخته‌شده با React Native، Expo، TypeScript و Zustand؛ همراه با جدول بصری هفتگی، تشخیص تداخل کلاس‌ها و خروجی باکیفیت تصویری.",
    },
    overview: {
      en: "University course registration is notoriously stressful, with students constantly facing class overlaps, conflicting final exam hours, and awkward multi-hour gaps between lectures. 'ابزار انتخاب واحد' (CourseSelection Mobile) was created to solve this widespread student challenge. Built using Expo, React Native, and TypeScript, it allows students to input their potential courses, visually view their weekly schedule from Saturday to Thursday, receive immediate collision alerts, and export high-resolution schedule cards to share with classmates.",
      fa: "انتخاب واحد دانشگاهی همواره یکی از پراسترس‌ترین مراحل هر ترم تحصیلی برای دانشجویان است؛ مواجهه با تداخل ساعت کلاس‌ها، همزمانی امتحانات پایان‌ترم و فاصله‌های نامناسب بین ساعات درسی. اپلیکیشن «ابزار انتخاب واحد» دقیقاً برای پاسخ به این نیاز مبرم دانشجویان طراحی و در استور معتبر مایکت منتشر شد. این اپلیکیشن با بهره‌گیری از React Native و Expo به دانشجو این امکان را می‌دهد تا به سادگی دروس مورد نظر را وارد کرده، جدول هفتگی شنبه تا پنج‌شنبه را به‌صورت کاملاً گرافیکی مشاهده کند، هشدارهای تداخل ساعات را در لحظه دریافت نماید و در نهایت یک خروجی تصویری شکیل برای اشتراک‌گذاری در شبکه‌های اجتماعی دریافت کند.",
    },
    accent: "MYKET / REACT NATIVE",
    category: {
      en: "Android Mobile App (Myket Store)",
      fa: "اپلیکیشن موبایل اندروید (منتشر در مایکت)",
    },
    tech: [
      "React Native",
      "Expo SDK",
      "TypeScript",
      "Zustand",
      "Tailwind CSS / NativeWind",
      "Android Gradle / EAS",
    ],
    image: "/projects/course-selection.jpg",
    logo: "/projects/courseselection-icon.png",
    url: "https://myket.ir/app/com.amirtaha.courseselection",
    links: [
      {
        label: { en: "Download on Myket Store", fa: "مشاهده و دانلود از مایکت" },
        url: "https://myket.ir/app/com.amirtaha.courseselection",
        type: "myket",
        primary: true,
      },
      {
        label: { en: "GitHub Repository", fa: "سورس‌کد در گیت‌هاب" },
        url: "https://github.com/amirtahanemati/CourseSelection-Mobile",
        type: "github",
      },
    ],
    stats: [
      { label: { en: "Myket Rating", fa: "امتیاز در مایکت" }, value: "★ 5.0" },
      { label: { en: "Store Status", fa: "وضعیت انتشار" }, value: "Live on Myket" },
      { label: { en: "State Engine", fa: "مدیریت وضعیت" }, value: "Zustand" },
      { label: { en: "RTL Support", fa: "پشتیبانی فارسی" }, value: "100% Native" },
    ],
    role: {
      en: "Lead Mobile Developer, UI/UX Designer & Store Publisher",
      fa: "توسعه‌دهنده مستقل اپلیکیشن، طراح رابط کاربری و ناشر رسمی در مایکت",
    },
    timeline: {
      en: "Published September 2026 on Myket",
      fa: "شهریور ۱۴۰۵ — انتشار رسمی نسخه اول در مایکت",
    },
    status: {
      en: "Live on Myket (Version 1.0.1)",
      fa: "منتشر شده و فعال در مایکت (نسخه ۱.۰.۱)",
    },
    features: [
      {
        title: {
          en: "Intelligent Schedule Conflict Detection",
          fa: "تشخیص هوشمند و خودکار تداخل دروس و امتحانات",
        },
        description: {
          en: "An automated algorithm analyzes both weekly lecture time-slots and final exam schedules, flagging overlaps before the student commits to registration.",
          fa: "الگوریتم بهینه‌سازی‌شده برای بررسی تلاقی ساعات برگزاری کلاس‌ها و روز/ساعت امتحانات پایان‌ترم با هشدار دیداری آنی به دانشجو.",
        },
        tag: "Conflict Engine",
      },
      {
        title: {
          en: "Visual Weekly Timetable (Saturday – Thursday)",
          fa: "جدول گرافیکی و بصری برنامه هفتگی (شنبه تا پنج‌شنبه)",
        },
        description: {
          en: "A responsive grid mapped across academic hours with custom colored course cards, teacher indicators, and room numbers.",
          fa: "نمایش ماتریسی و رنگ‌بندی‌شده دروس در طول ساعات روز از صبح تا عصر، همراه با نام استاد، گروه درسی و شماره کلاس.",
        },
        tag: "Schedule Grid",
      },
      {
        title: {
          en: "High-Resolution Image Export & Sharing",
          fa: "خروجی باکیفیت تصویری و اشتراک‌گذاری مستقیم",
        },
        description: {
          en: "Generates an elegant, export-ready PNG image of the finished weekly timetable with one-click sharing via Telegram, WhatsApp, and gallery save.",
          fa: "تولید کارت تصویری شفاف با وضوح بالا از برنامه هفتگی نهایی جهت ذخیره در گالری گوشی و ارسال در گروه‌های کلاسی تلگرام و بله.",
        },
        tag: "Image Export",
      },
      {
        title: {
          en: "Offline-First State Persistence with Zustand",
          fa: "عملکرد کاملاً آفلاین و ذخیره‌سازی ابری/محلی با Zustand",
        },
        description: {
          en: "All created courses, units, and custom notes are stored locally on device without requiring constant internet access, ensuring lightning-fast load times.",
          fa: "تمام اطلاعات دروس، واحدها و یادداشت‌ها بدون نیاز به اتصال دائمی اینترنت در حافظه دستگاه کش می‌شوند و اجرای برنامه با حداکثر سرعت صورت می‌گیرد.",
        },
        tag: "Offline-First",
      },
      {
        title: {
          en: "Native Persian Typography & RTL Layout",
          fa: "تایپوگرافی اصیل فارسی، اعداد فارسی و چیدمان راست‌چین",
        },
        description: {
          en: "Tailored specifically for Iranian university students with Persian numeral formatting, Peyda & Dana fonts, and natural RTL navigation gestures.",
          fa: "طراحی اختصاصی برای دانشجویان دانشگاه‌های سراسر کشور با پشتیبانی از فونت‌های فارسی، اعداد فارسی در ساعات روز و ژست‌های حرکتی بومی RTL.",
        },
        tag: "Persian RTL",
      },
    ],
    architecture: {
      title: {
        en: "Mobile Architecture & Tech Stack",
        fa: "معماری فنی و پشته تکنولوژی اپلیکیشن",
      },
      content: {
        en: "Built using modern React Native with Expo SDK and TypeScript for rigid static typing. Zustand manages global application state with zero boilerplate and async storage persistence. UI components are styled with Tailwind CSS (NativeWind) for consistent, snappy mobile layouts compiled with Android Gradle for optimized APK/AAB distribution on Myket.",
        fa: "این اپلیکیشن با فریم‌ورک React Native بر پایه Expo SDK و زبان تایپ‌اسکریپت (TypeScript) برای اطمینان از پایداری ساختار داده‌ها پیاده‌سازی شده است. استیت گلوبال نرم‌افزار توسط Zustand مدیریت می‌شود که علاوه بر سرعت بی‌نظیر، حجم باندل پایینی دارد و با سرویس ذخیره‌سازی محلی گوشی یکپارچه است. استایل‌ها با Tailwind CSS (NativeWind) نوشته شده و بیلد‌های پروداکشن به شکل APK و AAB استاندارد با Gradle تولید و بر روی مارکت مایکت منتشر شده‌اند.",
      },
    },
    challenges: [
      {
        title: {
          en: "Complex Time-Slot Collision Algorithm",
          fa: "پیاده‌سازی الگوریتم بررسی تداخل بازه‌های زمانی متقاطع",
        },
        content: {
          en: "University courses often span irregular times (e.g., 10:30 to 12:00 vs 11:00 to 13:00). A mathematical interval overlap algorithm was written to accurately check [startA < endB and endA > startB] across alternating odd/even weeks and exam timestamps.",
          fa: "کلاس‌های دانشگاهی معمولاً ساعات نامنظمی دارند (مثلاً ۱۰:۳۰ تا ۱۲:۰۰ در برابر ۱۱:۰۰ تا ۱۲:۳۰). با نگارش یک الگوریتم ریاضی بررسی تداخل بازه‌های زمانی باز و بسته، نرم‌افزار با دقت ۱۰۰٪ کوچک‌ترین هم‌پوشانی ساعت کلاس‌ها و روز/ساعت امتحانات را بدون کوچک‌ترین تاخیری شناسایی می‌کند.",
        },
      },
      {
        title: {
          en: "High-DPI Screenshot Capture on Diverse Android Screens",
          fa: "رندر و استخراج تصویر با رزولوشن بالا روی انواع ابعاد صفحه",
        },
        content: {
          en: "Capturing a long schedule across varying Android screen densities required off-screen rendering techniques to ensure exported timetable images remain crisp without text clipping.",
          fa: "تولید تصویر خروجی برنامه هفتگی بر روی گوشی‌های با نسبت ابعاد مختلف اندرویدی ممکن بود باعث افت کیفیت متون شود. با تکنیک رندر برداری پنهان (Off-screen Canvas) تصویری شفاف با وضوح بالا تولید می‌شود که روی هر سایز صفحه‌ای خواناست.",
        },
      },
    ],
    milestones: [
      {
        version: "v1.0.1",
        date: { en: "September 2026", fa: "شهریور ۱۴۰۵" },
        title: { en: "Official Release on Myket Android Store", fa: "انتشار رسمی نسخه اول در استور مایکت" },
        description: {
          en: "Published on Myket with full RTL Persian support, weekly timetable builder, and schedule image export.",
          fa: "انتشار عمومی در استور مایکت؛ دریافت نظرات مثبت کاربران و کسب امتیاز کامل ۵.۰.",
        },
      },
      {
        version: "v0.9.0",
        date: { en: "August 2026", fa: "مرداد ۱۴۰۵" },
        title: { en: "Collision Engine & Offline State Persistence", fa: "موتور تداخل‌یابی زمانی و کش محلی دروس" },
        description: {
          en: "Finalized Zustand state store and interval collision detection algorithms.",
          fa: "تکمیل الگوریتم تداخل‌یابی ساعات دروس و امتحانات و پیاده‌سازی ذخیره‌سازی آفلاین با Zustand.",
        },
      },
    ],
  },
  {
    slug: "color-palette",
    index: "03",
    name: "Color Palette Extractor",
    title: {
      en: "Color Palette Extractor — Offline Desktop Image Palette Generator",
      fa: "نرم‌افزار دسکتاپ استخراج هوشمند پالت رنگ با یادگیری ماشین",
    },
    tagline: {
      en: "A cross-platform desktop application powered by Electron, React, and local FastAPI using K-Means clustering for instant, private color extraction.",
      fa: "اپلیکیشن دسکتاپ مدرن بر پایه Electron و هسته محلی FastAPI برای استخراج دقیق و آفلاین پالت رنگ از تصاویر با الگوریتم یادگیری ماشین K-Means.",
    },
    description: {
      en: "Offline desktop tool combining Electron and Python FastAPI. Extracts dominant colors from any image using K-Means clustering with 1-click HEX/RGB copy and bilingual RTL/LTR interface.",
      fa: "ابزار دسکتاپ آفلاین ترکیب‌کننده Electron و FastAPI پایتون؛ استخراج رنگ‌های غالب تصاویر با الگوریتم خوشه‌بندی K-Means، کپی سریع کد HEX و رابط کاربری دوزبانه.",
    },
    overview: {
      en: "Designers and frontend developers frequently need to extract harmonious color schemes from reference photos or brand guidelines, but existing online tools require uploading private assets to cloud servers. Color Palette Extractor was engineered as a 100% offline desktop tool. Utilizing Electron on the surface and a lightweight Python FastAPI backend running locally, it executes K-Means unsupervised clustering on the image's RGB color space, returning accurate color swatches with one-click HEX, RGB, and HSL clipboard copying.",
      fa: "طراحان رابط کاربری و توسعه‌دهندگان فرانت‌اند مدام نیاز دارند تا پالت‌های رنگی جذاب و هماهنگ را از تصاویر مرجع یا لوگوی برندها استخراج کنند؛ اما اکثر ابزارهای موجود آنلاین بوده و کاربر را مجبور به آپلود تصاویر در سرورهای خارجی می‌کنند. نرم‌افزار Color Palette Extractor به‌عنوان یک اپلیکیشن دسکتاپ کاملاً آفلاین و امن توسعه داده شد. با استفاده از Electron در لایه فرانت و وب‌سرویس لوکال پایتون با FastAPI، این برنامه با الگوریتم خوشه‌بندی یادگیری ماشین K-Means رنگ‌های مسلط تصویر را تفکیک کرده و کدهای HEX، RGB و HSL را با یک کلیک در کلیپ‌بورد کپی می‌کند.",
    },
    accent: "DESKTOP / ELECTRON & FASTAPI",
    category: {
      en: "Desktop App / AI & Computer Vision",
      fa: "نرم‌افزار دسکتاپ / پردازش تصویر و هوش مصنوعی",
    },
    tech: [
      "Electron",
      "React",
      "FastAPI (Python)",
      "scikit-learn (KMeans)",
      "OpenCV / PIL",
      "Tailwind CSS",
      "TypeScript",
    ],
    image: "/projects/color-palette.jpg",
    url: "https://github.com/amirtahanemati/Color-palette-extractor",
    links: [
      {
        label: { en: "GitHub Repository", fa: "مشاهده در گیت‌هاب" },
        url: "https://github.com/amirtahanemati/Color-palette-extractor",
        type: "github",
        primary: true,
      },
    ],
    stats: [
      { label: { en: "Privacy", fa: "حفظ حریم خصوصی" }, value: "100% Offline" },
      { label: { en: "ML Algorithm", fa: "الگوریتم یادگیری" }, value: "K-Means" },
      { label: { en: "Core Framework", fa: "هسته دسکتاپ" }, value: "Electron + FastAPI" },
      { label: { en: "Formats", fa: "فرمت‌های رنگ" }, value: "HEX / RGB / HSL" },
    ],
    role: {
      en: "Desktop Application Architect & Machine Learning Engineer",
      fa: "معمار نرم‌افزار دسکتاپ و پیاده‌سازی الگوریتم‌های پردازش تصویر",
    },
    timeline: {
      en: "2025 — Released Open Source",
      fa: "۱۴۰۴ — انتشار متن‌باز در گیت‌هاب",
    },
    status: {
      en: "Stable Open Source Release",
      fa: "نسخه پایدار و متن‌باز",
    },
    features: [
      {
        title: {
          en: "100% Offline Local Processing",
          fa: "پردازش کاملاً آفلاین بدون نیاز به اتصال به اینترنت",
        },
        description: {
          en: "Zero cloud dependencies. High-resolution images are processed directly inside the user machine's memory, ensuring total privacy.",
          fa: "بدون نیاز به ارسال فایل به سرور؛ پردازش مستقیم روی پردازنده سیستم با حفظ محرمانگی کامل فایل‌های کاربر.",
        },
        tag: "Privacy",
      },
      {
        title: {
          en: "K-Means Color Clustering Engine",
          fa: "موتور خوشه‌بندی رنگی K-Means در فضای سه‌بعدی RGB",
        },
        description: {
          en: "Finds the mathematical centroids of color distributions, producing balanced palettes ranging from 3 to 16 dominant tones.",
          fa: "تحلیل ریاضی توزیع پیکسل‌ها و استخراج مراکز خوشه‌های رنگی با قابلیت انتخاب تعداد رنگ‌های خروجی بین ۳ تا ۱۶ رنگ.",
        },
        tag: "Machine Learning",
      },
      {
        title: {
          en: "One-Click Instant HEX / RGB / HSL Copy",
          fa: "کپی سریع کدهای رنگ با یک کلیک",
        },
        description: {
          en: "Clicking any color chip copies the formatted HEX code to the clipboard, with automatic contrast detection for swatch text readability.",
          fa: "کپی فوری کد رنگ در فرمت‌های پرکاربرد طراحان (HEX، RGB، HSL) با نشانگر خوانایی کنتراست رنگ متن روی پس‌زمینه.",
        },
        tag: "Quick Copy",
      },
      {
        title: {
          en: "Bilingual RTL/LTR Desktop UI",
          fa: "رابط کاربری مدرن دوزبانه با تم تاریک",
        },
        description: {
          en: "Polished dark-mode aesthetic with seamless bilingual toggle between Persian RTL and English LTR layouts.",
          fa: "طراحی مینیمال و شکیل با تم تاریک و امکان سوییچ بلادرنگ بین زبان‌های فارسی و انگلیسی.",
        },
        tag: "Bilingual UI",
      },
    ],
    architecture: {
      title: {
        en: "Hybrid Electron + FastAPI Architecture",
        fa: "معماری تلفیقی Electron و سرویس محلی FastAPI",
      },
      content: {
        en: "The desktop window is managed by Electron hosting a React single-page UI. In the background, Electron spawns a lightweight local Python FastAPI microservice that executes scikit-learn and PIL algorithms, providing native machine learning capabilities directly on desktop platforms without web limitations.",
        fa: "در این پروژه از یک معماری دو لایه بهره گرفته شده است: پنجره اپلیکیشن توسط Electron مدیریت شده و رابط کاربری شکیل React را بارگذاری می‌کند؛ همزمان Electron در پس‌زمینه یک سرویس مستقل و سبک FastAPI پایتون را اجرا می‌نماید که وظیفه پردازش سنگین تصویر و اجرای الگوریتم‌های کتابخانه scikit-learn را بر عهده دارد. ارتباط این دو لایه از طریق APIهای لوکال با حداکثر سرعت برقرار می‌شود.",
      },
    },
    challenges: [
      {
        title: {
          en: "Memory & Performance Optimization for Large Images",
          fa: "بهینه‌سازی مصرف حافظه در پردازش تصاویر با وضوح 4K",
        },
        content: {
          en: "Running clustering on raw 20-megapixel images creates unacceptable UI freezes. Implemented an automatic adaptive downsampling pipeline in PIL before feeding arrays to K-Means, dropping compute latency from 6s to under 120ms while preserving color distribution accuracy.",
          fa: "اجرای خوشه‌بندی روی تصاویر سنگین چند مگاپیکسلی باعث کندی پردازنده می‌شد. با پیاده‌سازی پایپ‌لاین پیش‌پردازش و مقیاس‌پذیری تطبیقی با حفظ هیوگرام رنگی، زمان پردازش از ۶ ثانیه به زیر ۱۲۰ میلی‌ثانیه کاهش یافت.",
        },
      },
    ],
    milestones: [
      {
        version: "v1.0.0",
        date: { en: "2025", fa: "۱۴۰۴" },
        title: { en: "Initial Open Source Desktop Release", fa: "انتشار عمومی نسخه دسکتاپ در گیت‌هاب" },
        description: {
          en: "Launched on GitHub with full Electron, React, and FastAPI offline architecture.",
          fa: "عرضه عمومی سورس‌کد در گیت‌هاب همراه با پشتیبانی کامل از استخراج پالت K-Means.",
        },
      },
    ],
  },
  {
    slug: "cafe-menu",
    index: "04",
    name: "Digital Cafe Menu",
    title: {
      en: "Digital Cafe Menu — Interactive Mobile-First Digital Menu",
      fa: "پلتفرم وب‌اپلیکیشن منوی آنلاین و تعاملی کافه‌ها",
    },
    tagline: {
      en: "A responsive, mobile-first web menu built for specialty coffee shops featuring live operating-hour status, real-time category filtering, and instant cart management.",
      fa: "منوی دیجیتال تعاملی موبایل‌محور با لود فوق‌سریع، فیلتر آنی دسته‌بندی‌ها، سبد سفارشات سبک و نشانگر زنده ساعات کاری کافه.",
    },
    description: {
      en: "Mobile-first digital menu for cafés built with React, TypeScript and Tailwind CSS — cart, category filters, live open/closed status and full Persian RTL support.",
      fa: "منوی دیجیتال موبایل‌محور برای کافه‌ها با React، TypeScript و Tailwind CSS — سبد خرید، فیلتر دسته‌بندی، وضعیت باز/بسته زنده و پشتیبانی کامل از راست‌به‌چپ فارسی.",
    },
    overview: {
      en: "Traditional paper menus in modern specialty coffee shops are costly to update and lack allergen warnings or visual dish previews. Digital Cafe Menu offers a frictionless, QR-code powered experience. Designed mobile-first with lightning-fast load times, it lets customers browse hot/cold beverages and desserts, filter by dietary requirements, see whether the espresso bar or kitchen is currently accepting orders, and stage items into a clean client-side cart.",
      fa: "منوهای کاغذی قدیمی در کافه‌ها همواره با چالش استهلاک، هزینه بالای چاپ مجدد هنگام تغییر قیمت‌ها و عدم امکان نمایش تصاویر باکیفیت مواجه هستند. پروژه منوی دیجیتال کافه برای رفع این مشکلات و ارائه یک تجربه کاربری بدون اصطکاک بر مبنای اسکن کدهای QR روی میزها طراحی شده است. این وب‌اپلیکیشن با رویکرد موبایل‌محور، فیلتر آنی دسته‌بندی‌ها، نمایش زنده ساعات کاری کافه و سبد خرید سبک در اختیار مشتریان قرار می‌گیرد.",
    },
    accent: "WEB / E-COMMERCE",
    category: {
      en: "Mobile-First Web App / E-Commerce",
      fa: "وب‌اپلیکیشن موبایل‌محور / منوی دیجیتال تجاری",
    },
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "PWA Architecture",
    ],
    image: "/projects/menu-cafe.jpg",
    url: "https://github.com/amirtahanemati/menu-cafe-react",
    links: [
      {
        label: { en: "GitHub Repository", fa: "مشاهده در گیت‌هاب" },
        url: "https://github.com/amirtahanemati/menu-cafe-react",
        type: "github",
        primary: true,
      },
    ],
    stats: [
      { label: { en: "Performance", fa: "سرعت لود" }, value: "100 Score" },
      { label: { en: "Interface", fa: "طراحی اختصاصی" }, value: "Mobile-First" },
      { label: { en: "Live Status", fa: "وضعیت زنده" }, value: "Open / Closed" },
      { label: { en: "Animations", fa: "انیمیشن‌ها" }, value: "Framer Motion" },
    ],
    role: {
      en: "Frontend Architect & Product Designer",
      fa: "طراح رابط کاربری و توسعه‌دهنده ارشد فرانت‌اند",
    },
    timeline: {
      en: "2025 — Open Source & Client Deployed",
      fa: "۱۴۰۴ — انتشار متن‌باز و پیاده‌سازی کافه‌ها",
    },
    status: {
      en: "Production Ready for Cafes",
      fa: "آماده استقرار تجاری برای کافه‌ها و رستوران‌ها",
    },
    features: [
      {
        title: {
          en: "Sub-Second QR Scanning Experience",
          fa: "تجربه فوق‌سریع لود پس از اسکن کیو‌آرکد میز",
        },
        description: {
          en: "Zero bloated assets. Engineered for cellular network performance, loading instantaneously without requiring app installations.",
          fa: "حجم باندل فوق‌العاده پایین برای لود آنی با اینترنت موبایل بدون نیاز به نصب هرگونه اپلیکیشن اضافی.",
        },
        tag: "Speed",
      },
      {
        title: {
          en: "Live Operating Hours & Shift Detection",
          fa: "بررسی زنده ساعات کاری و وضعیت شیفت سفارش‌گیری",
        },
        description: {
          en: "Automatically checks the cafe's schedule and informs customers if the bar is currently closed or in prep shift.",
          fa: "بررسی خودکار ساعات فعال کافه در لحظه و اطلاع‌رسانی خودکار به مشتری در صورت پایان شیفت کاری.",
        },
        tag: "Live Hours",
      },
      {
        title: {
          en: "Client-Side Cart & Total Calculation",
          fa: "سبد سفارشات کلاینت‌ساید با محاسبه بلادرنگ قیمت",
        },
        description: {
          en: "Simple, transparent item selection with count controls and total summation ready to show the barista.",
          fa: "امکان انتخاب اقلام، تنظیم تعداد و مشاهده جمع کل سفارشات جهت اعلام سریع به باریستا.",
        },
        tag: "Cart",
      },
      {
        title: {
          en: "Smooth Micro-Interactions",
          fa: "انیمیشن‌های نرم و تایپوگرافی لوکس",
        },
        description: {
          en: "Fluid transitions powered by Framer Motion, elevating the coffee shop's brand prestige.",
          fa: "انیمیشن‌های ظریف جابجایی دسته‌بندی‌ها با Framer Motion و نمایش چشم‌نواز آیتم‌های منو.",
        },
        tag: "Motion",
      },
    ],
    architecture: {
      title: {
        en: "Frontend Architecture & Styling",
        fa: "معماری فرانت‌اند و کارایی",
      },
      content: {
        en: "Built on React with TypeScript and Vite for near-instant hot module replacement and bundle compression. Utility-first Tailwind CSS ensures zero CSS bundle bloat, while Framer Motion handles layout animations smoothly even on low-end Android mobile devices.",
        fa: "توسعه داده‌شده با React و TypeScript بر بستر Vite برای ایجاد سبک‌ترین باندل ممکن. استایل‌ها با Tailwind CSS بهینه‌سازی شده‌اند و انیمیشن‌های سبک Framer Motion روی تمام دستگاه‌های موبایل حتی گوشی‌های میان‌رده روان و بدون لگ اجرا می‌شوند.",
      },
    },
    challenges: [
      {
        title: {
          en: "High Performance on Weak Mobile Data Connections",
          fa: "حفظ بالاترین سرعت روی اینترنت همراه و آنتن‌دهی ضعیف",
        },
        content: {
          en: "Cafes often have dead zones with poor mobile reception. We optimized image compression with WebP formats and aggressive lazy loading to ensure customers never stare at a blank screen.",
          fa: "کافه‌ها اغلب در فضاهای بسته یا زیرزمین‌هایی با آنتن‌دهی ضعیف قرار دارند. با فشرده‌سازی حداکثری فرمت‌های WebP و سیستم بارگذاری تاخیری هوشمند، منو حتی با ضعیف‌ترین اینترنت‌ها بدون مکث باز می‌شود.",
        },
      },
    ],
    milestones: [
      {
        version: "v1.0.0",
        date: { en: "2025", fa: "۱۴۰۴" },
        title: { en: "Open Source Release", fa: "عرضه عمومی سورس‌کد در گیت‌هاب" },
        description: {
          en: "Released on GitHub as an open, accessible digital cafe menu solution.",
          fa: "انتشار عمومی پروژه در گیت‌هاب برای استفاده رایگان کافه‌ها و توسعه‌دهندگان.",
        },
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: { en: "Languages", fa: "زبان‌های برنامه‌نویسی" },
    items: ["Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    label: { en: "Frontend", fa: "فرانت‌اند و وب" },
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "KaTeX / LaTeX"],
  },
  {
    label: { en: "Backend & DB", fa: "بک‌اند و پایگاه داده" },
    items: ["Python", "FastAPI", "SQLAlchemy 2.0 (Async)", "PostgreSQL", "SQLite", "Redis"],
  },
  {
    label: { en: "Mobile & Desktop", fa: "موبایل و دسکتاپ" },
    items: ["React Native", "Expo", "Electron", "Flutter"],
  },
  {
    label: { en: "DevOps & Tools", fa: "دواپس و ابزارها" },
    items: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "GitHub Actions"],
  },
];

export const honors: Honor[] = [
  {
    id: "ict-challenge-11",
    rank: {
      en: "2nd Place (National Runner-Up) — Silver Medal",
      fa: "مقام دوم کشوری (نایب‌قهرمانی) — مدال نقره",
    },
    medal: "silver",
    title: {
      en: "ICT Challenge 11 — National Programming Championship",
      fa: "یازدهمین دوره مسابقات ملی چالش‌های فناوری اطلاعات و ارتباطات (ICT Challenge 11)",
    },
    competition: {
      en: "11th National ICT Challenge Competition",
      fa: "یازدهمین دوره مسابقات برنامه‌نویسی چالش‌های فناوری اطلاعات کشور",
    },
    organizer: {
      en: "Sharif University of Technology & Sharif ICT Group",
      fa: "دانشگاه صنعتی شریف و گروه فناوری اطلاعات شریف (با نظارت معاونت علمی ریاست‌جمهوری)",
    },
    date: {
      en: "July – August 2026",
      fa: "تیر و مرداد ۱۴۰۵",
    },
    team: {
      en: "Team Lornux (Lorestan University) — Amirtaha Nemati",
      fa: "امیرطاها نعمتی (تیم Lornux دانشگاه لرستان)",
    },
    description: {
      en: "Secured 2nd place nationally among top university engineering teams from across Iran, tackling advanced algorithmic challenges, banking financial workflow pipelines (BankFlow), and consistency verification engines under rigorous real-time benchmarks.",
      fa: "کسب عنوان نایب‌قهرمانی کشوری در رقابت با برترین تیم‌های برنامه‌نویسی دانشگاه‌های سراسر کشور در دانشگاه صنعتی شریف؛ با پیاده‌سازی زیرسیستم‌های هوشمند پردازش گردش‌های مالی بانکی (BankFlow)، اعتبارسنجی پیشرفته و موتورهای تشخیص تطابق داده‌ها.",
    },
    tags: [
      "دانشگاه صنعتی شریف",
      "تیم Lornux",
      "مدال نقره کشوری",
      "الگوریتم‌های پیشرفته",
      "معاونت علمی ریاست‌جمهوری",
    ],
    links: [
      {
        title: {
          en: "Official Event Portal (Sharif ICT)",
          fa: "پایگاه رسمی مسابقات شریف ICT",
        },
        url: "https://sharifict.com",
        source: "sharifict.com",
      },
      {
        title: {
          en: "KhabarOnline News Coverage",
          fa: "خبرگزاری خبرآنلاین (گزارش نایب‌قهرمانی مسابقات شریف)",
        },
        url: "https://www.khabaronline.ir",
        source: "khabaronline.ir",
      },
      {
        title: {
          en: "Lorestan University Announcement",
          fa: "پایگاه رسمی دانشگاه لرستان",
        },
        url: "https://lu.ac.ir",
        source: "lu.ac.ir",
      },
      {
        title: {
          en: "Broadcast Coverage (IRIB News)",
          fa: "بازتاب خبری مسابقات در صدا و سیما",
        },
        url: "https://www.iribnews.ir",
        source: "iribnews.ir",
      },
    ],
  },
  {
    id: "ict-challenge-10",
    rank: {
      en: "3rd Place Nationally — Bronze Medal",
      fa: "مقام سوم کشوری — مدال برنز",
    },
    medal: "bronze",
    title: {
      en: "ICT Challenge 10 — National Software Engineering Cup",
      fa: "دهمین دوره مسابقات برنامه‌نویسی چالش‌های فناوری اطلاعات کشور (ICT Challenge 10)",
    },
    competition: {
      en: "10th National ICT Challenge Competition",
      fa: "دهمین دوره مسابقات برنامه‌نویسی چالش‌های فناوری اطلاعات کشور",
    },
    organizer: {
      en: "Sharif University of Technology & Sharif Innovation Center",
      fa: "دانشگاه صنعتی شریف و مرکز نوآوری شریف",
    },
    date: {
      en: "2025",
      fa: "سال ۱۴۰۴",
    },
    team: {
      en: "Team Lornux (Lorestan University) — Amirtaha Nemati",
      fa: "امیرطاها نعمتی (تیم Lornux دانشگاه لرستان)",
    },
    description: {
      en: "Achieved 3rd place nationally in high-intensity software engineering and algorithmic challenges judged by evaluators from Sharif University of Technology, demonstrating resilient problem-solving and rapid architectural implementation under extreme time pressure.",
      fa: "کسب مقام سوم کشوری در رقابتی فشرده با حضور نخبگان برنامه‌نویسی کشور؛ طراحی و پیاده‌سازی راه‌حل‌های بهینه‌سازی‌شده برای مسائل پیچیده الگوریتمی و مهندسی نرم‌افزار در ماراتن برنامه‌نویسی دانشگاه صنعتی شریف.",
    },
    tags: [
      "دانشگاه صنعتی شریف",
      "تیم Lornux",
      "مقام سوم کشوری",
      "مسابقات ملی برنامه‌نویسی",
    ],
    links: [
      {
        title: {
          en: "Official Event Portal (Sharif ICT)",
          fa: "پایگاه رسمی مسابقات شریف ICT",
        },
        url: "https://sharifict.com",
        source: "sharifict.com",
      },
      {
        title: {
          en: "Tech Media Coverage (GooyaIT)",
          fa: "گزارش موفقیت تیم در گویا آی‌تی",
        },
        url: "https://gooyait.com",
        source: "gooyait.com",
      },
      {
        title: {
          en: "News Agency Feature (Rooziato)",
          fa: "بازتاب نتایج مسابقات فناوری در روزیاتو",
        },
        url: "https://rooziato.com",
        source: "rooziato.com",
      },
    ],
  },
];

export const pressMentions: PressMention[] = [
  {
    name: "خبرگزاری خبرآنلاین (KhabarOnline)",
    label: {
      fa: "دانشگاه لرستان و تیم Lornux نایب‌قهرمان مسابقات برنامه‌نویسی ایران شد",
      en: "KhabarOnline report on Team Lornux ranking 2nd nationally at Sharif",
    },
    url: "https://www.khabaronline.ir",
    badge: "خبرگزاری رسمی",
  },
  {
    name: "صدا و سیما (IRIB News)",
    label: {
      fa: "پوشش رسانه‌ای مسابقات برنامه‌نویسی چالش‌های فناوری شریف",
      en: "National broadcast coverage of Sharif ICT Challenge results",
    },
    url: "https://www.iribnews.ir",
    badge: "صدا و سیما",
  },
  {
    name: "دانشگاه لرستان (Lorestan University)",
    label: {
      fa: "پایگاه رسمی دانشگاه لرستان؛ تجلیل از مقام‌آوران مسابقات ICT Challenge",
      en: "Official university portal recognition of national ICT Challenge winners",
    },
    url: "https://lu.ac.ir",
    badge: "پایگاه دانشگاهی",
  },
  {
    name: "گویا آی‌تی (GooyaIT)",
    label: {
      fa: "گزارش درخشش تیم Lornux در مسابقات کشوری ICT Challenge",
      en: "Coverage of Team Lornux triumph in national ICT Challenge",
    },
    url: "https://gooyait.com",
    badge: "پایگاه فناوری",
  },
  {
    name: "گروه فناوری شریف (Sharif ICT)",
    label: {
      fa: "پایگاه رسمی مسابقات ملی چالش‌های فناوری اطلاعات و ارتباطات",
      en: "Official portal of Sharif National ICT Challenges",
    },
    url: "https://sharifict.com",
    badge: "رویداد رسمی",
  },
];
