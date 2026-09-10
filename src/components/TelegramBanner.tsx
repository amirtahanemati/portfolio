import { motion } from "motion/react";
import { profile } from "../data/portfolio";
import { useLanguage } from "../i18n";

export function TelegramBanner() {
  const { t } = useLanguage();

  return (
    <section className="section shell" id="telegram">
      <motion.a
        className="tg-banner"
        href={profile.telegram}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        data-cursor="active"
      >
        <div className="tg-banner__visual" dir="ltr">
          <div className="tg-banner__glow" />

          <motion.img
            src="/icons/telegram-3d.png"
            alt="Telegram 3D"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "contain",
              position: "relative",
              zIndex: 2,
              filter: "drop-shadow(0 15px 25px rgba(42, 171, 238, 0.35))",
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-2, 3, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="tg-banner__info">
          <span className="tg-banner__eyebrow">{t.telegram.eyebrow}</span>
          <h3>{t.telegram.title}</h3>
          <p>{t.telegram.copy}</p>
          <span className="tg-banner__cta">
            {t.telegram.cta}
            <b className="latin" dir="ltr">
              {profile.telegramHandle}
            </b>
          </span>
        </div>
      </motion.a>
    </section>
  );
}
