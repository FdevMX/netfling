import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Netflix Mexico - Ver series en línea, ver películas en línea",
  description:
    "Disfruta de películas y series en línea o transmite directamente a tu smart TV, consola de juegos, PC, Mac, dispositivo móvil, tablet y más.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="bg-black text-white" suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}

