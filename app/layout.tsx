import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Forge AI - Ship Apps With a Prompt',
  description: 'AI-Powered Infrastructure Automation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-500 text-center py-2 text-xs font-medium">
          ⚠️ PROTOTYPE DEMO - UI/UX Vision Only. Backend development begins post-funding.
        </div>
        {children}
      </body>
    </html>
  )
}