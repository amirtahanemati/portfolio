import { motion } from "motion/react";
import { useLanguage } from "../i18n";
import { SectionIntro } from "./SectionIntro";

export function About() {
  const { lang, t } = useLanguage();
  const words = t.about.copy.split(" ");

  return (
    <section className="section shell" id="about">
      <SectionIntro
        number="01"
        eyebrow={t.about.eyebrow}
        title={t.about.title}
      />
      <div className="about-grid">
        <div className="about-stamp">
          <span>{t.about.stamp1}</span>
          <span>{t.about.stamp2}</span>
        </div>
        <p className="about-copy" key={lang}>
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0.55 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-18% 0px -18% 0px" }}
              transition={{ delay: i * 0.012 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}
