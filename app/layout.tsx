import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ishtiak Mahmood | Full-Stack Developer',
  description: 'Portfolio of Ishtiak Mahmood - Full-Stack Developer specializing in React, Next.js, Flutter, and modern web technologies',
  keywords: ['Ishtiak Mahmood', 'Full-Stack Developer', 'React', 'Next.js', 'Flutter', 'Web Developer'],
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
