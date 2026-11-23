// Each contour is one cross-section of the decorative wireframe.
const contours = Array.from({ length: 36 }, (_, index) => index)

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <h1 className="hero__name" id="hero-title">
          Arseniy Dementev
        </h1>
        <p className="hero__role">Frontend Engineer</p>
        <p className="hero__description">
          I build interfaces with React and TypeScript and follow how AI is
          changing frontend development.
        </p>
        <a className="hero__contact" href="mailto:sl1dan3frontend@gmail.com">
          Email me <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="hero__art" aria-hidden="true">
        <div className="hero__sculpture">
          {contours.map((index) => (
            <span
              key={index}
              className="hero__contour"
              style={{ '--step': index }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
