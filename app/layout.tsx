import type { Metadata } from 'next'
import { JetBrains_Mono as jetBrainsMono } from 'next/font/google'
import './globals.css'

// Components
import { Header } from '@/components/Header'
import { PageTransition } from '@/components/PageTransition'

const jetbrainsMono = jetBrainsMono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
})

export const metadata: Metadata = {
  title: 'D. Portfolio',
  description: 'Apresentação dos meu projetos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
