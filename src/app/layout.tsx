import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TzAuth - Nextjs',
  description: 'Skeleton to authenticate Next.js app with TzAuth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
