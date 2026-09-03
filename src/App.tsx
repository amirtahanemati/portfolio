import { About } from './components/About'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Hero } from './components/Hero'
import { LazyMount } from './components/LazyMount'
import { Loader } from './components/Loader'
import { Nav } from './components/Nav'
import { Stack } from './components/Stack'
import { Stats } from './components/Stats'
import { TelegramBanner } from './components/TelegramBanner'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <Loader />
      <Cursor />
      <div className="page-grid" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <LazyMount><About /></LazyMount>
        <LazyMount><Work /></LazyMount>
        <LazyMount><TelegramBanner /></LazyMount>
        <LazyMount><Stack /></LazyMount>
        <LazyMount><Contact /></LazyMount>
      </main>
    </>
  )
}
