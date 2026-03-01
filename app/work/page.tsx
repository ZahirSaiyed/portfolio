import work from '@/data/work.json'

export default function Work() {
  return (
    <>
      {/* Header */}
      <div className="animate animate-1" style={{ marginBottom: '3rem' }}>
        <h1>Work</h1>
        <p className="tagline" style={{ marginTop: '0.75rem' }}>
          How I think about product.
        </p>
        <p className="intro">
          I lead product for enterprise platforms at Capital One, large-scale systems
          with high operational risk and thousands of users. These are the decisions that shaped
          how I work.
        </p>
      </div>

      {/* Case Studies */}
      {work.map((item, index) => (
        <article
          key={index}
          className={`animate animate-${Math.min(index + 2, 7)}`}
          style={{
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          {/* Title row */}
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '0.35rem',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <span className="num">0{index + 1}</span>
              <h3 style={{
                margin: 0,
                fontVariationSettings: "'opsz' 24",
                fontSize: '1.05rem',
                fontWeight: 500,
                letterSpacing: '-0.01em',
              }}>
                {item.title}
              </h3>
            </div>
            <span className="meta">{item.period}</span>
          </div>

          {/* Context */}
          <p style={{ marginBottom: '1.5rem', marginTop: '0.75rem' }}>{item.context}</p>

          {/* Owned */}
          <div className="row" style={{ marginBottom: '1rem' }}>
            <span className="row-label">Owned</span>
            <span className="row-value">{item.whatIOwned}</span>
          </div>

          {/* Decisions */}
          <div className="row" style={{ marginBottom: '1rem', alignItems: 'flex-start' }}>
            <span className="row-label" style={{ paddingTop: '0.15rem' }}>Decisions</span>
            <div>
              {item.decisionsThatMattered.map((d, i) => (
                <div key={i} className="row-value" style={{ marginBottom: '0.25rem' }}>
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="row">
            <span className="row-label">Outcome</span>
            <span className="row-value" style={{ fontWeight: 500, color: 'var(--text)' }}>
              {item.outcome}
            </span>
          </div>

          {/* Learned */}
          <div style={{
            marginTop: '1.25rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            alignItems: 'center',
          }}>
            <span className="label" style={{ marginRight: '0.25rem' }}>Learned</span>
            {item.whatILearned.map((l, i) => (
              <span key={i} className="tag">{l}</span>
            ))}
          </div>
        </article>
      ))}

      {/* Footer note */}
      <p className="meta animate animate-5" style={{ marginTop: '2rem' }}>
        These are intentionally brief. Happy to go deep on any of them.{' '}
        <a href="mailto:zahirsaiyed72@gmail.com">Get in touch</a>.
      </p>
    </>
  )
}
