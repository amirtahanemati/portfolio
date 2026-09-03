import type { Language } from '../i18n'

type LocalizedText = Record<Language, string>

export type Project = {
  index: string
  name: string
  description: LocalizedText
  tech: string[]
  url: string
  accent: string
  image?: string
}

export type SkillGroup = {
  label: LocalizedText
  items: string[]
}

export const profile = {
  name: 'Amirtaha Nemati',
  brand: 'AMIRTAHA',
  handle: '@amirtahanemati',
  role: 'Software Developer',
  location: 'Iran',
  email: 'amirtahanemati0@gmail.com',
  phone: '+989036458812',
  phoneDisplay: '+98 903 645 8812',
  github: 'https://github.com/amirtahanemati',
  linkedin: 'https://www.linkedin.com/in/amirtahanemati/',
  instagram: 'https://instagram.com/amirtahanemati',
  x: 'https://x.com/amirtahanemati',
  telegram: 'https://t.me/nematidev',
  telegramHandle: '@nematidev',
}

export const marqueeItems = [
  'PYTHON',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'C++',
  'REACT',
  'REACT NATIVE',
  'FLUTTER',
  'FASTAPI',
  'DOCKER',
]

export const projects: Project[] = [
  {
    index: '01',
    name: 'Color Palette Extractor',
    description: {
      en: 'A desktop app (Electron + React + FastAPI) that extracts color palettes from images offline using K-Means, with one-click HEX copy and bilingual RTL/LTR UI.',
      fa: 'اپلیکیشن دسکتاپ (Electron + React + FastAPI) برای استخراج آفلاین پالت رنگی تصاویر با الگوریتم K-Means، کپی سریع کد HEX و رابط کاربری دوزبانه راست‌به‌چپ/چپ‌به‌راست.',
    },
    tech: ['Electron', 'React', 'FastAPI', 'Python', 'KMeans'],
    url: 'https://github.com/amirtahanemati/color-palette-app',
    accent: 'DESKTOP / COLOR',
    image: '/projects/color-palette.jpg',
  },
  {
    index: '02',
    name: 'CourseSelection Mobile',
    description: {
      en: 'A mobile app for building and visualizing a weekly course schedule, built with Expo, React Native and TypeScript, with Zustand state management and full Persian RTL support.',
      fa: 'اپلیکیشن موبایل برای ساخت و مشاهده برنامه هفتگی دروس، ساخته‌شده با Expo، React Native و TypeScript، همراه با مدیریت state با Zustand و پشتیبانی کامل از راست‌به‌چپ فارسی.',
    },
    tech: ['Expo', 'React Native', 'TypeScript', 'Zustand'],
    url: 'https://github.com/amirtahanemati/CourseSelection-Mobile',
    accent: 'MOBILE / SCHEDULE',
    image: '/projects/course-selection.jpg',
  },
  {
    index: '03',
    name: 'Digital Cafe Menu',
    description: {
      en: 'A mobile-first digital menu for cafés built with React, TypeScript and Tailwind CSS — cart, category filters, live open/closed status and full Persian RTL support.',
      fa: 'منوی دیجیتال موبایل‌محور برای کافه‌ها با React، TypeScript و Tailwind CSS — سبد خرید، فیلتر دسته‌بندی، وضعیت باز/بسته زنده و پشتیبانی کامل از راست‌به‌چپ فارسی.',
    },
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://github.com/amirtahanemati/menu-cafe-react',
    accent: 'WEB / CAFE',
    image: '/projects/menu-cafe.jpg',
  },
]

export const skillGroups: SkillGroup[] = [
  { label: { en: 'Languages', fa: 'زبان‌ها' }, items: ['Python', 'JavaScript', 'TypeScript', 'C++'] },
  { label: { en: 'Frontend', fa: 'فرانت‌اند' }, items: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'] },
  { label: { en: 'Backend', fa: 'بک‌اند' }, items: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'] },
  { label: { en: 'Mobile', fa: 'موبایل' }, items: ['Flutter', 'Dart', 'React Native', 'JavaScript'] },
  { label: { en: 'DevOps', fa: 'دواپس' }, items: ['Docker', 'Nginx', 'Linux', 'GitHub Actions'] },
]
