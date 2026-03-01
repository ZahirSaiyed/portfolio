import music from '@/data/music.json'

export default function Music() {
  return (
    <>
      {/* Header */}
      <div className="animate animate-1" style={{ marginBottom: '3rem' }}>
        <h1>Music</h1>
        <p className="tagline" style={{ marginTop: '0.75rem' }}>
          Just because I love it.
        </p>
        <p className="intro">
          I make electronic music as a way to think differently. The opposite
          of my day job. Just vibes and the joy of making something that
          didn&apos;t exist before. Mostly in Ableton. Mostly late at night.
        </p>
      </div>

      {/* Tracks */}
      {music.map((track, index) => (
        <article
          key={index}
          className={`animate animate-${Math.min(index + 2, 7)}`}
          style={{
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.25rem' }}>
            <span className="num">0{index + 1}</span>
            <h3 style={{
              margin: 0,
              fontVariationSettings: "'opsz' 24",
              fontSize: '1.3rem',
              fontWeight: 500,
            }}>
              {track.name}
            </h3>
          </div>

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="0"
            allow="autoplay"
            src={track.embedUrl}
            style={{
              display: 'block',
              borderRadius: '4px',
              border: '1px solid var(--border)',
            }}
          />
        </article>
      ))}

      <p className="meta animate animate-5" style={{ marginTop: '2.5rem' }}>
        <a href="https://soundcloud.com/user-521489292" target="_blank" rel="noopener noreferrer">More on SoundCloud</a>
      </p>
    </>
  )
}
