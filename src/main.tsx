import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider } from './context/RouterContext'
import { LanguageProvider } from './i18n'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </RouterProvider>
  </StrictMode>,
)
