import { About } from './components/About'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Hero } from './components/Hero'
import { Honors } from './components/Honors'
import { LazyMount } from './components/LazyMount'
import { Nav } from './components/Nav'
import { ProjectDetail } from './components/ProjectDetail'
import { Stack } from './components/Stack'
import { Stats } from './components/Stats'
import { TelegramBanner } from './components/TelegramBanner'
import { Work } from './components/Work'
import { useRouter } from './context/RouterContext'

export default function App() {
  const { isProjectPage, currentSlug } = useRouter()

  return (
    <>
      <Cursor />
      <div className="page-grid" aria-hidden="true" />
      <Nav />
      <main>
        {isProjectPage && currentSlug ? (
          <ProjectDetail slug={currentSlug} />
        ) : (
          <>
            <Hero />
            <Stats />
            <LazyMount><About /></LazyMount>
            <LazyMount><Work /></LazyMount>
            <LazyMount><Honors /></LazyMount>
            <LazyMount><TelegramBanner /></LazyMount>
            <LazyMount><Stack /></LazyMount>
            <LazyMount><Contact /></LazyMount>
          </>
        )}
      </main>
    </>
  )
}
