import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_DOMAIN_NAME, GTM_ID, SEO, SOCIAL_LINKS } from "@/app.conf";
import { GoogleTagManager } from "@next/third-parties/google";
import { Organization, WithContext } from "schema-dts";
import AntdRegistry from "@/AntdRegistry";
// import { AntdRegistry } from "@ant-design/nextjs-registry";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Hương Xuân Quán",
    default: "Hương Xuân Quán"
  },
  description: SEO.description,
  keywords: SEO.keywords,
  metadataBase: new URL(`${APP_DOMAIN_NAME}`),
  openGraph: {
    siteName: SEO.name,
    url: APP_DOMAIN_NAME,
    images: [
      {
        url: `${APP_DOMAIN_NAME}/HuongXuanBangHieu.jpg`,
        width: 1024,
        height: 1024,
        alt: "Hương Xuân quán - Cà phê võng - Bình Dân - Miễn Phí Trà Đá"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    images: [`${APP_DOMAIN_NAME}/HuongXuanBangHieu.jpg`]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  viewportFit: "cover",
  userScalable: true,
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLD: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${APP_DOMAIN_NAME}/#identity`,
    founder: SEO.founder,
    name: SEO.name,
    alternateName: `${SEO.name} - ${SEO.description}`,
    url: APP_DOMAIN_NAME,
    sameAs: [SOCIAL_LINKS.FACEBOOK, SOCIAL_LINKS.INSTAGRAM],
    description: `${SEO.description} | ${SEO.name}`,
    email: "phongnguyen.itengineer@gmail.com"
  };
  return (
    <html lang="vi">
      <head>
        <meta name="google-site-verification" content="64pjk_ap59G8eIxiFX0y1TIKRbC00HPHDkKGSIoUIds" />

        <script
          key="math99th-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
      {GTM_ID && <GoogleTagManager gtmId={`${GTM_ID}`} />}
      <Script
        id={"firework-script"}
        strategy={"afterInteractive"}
        dangerouslySetInnerHTML={{
          __html: ""
        }}
      />
    </html>
  );
}
