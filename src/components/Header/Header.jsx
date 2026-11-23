import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const headerRef = useRef(null)
  const [activeId, setActiveId] = useState(navigation[0].id)

  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id))

    const header = headerRef.current

    function updateActiveSection() {
      const viewportHeight = document.documentElement.clientHeight
      const atBottom =
        window.scrollY > 0 &&
        window.scrollY + viewportHeight >=
          document.documentElement.scrollHeight - 1

      if (atBottom) {
        // About and Contact can share the same final scroll position.
        const target = sections.find(
          ({ id }) => '#' + id === window.location.hash,
        )
        const active =
          target &&
          target.getBoundingClientRect().top >= header.offsetHeight - 1
            ? target
            : sections.at(-1)
        setActiveId(active.id)
        return
      }

      const current = sections.findLast(
        (section) => section.getBoundingClientRect().top <= viewportHeight / 3,
      )
      setActiveId(current?.id ?? navigation[0].id)
    }

    // The browser can resolve the initial fragment before React mounts its target.
    if (window.location.hash && window.scrollY === 0) {
      const target = document.getElementById(window.location.hash.slice(1))
      target?.scrollIntoView({ behavior: 'instant' })
    }
    updateActiveSection()
    window.addEventListener('hashchange', updateActiveSection)
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('hashchange', updateActiveSection)
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <header ref={headerRef} className="header">
      <a className="header__skip" href="#main">
        Skip to content
      </a>
      <a
        className="header__brand"
        href="#home"
        aria-label="Arseniy Dementev, back to top"
      >
        <img
          src={import.meta.env.BASE_URL + 'favicon.svg'}
          alt=""
          width="46"
          height="46"
        />
      </a>
      <nav className="header__nav" aria-label="Main navigation">
        <ul className="header__links">
          {navigation.map(({ id, label }) => (
            <li key={id}>
              <a
                className="header__link"
                href={'#' + id}
                aria-current={activeId === id ? 'location' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  )
}
