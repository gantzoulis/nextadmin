import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: "--my-font-family" ,
})

export const metadata = {
  title: 'Dojang Next.js Admin Dashboard',
  description: 'DojangNext.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
