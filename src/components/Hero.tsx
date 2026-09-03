import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { marqueeItems, profile } from "../data/portfolio";
import { useLanguage } from "../i18n";
import { GitHubMark } from "./BrandMarks";

export function Hero() {
  const [role, setRole] = useState(0);
  const { lang, t } = useLanguage();
  const roles = t.hero.roles;

  useEffect(() => {
    setRole(0);
    if (!roles.length) return;

    const timer = window.setInterval(() => {
      setRole((current) => (current + 1) % roles.length);
    }, 2300);

    return () => window.clearInterval(timer);
  }, [lang, roles.length]);

  return (
    <section className="hero shell" id="top">
      <div className="hero__orb" aria-hidden="true" />

      <div className="hero__topline">
        <span>{t.hero.availability}</span>
        <span>{t.hero.location}</span>
      </div>

      <div className="hero__main">
        <div className="hero__copy">
          <AnimatePresence mode="wait">
            <motion.p
              key={`${lang}-kicker`}
              className="hero__kicker"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {t.hero.kicker}
            </motion.p>
          </AnimatePresence>

          <h1 className="hero__title" aria-label={t.hero.titleAria}>
            <AnimatePresence mode="wait">
              <motion.div
                className="hero__title-set"
                key={`${lang}-title`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {t.hero.title.map((line, index) => (
                  <motion.span
                    className={index === 1 ? "hero__title--outline" : ""}
                    key={line}
                    initial={{ y: 70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.72,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </h1>

          <div className="hero__bottom">
            <div className="hero__role">
              <span className="dot" />
              {roles.length > 0 && (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${lang}-${roles[role]}`}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {roles[role]}
                  </motion.span>
                </AnimatePresence>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`${lang}-tagline`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {t.hero.tagline}
              </motion.p>
            </AnimatePresence>

            <div className="hero__actions">
              <a className="button button--accent" href="#work">
                <span>{t.hero.viewWork}</span> <ArrowDownRight size={18} />
              </a>
              <a
                className="button button--ghost latin"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubMark size={18} /> GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <motion.aside
          className="hero__portrait"
          initial={{ opacity: 0, x: lang === "fa" ? -40 : 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait-frame">
            <img src="/amirtaha-profile.webp" alt="Amirtaha Nemati" width="1100" height="1467" fetchPriority="high" />
            <div className="hero__portrait-overlay" aria-hidden="true" />
            <span className="hero__portrait-label latin">
              {t.hero.portraitLabel}
            </span>
          </div>
          <div className="hero__portrait-meta">
            <span>
              {lang === "fa" ? "توسعه‌دهنده نرم‌افزار" : profile.role}
            </span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {t.hero.linkedin} <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.aside>
      </div>

      <div className="marquee" aria-hidden="true" dir="ltr">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className="marquee__item latin" key={`${item}-${index}`}>
              <b>{item}</b>
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
