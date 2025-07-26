import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Shashank Shankar | SEO Lead & Digital Marketing Expert',
  description: 'Accelerate business growth with precision SEO and PPC - boost organic traffic by 45%, cut marketing costs by 30%, and generate 120+ qualified leads every month',
  keywords: ['SEO', 'Digital Marketing', 'PPC', 'Organic Traffic', 'Lead Generation', 'Marketing Optimization'],
  authors: [{ name: 'Shashank Shankar' }],
  icons: {
    icon: '/seo-logo.png',
    shortcut: '/seo-logo.png',
    apple: '/seo-logo.png',
  },
  openGraph: {
    title: 'Shashank Shankar | SEO Lead & Digital Marketing Expert',
    description: 'Accelerate business growth with precision SEO and PPC - boost organic traffic by 45%, cut marketing costs by 30%, and generate 120+ qualified leads every month',
    type: 'website',
    locale: 'en_US',
    images: ['/seo-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shashank Shankar | SEO Lead & Digital Marketing Expert',
    description: 'Accelerate business growth with precision SEO and PPC - boost organic traffic by 45%, cut marketing costs by 30%, and generate 120+ qualified leads every month',
    images: ['/seo-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image 
                src="/seo-logo.png" 
                alt="Shashank Shankar Profile" 
                width={50} 
                height={50} 
                className="mr-4 rounded-full object-cover"
              />
              <span className="text-lg font-bold text-slate-900">Shashank S</span>
            </div>
          </div>
        </header>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
