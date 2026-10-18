import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "fa";

export const copy = {
  en: {
    nav: {
      about: "About",
      work: "Work",
      honors: "Honors",
      stack: "Stack",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      primaryNavigation: "Primary navigation",
      backToTop: "Back to top",
      language: "Language",
      backToHome: "Back to Portfolio",
    },
    loader: {
      meta: "AMIRTAHA NEMATI / PORTFOLIO / 2026",
    },
    hero: {
      availability: "AVAILABLE FOR COMMITTED PROJECTS",
      location: "IR / REMOTE",
      kicker: "AMIRTAHA NEMATI — FULL-STACK DEVELOPER",
      title: ["I BUILD", "DIGITAL", "PRODUCTS."],
      titleAria: "Turning ideas into fast, precise and high-quality software products",
      tagline: "Turning ideas into fast, precise and high-quality software products.",
      viewWork: "View selected work",
      portraitLabel: "AMIRTAHA / 2026",
      linkedin: "LinkedIn",
      roles: [
        "FULL-STACK DEVELOPER",
        "WEB & MOBILE DEVELOPER",
        "DESKTOP DEVELOPER",
        "SOFTWARE ARCHITECT",
      ],
    },
    stats: {
      aria: "Live GitHub statistics",
      repos: "PUBLIC REPOS",
      stars: "TOTAL STARS",
      followers: "FOLLOWERS",
      following: "FOLLOWING",
      live: "LIVE FROM GITHUB API",
      loading: "SYNCING GITHUB DATA",
      error: "GITHUB DATA TEMPORARILY UNAVAILABLE",
    },
    about: {
      eyebrow: "ABOUT AMIRTAHA NEMATI",
      title: "NOT JUST CODE. A BETTER PRODUCT.",
      stamp1: "BASED IN IRAN",
      stamp2: "BUILDING WORLDWIDE",
      copy: "I am Amirtaha Nemati, a software developer working at the intersection of engineering rigor, product thinking, and visual craft. I build interfaces that feel intentional, APIs that stay resilient, and systems designed to survive real-world use — from the comprehensive Nemro online assessment platform to the CourseSelection Mobile app published on Myket.",
    },
    work: {
      eyebrow: "SELECTED WORK & CASE STUDIES",
      title: "BUILT TO SOLVE. DESIGNED TO STICK.",
      viewCaseStudy: "View Case Study",
      viewOnMyket: "Get on Myket",
      viewOnGithub: "View on GitHub",
      publishedOnMyket: "Published on Myket",
      allProjects: "All Projects",
      visitNemroLive: "Visit nemro.ir",
      liveStatusBadge: "nemro.ir — Live Website",
    },
    projectDetail: {
      backToProjects: "Back to Projects",
      breadcrumbHome: "Home",
      breadcrumbProjects: "Projects",
      myRole: "My Role",
      timeline: "Timeline",
      status: "Status",
      techStack: "Tech Stack",
      keyHighlights: "Key Features & Innovations",
      architecture: "System Architecture & Stack Deep-Dive",
      challenges: "Engineering Challenges Overcome",
      milestones: "Release History & Milestones",
      nextProject: "Next Project",
      prevProject: "Previous Project",
      ctaTitle: "Interested in this project or want to build something similar?",
      ctaButton: "Let's Talk",
      versionHeader: "Version",
      dateHeader: "Date",
      changeHeader: "Milestone Details",
      ratingBadge: "5.0 Rating on Myket",
      visitLiveWebsite: "Visit Live nemro.ir Website",
      liveVerifiedBadge: "Verified Live System | nemro.ir",
      clickToOpenSite: "Click anywhere to open nemro.ir live website",
      browserLivePill: "PRODUCTION / LIVE",
    },
    honors: {
      eyebrow: "NATIONAL HONORS & COMPETITIONS",
      title: "REAL-WORLD CHALLENGES. COMPETING AT THE PEAK.",
      teamLabel: "Team:",
      organizerLabel: "Organizer:",
      silverMedal: "Silver Medal",
      bronzeMedal: "Bronze Medal",
      pressTitle: "Media & Press Coverage",
      pressSubtitle:
        "Featured articles and broadcast coverage regarding Amirtaha Nemati and Team Lornux across major news outlets:",
      readArticle: "Read Coverage",
      officialEvent: "Official Competition",
    },
    stack: {
      eyebrow: "CAPABILITIES",
      title: "TOOLS CHANGE. THE CRAFT STAYS.",
    },
    telegram: {
      eyebrow: "JOIN THE CHANNEL",
      title: "FOLLOW THE BUILD LOG ON TELEGRAM",
      copy: "Behind-the-scenes engineering notes, project drops and software updates — posted first on the channel.",
      cta: "Join @nematidev",
    },
    contact: {
      eyebrow: "CONTACT",
      question: "HAVE AN IDEA?",
      line1: "LET'S BUILD",
      line2: "SOMETHING GOOD.",
      phone: "PHONE",
      email: "EMAIL",
      linkedin: "LINKEDIN",
      call: "Call me",
    },
  },
  fa: {
    nav: {
      about: "درباره من",
      work: "پروژه‌ها",
      honors: "افتخارات",
      stack: "مهارت‌ها",
      contact: "ارتباط",
      openMenu: "باز کردن منو",
      closeMenu: "بستن منو",
      primaryNavigation: "منوی اصلی",
      backToTop: "بازگشت به ابتدای صفحه",
      language: "زبان",
      backToHome: "بازگشت به پورتفولیو",
    },
    loader: {
      meta: "امیرطاها نعمتی / پورتفولیو / ۲۰۲۶",
    },
    hero: {
      availability: "آماده همکاری روی پروژه‌های جدی",
      location: "ایران / ریموت",
      kicker: "امیرطاها نعمتی — توسعه‌دهنده فول‌استک",
      title: ["ایده‌ها را", "به محصول", "تبدیل می‌کنیم"],
      titleAria: "تبدیل ایده‌ها به محصولات نرم‌افزاری سریع، دقیق و باکیفیت",
      tagline:
        "تبدیل ایده‌ها به محصولات نرم‌افزاری سریع، دقیق و باکیفیت.",
      viewWork: "مشاهده پروژه‌ها",
      portraitLabel: "AMIRTAHA / 2026",
      linkedin: "لینکدین",
      roles: [
        "توسعه‌دهنده فول‌استک",
        "برنامه‌نویس وب و موبایل",
        "توسعه‌دهنده دسکتاپ",
        "مهندس نرم‌افزار",
      ],
    },
    stats: {
      aria: "آمار زنده گیت‌هاب امیرطاها نعمتی",
      repos: "ریپازیتوری عمومی",
      stars: "مجموع ستاره‌ها",
      followers: "دنبال‌کننده",
      following: "دنبال‌شده",
      live: "داده زنده از GitHub API",
      loading: "در حال دریافت اطلاعات گیت‌هاب",
      error: "اطلاعات گیت‌هاب موقتاً در دسترس نیست",
    },
    about: {
      eyebrow: "درباره امیرطاها نعمتی",
      title: "امیرطاها نعمتی؛ فقط کد نیست، ساختن محصول بهتر است.",
      stamp1: "مستقر در ایران",
      stamp2: "در حال ساخت برای جهان",
      copy: "من امیرطاها نعمتی هستم، توسعه‌دهنده نرم‌افزار و مهندس کامپیوتر. جایی کار می‌کنم که مهندسی دقیق، تفکر محصول و ظرافت بصری به هم می‌رسند. سیستم‌هایی می‌سازم که برای حل مسائل واقعی طراحی شده‌اند؛ از پلتفرم آزمون آنلاین نمرو با موتور فرمول‌نویسی KaTeX تا اپلیکیشن رسمی ابزار انتخاب واحد که در مارکت مایکت با رضایت کامل دانشجویان منتشر شده است.",
    },
    work: {
      eyebrow: "نمونه‌کارهای واقعی و بررسی موردی",
      title: "برای حل مسئله ساخته شده؛ برای ماندن طراحی شده.",
      viewCaseStudy: "بررسی کامل پروژه",
      viewOnMyket: "دریافت از مایکت",
      viewOnGithub: "مشاهده در گیت‌هاب",
      publishedOnMyket: "منتشر شده در مایکت",
      allProjects: "همه پروژه‌ها",
      visitNemroLive: "ورود به سایت nemro.ir",
      liveStatusBadge: "nemro.ir — وب‌سایت فعال",
    },
    projectDetail: {
      backToProjects: "بازگشت به پروژه‌ها",
      breadcrumbHome: "خانه",
      breadcrumbProjects: "پروژه‌ها",
      myRole: "نقش من",
      timeline: "زمان‌بندی",
      status: "وضعیت انتشار",
      techStack: "پشته تکنولوژی",
      keyHighlights: "امکانات کلیدی و نوآوری‌ها",
      architecture: "معماری سیستم و پشته فناوری",
      challenges: "چالش‌های فنی حل‌شده",
      milestones: "جدول نسخه‌ها و تاریخچه توسعه",
      nextProject: "پروژه بعدی",
      prevProject: "پروژه قبلی",
      ctaTitle: "علاقه‌مند به همکاری روی این پروژه یا اجرای ایده‌ای مشابه هستید؟",
      ctaButton: "ارتباط و شروع همکاری",
      versionHeader: "نسخه",
      dateHeader: "تاریخ",
      changeHeader: "تغییرات و دستاوردهای فنی",
      ratingBadge: "امتیاز ۵.۰ در استور مایکت",
      visitLiveWebsite: "ورود مستقیم به وب‌سایت نمرو (nemro.ir)",
      liveVerifiedBadge: "نماد استقرار و پایش زنده سامانه | nemro.ir",
      clickToOpenSite: "برای ورود مستقیم به وب‌سایت نمرو کلیک کنید",
      browserLivePill: "سامانه فعال و آنلاین",
    },
    honors: {
      eyebrow: "افتخارات و مسابقات ملی",
      title: "چالش‌های واقعی؛ رقابت در بالاترین سطح کشوری.",
      teamLabel: "تیم:",
      organizerLabel: "برگزارکننده:",
      silverMedal: "مدال نقره",
      bronzeMedal: "مدال برنز",
      pressTitle: "بازتاب در رسانه‌ها و خبرگزاری‌ها",
      pressSubtitle:
        "گزارش‌ها و بازتاب درخشش امیرطاها نعمتی و تیم Lornux در رسانه‌های ملی و تخصصی فناوری کشور:",
      readArticle: "مشاهده خبر و گزارش",
      officialEvent: "رویداد رسمی کشوری",
    },
    stack: {
      eyebrow: "توانمندی‌ها و تخصص‌ها",
      title: "ابزارها عوض می‌شوند؛ مهارت ساختن می‌ماند.",
    },
    telegram: {
      eyebrow: "کانال تلگرام",
      title: "روند ساخت پروژه‌ها را در تلگرام دنبال کن",
      copy: "یادداشت‌های پشت‌صحنه مهندسی، معرفی پروژه‌های تازه و آپدیت‌های توسعه — اول از همه در کانال تلگرام منتشر می‌شوند.",
      cta: "عضویت در nematidev@",
    },
    contact: {
      eyebrow: "ارتباط مستقیم با امیرطاها نعمتی",
      question: "ایده یا پروژه‌ای داری؟",
      line1: "بیایید با هم",
      line2: "چیزی ماندگار بسازیم.",
      phone: "تلفن همراه",
      email: "ایمیل مستقیم",
      linkedin: "پروفایل لینکدین",
      call: "تماس تلفنی",
    },
  },
} as const;

export type Translation = typeof copy.en | typeof copy.fa;

type LanguageContextValue = {
  lang: Language;
  direction: "ltr" | "rtl";
  t: Translation;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "fa";

  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (queryLanguage === "fa" || queryLanguage === "en") return queryLanguage;

  const savedLanguage = window.localStorage.getItem("amirtaha-language");
  if (savedLanguage === "fa" || savedLanguage === "en") return savedLanguage;

  return window.navigator.language.toLowerCase().startsWith("fa") ? "fa" : "fa";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLanguage);

  const setLanguage = (language: Language) => setLang(language);
  const toggleLanguage = () =>
    setLang((current) => (current === "en" ? "fa" : "en"));

  useEffect(() => {
    const direction = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = direction;
    document.documentElement.dataset.lang = lang;

    // Set SEO-rich Document Title with primary name AmirTaha Nemati
    document.title =
      lang === "fa"
        ? "امیرطاها نعمتی — برنامه‌نویس و توسعه‌دهنده نرم‌افزار | پورتفولیو"
        : "Amirtaha Nemati — Software Developer Portfolio";

    const description =
      lang === "fa"
        ? "وب‌سایت و پورتفولیوی رسمی امیرطاها نعمتی؛ برنامه‌نویس فول‌استک، وب، موبایل و دسکتاپ. مشاهده نمونه کارهای واقعی شامل سامانه آزمون نمرو و اپلیکیشن انتخاب واحد در مایکت."
        : "Official portfolio of Amirtaha Nemati, software developer building web, desktop, and mobile products with FastAPI, React, React Native, and Electron.";

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    metaDescription?.setAttribute("content", description);
    ogTitle?.setAttribute("content", document.title);
    ogDescription?.setAttribute("content", description);
    ogLocale?.setAttribute("content", lang === "fa" ? "fa_IR" : "en_US");
    twitterTitle?.setAttribute("content", document.title);
    twitterDescription?.setAttribute("content", description);

    window.localStorage.setItem("amirtaha-language", lang);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      direction: lang === "fa" ? "rtl" : "ltr",
      t: copy[lang] as Translation,
      setLanguage,
      toggleLanguage,
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function toPersianDigits(value: string | number) {
  const digits = "۰۱۲۳۴۵۶۷۸۹";
  return String(value).replace(/\d/g, (digit) => digits[Number(digit)]);
}
