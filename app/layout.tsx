import './globals.css'
import Navigation from '@/components/Navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Reenie+Beanie&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-detective-black text-detective-ink font-mono min-h-screen">
        {/* Grainy Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        <div className="p-4 md:p-8">
          <Navigation />
          <main className="mt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}