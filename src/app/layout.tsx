import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Hudozhka — детская художественная школа в Барселоне",
    template: "%s | Hudozhka",
  },
  description: "Художественная школа для детей в Барселоне. Рисунок, живопись, лепка для детей от 4 до 14 лет. Творческое развитие в дружеской атмосфере.",
  keywords: ["детская художественная школа", " Барселона", " рисование для детей", " лепка", " творчество", " искусство для детей", " художественная школа Испания"],
  authors: [{ name: "Hudozhka" }],
  creator: "Hudozhka",
  publisher: "Hudozhka",
  metadataBase: new URL("https://hudozhka.com"),
  alternates: {
    canonical: "https://hudozhka.com/",
    languages: {
      "ru": "https://hudozhka.com/",
      "es": "https://hudozhka.com/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://hudozhka.com",
    siteName: "Hudozhka",
    title: "Hudozhka — детская художественная школа в Барселоне",
    description: "Художественная школа для детей в Барселоне. Рисунок, живопись, лепка для детей от 4 до 14 лет.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hudozhka — детская художественная школа в Барселоне",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hudozhka — детская художественная школа в Барселоне",
    description: "Художественная школа для детей в Барселоне. Рисунок, живопись, лепка для детей от 4 до 14 лет.",
    images: ["/og-image.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://hudozhka.com/#organization",
              name: "Hudozhka",
              description: "Детская художественная школа в Барселоне. Рисунок, живопись, лепка для детей от 4 до 14 лет.",
              url: "https://hudozhka.com",
              telephone: "+34987654321",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C/ de la Escuela, 123",
                addressLocality: "Barcelona",
                postalCode: "08001",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.3851,
                longitude: 2.1734,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "10:00",
                  closes: "14:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "10:00",
                  closes: "14:00",
                },
              ],
              priceRange: "€€",
              image: "/og-image.jpg",
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
