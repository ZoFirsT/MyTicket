import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'MyTicket',
  description: 'RmutpTicket is an innovative event management platform designed specifically for RMUTP community. Offering features like ticket booking, event scheduling, and interactive maps, it serves as a one-stop solution for students and faculty to organize and participate in campus events efficiently.',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  )
}
