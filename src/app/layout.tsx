import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {GTM_ID, SEO} from "@/app.conf";
import {GoogleTagManager} from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hương Xuân Quán',
  description: SEO.description,
  keywords: SEO.keywords
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLD = {}
  return (
    <html lang="vi">
    <head>
      <meta name="google-site-verification" content="64pjk_ap59G8eIxiFX0y1TIKRbC00HPHDkKGSIoUIds" />
      
      <script
        key="math99th-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD)}}
      />
    
    </head>
    <body className={inter.className}>{children}</body>
    {GTM_ID && <GoogleTagManager gtmId={`${GTM_ID}`}/>}
    </html>
  )
}
