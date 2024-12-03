import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beneficial Ownership Registration | South African Compliance Services',
  description: 'Expert services for registering and managing beneficial ownership information in South Africa. Ensure compliance with CIPC regulations efficiently.',
  keywords: 'beneficial ownership, CIPC compliance, company registration, South Africa, ownership information',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.beneficialownershipregistration.co.za',
    title: 'Beneficial Ownership Registration | South African Compliance Services',
    description: 'Expert services for registering and managing beneficial ownership information in South Africa. Ensure compliance with CIPC regulations efficiently.',
    siteName: 'Beneficial Ownership Registration',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficial Ownership Registration | South African Compliance Services',
    description: 'Expert services for registering and managing beneficial ownership information in South Africa. Ensure compliance with CIPC regulations efficiently.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

