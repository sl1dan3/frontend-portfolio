const navigation = [{ id: 'home', label: 'Home' }]

export default function Header() {
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
              <a className="header__link" href={'#' + id}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
