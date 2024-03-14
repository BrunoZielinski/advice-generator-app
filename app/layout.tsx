import './globals.css'

import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      url: '/favicon.png',
    },
  ],
  title: 'Advice generator app',
  description: 'Advice generator app',
  keywords: ['advice', 'generator', 'app'],
  authors: [
    {
      name: 'Bruno Zielinski de Medeiros',
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
