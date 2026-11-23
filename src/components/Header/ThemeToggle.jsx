import { useEffect, useLayoutEffect, useState } from 'react'

const storageKey = 'portfolio-theme'
const darkScheme = window.matchMedia('(prefers-color-scheme: dark)')

function readPreference() {
  try {
    const value = localStorage.getItem(storageKey)
    return value === 'dark' || value === 'light' ? value : null
  } catch {
    return null
  }
}

export default function ThemeToggle() {
  const [preference, setPreference] = useState(readPreference)
  const [systemDark, setSystemDark] = useState(() => darkScheme.matches)
  const dark = preference ? preference === 'dark' : systemDark

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  useEffect(() => {
    const update = (event) => setSystemDark(event.matches)
    darkScheme.addEventListener('change', update)
    return () => darkScheme.removeEventListener('change', update)
  }, [])

  function toggleTheme() {
    const next = dark ? 'light' : 'dark'
    setPreference(next)
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      // The selection still applies to this visit when storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      className="header__theme"
      aria-label="Dark theme"
      aria-pressed={dark}
      onClick={toggleTheme}
      title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
    </button>
  )
}
