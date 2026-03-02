import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import GlowingCursorBackground from './components/GlowingCursorBackground';
import InteractiveParticles from './components/InteractiveParticles';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oliver Ng',
  description: "Oliver Ng's personal website and portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlowingCursorBackground />
          <InteractiveParticles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
