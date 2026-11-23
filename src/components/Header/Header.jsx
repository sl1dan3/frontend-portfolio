import { useEffect, useState } from 'react'

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
]

export default function Header() {
  const [activeId, setActiveId] = useState(navigation[0].id)

  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id))

    function updateActiveSection() {
      const viewportHeight = document.documentElement.clientHeight
      const atBottom =
        window.scrollY > 0 &&
        window.scrollY + viewportHeight >=
          document.documentElement.scrollHeight - 1
      // The last section may reach the bottom before its heading reaches the reading line.
      const current = atBottom
        ? sections.at(-1)
        : sections.findLast(
            (section) =>
              section.getBoundingClientRect().top <= viewportHeight / 3,
          )
      setActiveId(current?.id ?? navigation[0].id)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <header className="header">
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
      <nav aria-label="Main navigation">
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
    </header>
  )
}
