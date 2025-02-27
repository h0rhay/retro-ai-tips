import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press-start-2p",
})

export const metadata: Metadata = {
  title: "Retro Quest - 8-bit Adventure",
  description: "Embark on a nostalgic 8-bit adventure with Retro Quest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={pressStart2P.variable}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'