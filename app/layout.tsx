import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Script from "next/script";

const META_PIXEL_ID = "1302671018403230";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { CookieBanner } from "@/components/cookieBanner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "sport virtuali",
    "community",
    "pronostici",
    "betting",
    "italia",
    "virtual sports",
    "scommesse",
    "brevetto marcatori",
    "calcio",
    "tipster",
    "analisi statistiche",
    "pronostici calcio",
    "scommesse sportive",
    "community italiana",
  ],
  authors: [{ name: "Virtual Bar News" }],
  creator: "Virtual Bar News",
  publisher: "Virtual Bar News",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: "https://virtualbarnews-client.vercel.app",
    images: [
      {
        url: "https://virtualbarnews-client.vercel.app/images/virtualBarSportLogo-bgremoved.png",
        width: 1200,
        height: 630,
        alt: "Virtual Bar News - Community italiana di pronostici sportivi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      "https://virtualbarnews-client.vercel.app/images/virtualBarSportLogo-bgremoved.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://virtualbarnews-client.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Virtual Bar News",
    url: "https://virtualbarnews-client.vercel.app",
    logo: "https://virtualbarnews-client.vercel.app/images/virtualBarSportLogo-bgremoved.png",
    description: siteConfig.description,
    foundingDate: "2024",
    industry: "Analisi Sportive e Pronostici",
    areaServed: "IT",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IT",
    },
    sameAs: [
      siteConfig.links.telegram,
      siteConfig.links.instagram,
      siteConfig.links.tiktok,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@virtualbarsport.it",
      contactType: "customer service",
      availableLanguage: "Italian",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Virtual Bar News",
    url: "https://virtualbarnews-client.vercel.app",
    description: siteConfig.description,
    inLanguage: "it-IT",
    publisher: {
      "@type": "Organization",
      name: "Virtual Bar News",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brevetto Marcatori - Pronostici Calcio",
    description:
      "Pronostici calcio basati su statistiche ultra-dettagliate e analisi avanzate per campionati minori e marcatori sconosciuti",
    provider: {
      "@type": "Organization",
      name: "Virtual Bar News",
    },
    areaServed: "IT",
    serviceType: "Analisi Sportive",
    audience: {
      "@type": "Audience",
      name: "Appassionati di scommesse sportive italiani",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Accesso gratuito alla community Telegram",
    },
  };

  return (
    <html suppressHydrationWarning lang="it">
      <head>
        {/* Meta Pixel */}
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');` }} />
        <noscript><img height="1" width="1" style={{ display: "none" }} src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} alt="" /></noscript>
        {/* End Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
          type="application/ld+json"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
<Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <CookieBanner />
          </div>
        </Providers>
      </body>
    </html>
  );
}
