import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import GlowingCursorBackground from './components/GlowingCursorBackground';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Website Title',
  description: 'Website Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlowingCursorBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
