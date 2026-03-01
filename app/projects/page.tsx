import projects from '@/data/projects.json'

export default function Projects() {
  return (
    <>
      {/* Header */}
      <div className="animate animate-1" style={{ marginBottom: '3rem' }}>
        <h1>Projects</h1>
        <p className="tagline" style={{ marginTop: '0.75rem' }}>
          I learn by building.
        </p>
        <p className="intro">
          Side projects and experiments. Some shipped, some ongoing.
          All of them teaching me something I couldn&apos;t learn any other way.
        </p>
      </div>

      {/* Projects */}
      {projects.map((project, index) => (
        <article
          key={index}
          className={`animate animate-${Math.min(index + 2, 7)}`}
          style={{
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          {/* Number + name */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.75rem' }}>
            <span className="num">0{index + 1}</span>
            <h3 style={{
              margin: 0,
              fontVariationSettings: "'opsz' 24",
              fontSize: '1.3rem',
              fontWeight: 500,
            }}>
              {project.name}
            </h3>
          </div>

          <span className="meta" style={{ display: 'block', marginBottom: '0.75rem' }}>{project.role}</span>

          {project.tags && project.tags.length > 0 && (
            <div className="tags" style={{ marginTop: 0, marginBottom: '1.5rem' }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div className="label" style={{ marginBottom: '0.4rem' }}>Problem</div>
              <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text)' }}>
                {project.problem}
              </p>
            </div>
            <div>
              <div className="label" style={{ marginBottom: '0.4rem' }}>What I built</div>
              <p style={{ margin: 0, fontSize: '0.9375rem' }}>{project.attempt}</p>
            </div>
            <div>
              <div className="label" style={{ marginBottom: '0.4rem' }}>What I learned</div>
              <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--text-2)' }}>
                {project.learning}
              </p>
            </div>
          </div>

          {project.link && (
            <div style={{ marginTop: '1.5rem' }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem' }}>
                View project &rarr;
              </a>
            </div>
          )}
        </article>
      ))}
    </>
  )
}
