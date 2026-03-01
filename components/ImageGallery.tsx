'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './ImageGallery.module.css'

interface CookingEntry {
  logNumber: string
  dish: string
  whatChanged: string
  result: string
  image: string
}

interface ImageGalleryProps {
  entries: CookingEntry[]
}

export default function ImageGallery({ entries }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className={styles.gallery}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.galleryItem}>
            <div className={styles.logHeader}>
              <span className="label">Log #{entry.logNumber}</span>
            </div>
            <div className={styles.imageContainer}>
              {entry.image ? (
                <Image
                  src={entry.image}
                  alt={entry.dish}
                  width={400}
                  height={300}
                  className={styles.image}
                  onClick={() => setSelectedImage(entry.image)}
                  unoptimized
                />
              ) : (
                <div className={styles.placeholder}>
                  <span className="meta">No image</span>
                </div>
              )}
            </div>
            <div className={styles.entryInfo}>
              <p className="meta"><strong>{entry.dish}</strong></p>
              <p className="meta">{entry.whatChanged}</p>
              <p className="meta">{entry.result}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>×</button>
            <Image
              src={selectedImage}
              alt="Full size"
              width={800}
              height={600}
              className={styles.modalImage}
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  )
}
