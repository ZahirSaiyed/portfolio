import styles from './SoundCloudPlayer.module.css'

interface SoundCloudPlayerProps {
  name: string
  mood: string
  tools: string
  intent: string
  soundcloudUrl: string
}

export default function SoundCloudPlayer({
  name,
  mood,
  tools,
  intent,
  soundcloudUrl,
}: SoundCloudPlayerProps) {
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(soundcloudUrl)}&color=%23C4601A&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`

  return (
    <div className={styles.trackInfo}>
      <h3 style={{ marginBottom: '0.5rem' }}>{name}</h3>
      <p className="meta" style={{ marginBottom: '0.25rem' }}>{mood}</p>
      <p className="meta" style={{ marginBottom: '0.5rem' }}>{intent}</p>
      <p className="meta" style={{ marginBottom: '1rem' }}>Made with: {tools}</p>
      <div className={styles.player}>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embedUrl}
        />
      </div>
    </div>
  )
}
