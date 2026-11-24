import { useRef, useState } from 'react'

const skillGroups = [
  {
    id: 'markup',
    title: 'Markup & Styling',
    skills: ['HTML', 'CSS', 'SCSS', 'PostCSS', 'BEM'],
    mark: '</>',
  },
  {
    id: 'languages',
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript'],
    mark: '{ }',
  },
  {
    id: 'ui',
    title: 'React Ecosystem',
    skills: [
      'React',
      'Redux Toolkit',
      'RTK Query',
      'Axios',
      'React Hook Form',
      'Zod',
    ],
    mark: '< />',
  },
  {
    id: 'version-control',
    title: 'Version Control & Hosting',
    skills: ['Git', 'GitHub', 'GitVerse'],
    mark: 'git',
  },
  {
    id: 'build',
    title: 'Build & Code Quality',
    skills: ['npm', 'Vite', 'ESLint', 'Stylelint', 'Prettier'],
    mark: '>_',
  },
  {
    id: 'design',
    title: 'Design Tools',
    skills: ['Figma'],
    mark: 'Aa',
  },
]

export default function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id)
  const tabs = useRef([])

  function handleTabKey(event, index) {
    const count = skillGroups.length
    const destinations = {
      ArrowLeft: (index - 1 + count) % count,
      ArrowRight: (index + 1) % count,
      Home: 0,
      End: count - 1,
    }

    const next = destinations[event.key]
    if (typeof next !== 'number') return

    event.preventDefault()
    tabs.current[next].focus()
  }

  return (
    <section
      className="skills"
      id="skills"
      aria-labelledby="skills-title"
      tabIndex={-1}
    >
      <h2 className="skills__title" id="skills-title">
        Skills
      </h2>
      <div
        className="skills__tabs"
        role="tablist"
        aria-labelledby="skills-title"
      >
        {skillGroups.map(({ id, title }, index) => (
          <button
            className="skills__tab"
            key={id}
            ref={(element) => {
              tabs.current[index] = element
            }}
            type="button"
            role="tab"
            id={'tab-' + id}
            aria-controls={'panel-' + id}
            aria-selected={activeId === id}
            tabIndex={activeId === id ? 0 : -1}
            onFocus={() => setActiveId(id)}
            onClick={() => setActiveId(id)}
            onKeyDown={(event) => handleTabKey(event, index)}
          >
            {title}
          </button>
        ))}
      </div>
      {skillGroups.map(({ id, title, skills, mark }) => (
        <div
          key={id}
          className="skills__panel"
          role="tabpanel"
          id={'panel-' + id}
          aria-labelledby={'tab-' + id}
          hidden={activeId !== id}
          tabIndex={0}
        >
          <div>
            <h3 className="skills__heading">{title}</h3>
            <ul className="skills__list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <span
            className={`skills__mark skills__mark--${id}`}
            aria-hidden="true"
          >
            {mark}
          </span>
        </div>
      ))}
    </section>
  )
}
