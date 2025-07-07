import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Callan George - Freelance Software Engineer | Custom Web Solutions',
  description: 'Freelance software engineer specializing in custom web applications, e-commerce platforms, and business automation. Helping businesses grow with proven results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Thunder:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  )
} 