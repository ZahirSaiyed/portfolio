import Link from 'next/link'
import Image from 'next/image'

const worlds = [
  {
    num: '01',
    label: 'lead @',
    title: 'Work',
    href: '/work',
    desc: 'Manager, PM at Capital One. Enterprise platform modernization at scale, 1,000+ agents.',
  },
  {
    num: '02',
    label: 'build',
    title: 'Projects',
    href: '/projects',
    desc: '7 projects across AI, iOS, and browser art. Full-stack and native, solo and in teams.',
  },
  {
    num: '03',
    label: 'make',
    title: 'Music',
    href: '/music',
    desc: 'Electronic music in Ableton, just for the love of it. Vibes and late nights.',
  },
  {
    num: '04',
    label: 'cook',
    title: 'Food',
    href: '/food',
    desc: 'Birria tacos, Thanksgiving spreads, strawberry cream puffs. Cooking for the people around me.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="animate animate-1 hero-identity" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
          <Image
            src="/zahir.jpg"
            alt="Zahir at the Golden Gate Bridge"
            width={900}
            height={900}
            priority
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '6px',
              flexShrink: 0,
            }}
          />
          <div>
            <h1 style={{ marginBottom: '0.35rem' }}>Zahir Saiyed</h1>
            <p className="tagline" style={{ marginBottom: 0 }}>
              Here to build cool things and meet cool people.
            </p>
          </div>
        </div>
        <p className="intro animate animate-2">
          Hey! I am a PM at Capital One leading enterprise platform modernization
          for 1,000+ agents. Outside of work, I ship products, make music, and love to cook.
          Graduated from CMU in 2023 with majors in Information Systems and Statistics.
        </p>
        <p className="intro animate animate-3">
          All my creations live here. The serious and the playful, the shipped and the still in progress.{' '}
          <br />Glad you stopped by!
        </p>
      </section>

      {/* Three Worlds */}
      <section className="animate animate-4">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          <span className="label">What I do</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {worlds.map((w) => (
            <Link
              key={w.href}
              href={w.href}
              style={{ textDecoration: 'none' }}
            >
              <div className="world-row world-grid" style={{
                display: 'grid',
                gridTemplateColumns: '28px 110px 1fr',
                gap: '1rem',
                padding: '1.25rem 0',
                borderBottom: '1px solid var(--border)',
                alignItems: 'start',
              }}>
                <span className="num" style={{ paddingTop: '0.15rem' }}>{w.num}</span>
                <div>
                  <div className="label" style={{ marginBottom: '0.25rem' }}>{w.label}</div>
                  <div className="world-title" style={{
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 24",
                    fontSize: '1.0625rem',
                    fontWeight: 400,
                    color: 'var(--text)',
                    lineHeight: 1.3,
                    transition: 'color 0.2s',
                  }}>{w.title} &rarr;</div>
                </div>
                <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section className="animate animate-5" style={{ marginTop: '3.5rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          <span className="label">Get in touch</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>
        <p className="intro" style={{ marginBottom: '1.25rem' }}>
          Open to new opportunities and good conversations.
          Find me on{' '}
          <a href="https://x.com/ZaLifeLessons" target="_blank" rel="noopener noreferrer">X</a>
          {' '}or{' '}
          <a href="https://linkedin.com/in/zahirsaiyed" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </section>
    </>
  )
}
