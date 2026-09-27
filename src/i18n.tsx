import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "fa";

const copy = {
  en: {
    nav: {
      about: "About",
      work: "Work",
      stack: "Stack",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      primaryNavigation: "Primary navigation",
      backToTop: "Back to top",
      language: "Language",
    },
    loader: {
      meta: "PORTFOLIO / 2026",
    },
    hero: {
      availability: "AVAILABLE FOR INTERESTING WORK",
      location: "IR / REMOTE",
      kicker: "AMIRTAHA NEMATI — SOFTWARE DEVELOPER",
      title: ["I BUILD", "DIGITAL", "PRODUCTS."],
      titleAria: "I build digital products",
      tagline: "I turn ideas into fast, useful and memorable digital products.",
      viewWork: "View selected work",
      portraitLabel: "AMIRTAHA / 2026",
      linkedin: "LinkedIn",
      roles: [
        "FULL-STACK DEVELOPER",
        "PRODUCT BUILDER",
        "BACKEND ENGINEER",
        "MOBILE DEVELOPER",
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
      eyebrow: "ABOUT",
      title: "NOT JUST CODE. A BETTER PRODUCT.",
      stamp1: "BASED IN IRAN",
      stamp2: "BUILDING WORLDWIDE",
      copy: "I like the point where engineering, product thinking and visual craft meet. I build interfaces that feel intentional, APIs that stay understandable and systems designed to survive real use.",
    },
    work: {
      eyebrow: "SELECTED WORK",
      title: "BUILT TO SOLVE. DESIGNED TO STICK.",
    },
    stack: {
      eyebrow: "CAPABILITIES",
      title: "TOOLS CHANGE. THE CRAFT STAYS.",
    },
    telegram: {
      eyebrow: "JOIN THE CHANNEL",
      title: "FOLLOW THE BUILD LOG ON TELEGRAM",
      copy: "Behind-the-scenes notes, project drops and dev updates — posted first on the channel.",
      cta: "Join the channel",
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
      stack: "مهارت‌ها",
      contact: "ارتباط",
      openMenu: "باز کردن منو",
      closeMenu: "بستن منو",
      primaryNavigation: "منوی اصلی",
      backToTop: "بازگشت به ابتدای صفحه",
      language: "زبان",
    },
    loader: {
      meta: "پورتفولیو / ۲۰۲۶",
    },
    hero: {
      availability: "آماده همکاری روی پروژه‌های جدی",
      location: "ایران / ریموت",
      kicker: "امیرطاها نعمتی — توسعه‌دهنده نرم‌افزار",
      title: ["ایده‌ها را", "به محصول", "تبدیل می‌کنیم"],
      titleAria: "ایده‌ها را به محصول دیجیتال تبدیل می‌کنم...",
      tagline:
        "ایده‌ها را به محصولات دیجیتال سریع، کاربردی و به‌یادماندنی تبدیل می‌کنم...",
      viewWork: "مشاهده پروژه‌ها",
      portraitLabel: "AMIRTAHA / 2026",
      linkedin: "لینکدین",
      roles: [
        "توسعه‌دهنده فول‌استک",
        "سازنده محصول",
        "مهندس بک‌اند",
        "توسعه‌دهنده موبایل",
      ],
    },
    stats: {
      aria: "آمار زنده گیت‌هاب",
      repos: "ریپازیتوری عمومی",
      stars: "مجموع ستاره‌ها",
      followers: "دنبال‌کننده",
      following: "دنبال‌شده",
      live: "داده زنده از GitHub API",
      loading: "در حال دریافت اطلاعات گیت‌هاب",
      error: "اطلاعات گیت‌هاب موقتاً در دسترس نیست",
    },
    about: {
      eyebrow: "درباره من",
      title: "فقط کد نیست؛ محصول بهتر است.",
      stamp1: "مستقر در ایران",
      stamp2: "در حال ساخت برای جهان",
      copy: "جایی کار می‌کنم که مهندسی، تفکر محصول و ظرافت بصری به هم می‌رسند. رابط‌هایی می‌سازم که هدفمند حس شوند، APIهایی که قابل فهم بمانند و سیستم‌هایی که برای استفاده واقعی طراحی شده‌اند.",
    },
    work: {
      eyebrow: "پروژه‌های منتخب",
      title: "برای حل مسئله ساخته شده؛ برای ماندن طراحی شده.",
    },
    stack: {
      eyebrow: "توانمندی‌ها",
      title: "ابزارها عوض می‌شوند؛ مهارت ساختن می‌ماند.",
    },
    telegram: {
      eyebrow: "به کانال بپیوندید",
      title: "روند ساخت پروژه‌ها را در تلگرام دنبال کن",
      copy: "یادداشت‌های پشت‌صحنه، معرفی پروژه‌های تازه و آپدیت‌های توسعه — اول از همه توی کانال منتشر می‌شن.",
      cta: "عضویت در کانال",
    },
    contact: {
      eyebrow: "ارتباط",
      question: "ایده‌ای داری؟",
      line1: "بیایید با هم",
      line2: "چیزی خوب بسازیم.",
      phone: "تلفن",
      email: "ایمیل",
      linkedin: "لینکدین",
      call: "تماس با من",
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
  if (typeof window === "undefined") return "en";

  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (queryLanguage === "fa" || queryLanguage === "en") return queryLanguage;

  const savedLanguage = window.localStorage.getItem("amirtaha-language");
  if (savedLanguage === "fa" || savedLanguage === "en") return savedLanguage;

  return window.navigator.language.toLowerCase().startsWith("fa") ? "fa" : "en";
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
    document.title =
      lang === "fa"
        ? "امیرطاها نعمتی | توسعه‌دهنده نرم‌افزار"
        : "Amirtaha Nemati | Software Developer";

    const description =
      lang === "fa"
        ? "پورتفولیوی امیرطاها نعمتی؛ توسعه‌دهنده نرم‌افزار در حوزه فرانت‌اند، بک‌اند و موبایل."
        : "Amirtaha Nemati — software developer building polished digital products across frontend, backend and mobile.";

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
