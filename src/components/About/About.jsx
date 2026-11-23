import { useEffect, useRef, useState } from 'react'

export default function About() {
  const graph = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    })
    observer.observe(graph.current)
    return () => observer.disconnect()
  }, [])
  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <div className="about__intro">
        <h2 className="about__title" id="about-title">
          About me
        </h2>
        <svg
          ref={graph}
          className={'about__graph' + (visible ? ' about__graph--visible' : '')}
          viewBox="12.75 0 274.5 116"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path className="about__trunk" d="M14 83H286" />
          <path
            className="about__branch"
            pathLength="1"
            d="M62 83C90 83 78 29 112 29H180C218 29 206 83 242 83"
          />
          <g className="about__commits">
            <circle cx="22" cy="83" r="5" />
            <circle cx="62" cy="83" r="6" />
            <circle cx="117" cy="29" r="6" />
            <circle cx="178" cy="29" r="6" />
            <circle cx="151" cy="83" r="5" />
            <circle cx="242" cy="83" r="6" />
            <circle cx="280" cy="83" r="5" />
          </g>
        </svg>
      </div>
      <div className="about__copy">
        <p className="about__lead">
          I’m a frontend engineer and a fourth-year student at Kazan State Power
          Engineering University.
        </p>
        <p>
          I study in the Department of Digital Systems and Models. Right now,
          I’m focused on growing as a frontend engineer. I follow developments
          in AI closely and I’m curious about how they change the way we build
          software.
        </p>
        <p>
          Over time, I’d like to move into full-stack development and work on
          the systems behind the interfaces I build.
        </p>
      </div>
    </section>
  )
}
