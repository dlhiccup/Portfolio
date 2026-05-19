import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Daniel Lim — AI Infrastructure & Full-Stack Engineer',
  description:
    'AI infrastructure & full-stack engineer specializing in distributed systems, Go, and cloud-native platforms.',
  openGraph: {
    title: 'Daniel Lim — AI Infrastructure & Full-Stack Engineer',
    description:
      'Building infrastructure that does not wake anyone up at 3am.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-canvas text-ink font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
