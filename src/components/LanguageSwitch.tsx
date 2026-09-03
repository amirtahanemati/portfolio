import { useLanguage } from '../i18n'

export function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLanguage, t } = useLanguage()

  return (
    <div className={`lang-switch ${compact ? 'lang-switch--compact' : ''}`} aria-label={t.nav.language}>
      <button
        type="button"
        className={lang === 'en' ? 'is-active' : ''}
        aria-pressed={lang === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={lang === 'fa' ? 'is-active' : ''}
        aria-pressed={lang === 'fa'}
        onClick={() => setLanguage('fa')}
      >
        فا
      </button>
    </div>
  )
}
