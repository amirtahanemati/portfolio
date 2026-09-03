import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { projects } from '../data/portfolio'
import { useLanguage } from '../i18n'
import { SectionIntro } from './SectionIntro'

export function Work() {
  const { lang, t } = useLanguage()

  return (
    <section className="section shell" id="work">
      <SectionIntro number="02" eyebrow={t.work.eyebrow} title={t.work.title} />
      <div className="projects">
        {projects.map((project, i) => (
          <motion.a
            className="project"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .18 }}
            transition={{ duration: .7, delay: i * .08 }}
            data-cursor="active"
          >
            <div className="project__visual" dir="ltr">
              {project.image ? (
                <img
                  className="project__image"
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />
              ) : (
                <>
                  <div className="project__noise" />
                  <div className="project__monogram latin">{project.name.split(' ').map((word) => word[0]).slice(0, 3).join('')}</div>
                </>
              )}
              <div className="project__index latin">{project.index}</div>
              <div className="project__accent latin">{project.accent}</div>
              <ArrowUpRight className="project__arrow" size={30} />
            </div>
            <div className="project__info">
              <h3 className="latin">{project.name}</h3>
              <motion.p key={`${project.name}-${lang}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {project.description[lang]}
              </motion.p>
              <div className="project__tech" dir="ltr">
                {project.tech.map((tech) => <span className="latin" key={tech}>{tech}</span>)}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
