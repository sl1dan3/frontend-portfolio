import { useEffect, useRef, useState } from 'react'

export default function HeaderNavigation({ items, activeId }) {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!open) return

    function dismissOutside(event) {
      if (!navRef.current.contains(event.target)) setOpen(false)
    }

    function dismissOnDesktop() {
      if (!buttonRef.current.getClientRects().length) setOpen(false)
    }

    document.addEventListener('pointerdown', dismissOutside)
    window.addEventListener('resize', dismissOnDesktop)
    return () => {
      document.removeEventListener('pointerdown', dismissOutside)
      window.removeEventListener('resize', dismissOnDesktop)
    }
  }, [open])

  return (
    <nav
      className="header__nav"
      aria-label="Main navigation"
      ref={navRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
      onKeyDown={(event) => {
        if (open && event.key === 'Escape') {
          setOpen(false)
          buttonRef.current.focus()
        }
      }}
    >
      <button
        className="header__menu-button"
        ref={buttonRef}
        type="button"
        aria-label="Navigation menu"
        aria-expanded={open}
        aria-controls="header-links"
        onClick={() => setOpen(!open)}
      >
        <span className="header__menu-icon" aria-hidden="true" />
      </button>
      <ul
        id="header-links"
        className={'header__links' + (open ? ' header__links--open' : '')}
      >
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              className="header__link"
              href={'#' + id}
              aria-current={activeId === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
