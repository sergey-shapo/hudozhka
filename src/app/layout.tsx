import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Детская художественная школа в Барселоне | Hudozhka",
    template: "%s | Hudozhka",
  },
  description:
    "🎨 Детская художественная школа в Барселоне для детей 4-14 лет. Рисунок, живопись, лепка с русскоязычными педагогами. Пробный урок бесплатно!",
  keywords: [
    "детская художественная школа барселона",
    "уроки рисования для детей барселона",
    "русская школа искусства испания",
    "творческие кружки барселона",
  ],
  authors: [{ name: "Hudozhka" }],
  creator: "Hudozhka",
  publisher: "Hudozhka",
  metadataBase: new URL("https://hudozhka.es"),
  alternates: {
    canonical: "https://hudozhka.es/",
    languages: {
      ru: "https://hudozhka.es/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://hudozhka.es",
    siteName: "Hudozhka",
    title: "Детская художественная школа в Барселоне | Hudozhka",
    description:
      "🎨 Детская художественная школа в Барселоне для детей 4-14 лет. Рисунок, живопись, лепка с русскоязычными педагогами. Пробный урок бесплатно!",
    images: [
      {
        url: "/images/hero-art.webp",
        width: 1200,
        height: 630,
        alt: "Детская художественная школа в Барселоне | Hudozhka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Детская художественная школа в Барселоне | Hudozhka",
    description:
      "🎨 Детская художественная школа в Барселоне для детей 4-14 лет. Рисунок, живопись, лепка с русскоязычными педагогами. Пробный урок бесплатно!",
    images: ["/images/hero-art.webp"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["EducationalOrganization", "LocalBusiness"],
              "@id": "https://hudozhka.com/#organization",
              name: "Hudozhka",
              description:
                "Детская художественная школа в Барселоне. Рисунок, живопись, лепка для детей от 4 до 17 лет.",
              url: "https://hudozhka.com",
              telephone: "652 485 194",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Carrer de Numancia 111–115",
                addressLocality: "Barcelona",
                postalCode: "08029",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.3864,
                longitude: 2.1356,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                },
              ],
              image: "/images/hero-art.webp",
              sameAs: [
                "https://instagram.com/hudozhka",
                "https://facebook.com/hudozhka",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
