const contacts = [
  {
    id: 'email',
    label: 'Email',
    text: 'sl1dan3frontend@gmail.com',
    href: 'mailto:sl1dan3frontend@gmail.com',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    text: '@sl1dan3',
    href: 'https://t.me/sl1dan3',
    external: true,
  },
]

export default function Footer() {
  return (
    <footer
      className="footer"
      id="contact"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <h2 className="footer__title" id="contact-title">
        Contact
      </h2>
      <address className="footer__contacts">
        {contacts.map(({ id, label, text, href, external }) => (
          <a
            className="footer__link"
            key={id}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
          >
            <span className="footer__label">{label}</span>
            <span>{text}</span>
          </a>
        ))}
      </address>
    </footer>
  )
}
