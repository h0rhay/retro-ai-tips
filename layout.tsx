import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Retro Quest - 8-bit Adventure",
  description: "Embark on a nostalgic 8-bit adventure with Retro Quest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

