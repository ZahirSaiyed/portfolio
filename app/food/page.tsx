import Image from 'next/image'
import cooking from '@/data/cooking.json'

export default function Food() {
  return (
    <>
      {/* Header */}
      <div className="animate animate-1" style={{ marginBottom: '3rem' }}>
        <h1>Food</h1>
        <p className="tagline" style={{ marginTop: '0.75rem' }}>
          I love eating, so I figured I should learn to cook.
        </p>
        <p className="intro">
          Been baking and cooking for friends, family, and coworkers for a while now.
          It brings me a lot of joy. This is some of what I have been making.
        </p>
      </div>

      {/* Photo Grid */}
      <div
        className="animate animate-2 food-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
        }}
      >
        {cooking.map((entry, index) => (
          <figure key={index} style={{ margin: 0 }}>
            {/* Photo */}
            <div style={{
              position: 'relative',
              width: '100%',
              paddingTop: '120%',
              background: 'var(--bg-alt)',
              overflow: 'hidden',
            }}>
              {entry.image && (
                <Image
                  src={entry.image}
                  alt={entry.dish}
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              )}
            </div>

            {/* Caption */}
            <figcaption style={{ marginTop: '0.75rem' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontVariationSettings: "'opsz' 18",
                fontWeight: 400,
                fontSize: '1rem',
                color: 'var(--text)',
                lineHeight: 1.3,
                marginBottom: entry.description ? '0.3rem' : 0,
              }}>
                {entry.dish}
              </div>
              {entry.description && (
                <p style={{
                  margin: 0,
                  fontSize: '0.8125rem',
                  color: 'var(--text-3)',
                  lineHeight: 1.55,
                }}>
                  {entry.description}
                </p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

    </>
  )
}
