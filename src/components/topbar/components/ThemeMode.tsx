'use client'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'auto'

const ThemeMode = () => {
  const [theme, setTheme] = useState<Theme>('auto')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'auto'
    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (currentTheme: Theme) => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')

    if (currentTheme === 'auto') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      html.classList.add(systemTheme)
    } else {
      html.classList.add(currentTheme)
    }
  }

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
    setIsOpen(false)
  }

  return (
    <>
      <div className="hs-dropdown .[--trigger:hover] [--placement:bottom] relative">
        <button id="hs-dropdown-dark-mode" type="button" className="hs-dropdown-toggle hs-dark-mode group flex items-center text-default-600 focus:outline-hidden font-medium" aria-haspopup="menu" aria-expanded={isOpen} aria-label="Dropdown" onClick={() => setIsOpen(!isOpen)}>
          <Sun className="hs-dark-mode-active:hidden size-4.5" />
          <Moon className="hs-dark-mode-active:block hidden size-4.5" />
        </button>
        {isOpen && (
          <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-4 z-10 transition-[margin,opacity] opacity-100 duration-300 mb-2 origin-bottom-left bg-body-bg border border-border shadow-custom rounded-lg p-3 space-y-0.5 w-36 absolute" role="menu">
            <button
              type="button"
              className={`w-full flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-300/25 dark:hover:bg-white/10 focus:outline-hidden text-nowrap ${theme === 'light' ? 'bg-default-300/25 dark:bg-white/10' : ''}`}
              onClick={() => handleThemeChange('light')}
            >
              <div>
                <Sun className="size-4.5" />
              </div>
              Light
            </button>
            <button
              type="button"
              className={`w-full flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-300/25 dark:hover:bg-white/10 focus:outline-hidden ${theme === 'dark' ? 'bg-default-300/25 dark:bg-white/10' : ''}`}
              onClick={() => handleThemeChange('dark')}
            >
              <Moon className="size-4.5" /> Dark
            </button>
            <button
              type="button"
              className={`w-full flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-300/25 dark:hover:bg-white/10 focus:outline-hidden ${theme === 'auto' ? 'bg-default-300/25 dark:bg-white/10' : ''}`}
              onClick={() => handleThemeChange('auto')}
            >
              <Monitor className="size-4.5" /> Auto
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default ThemeMode
