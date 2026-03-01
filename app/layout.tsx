import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zahir Saiyed',
  description: 'PM at Capital One. Building Crisp, making music, cooking obsessively. Based in the US.',
  openGraph: {
    title: 'Zahir Saiyed',
    description: 'PM at Capital One. Builder. Music. Food.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Syne:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <footer>
          <span className="footer-left">Zahir Saiyed &copy; 2026</span>
          <div className="footer-links">
            <a href="https://linkedin.com/in/zahirsaiyed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/ZaLifeLessons" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
