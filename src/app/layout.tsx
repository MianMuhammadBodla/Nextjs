import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-700 px-5 py-5 flex gap-5">
        <div>Home</div>
        <div>Dashboard</div>
        <div>setting</div>
        <div>blog</div>
        <div>contectus</div>
        </header>
        {children}
        <footer ></footer>
        </body> 
    </html>
  )
}
