import "./globals.css"
import { Work_Sans } from "next/font/google"
import type React from "react" // Import React

const workSans = Work_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "EcoEnergy Solutions",
  description: "Powering a sustainable future with renewable energy solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  )
}

