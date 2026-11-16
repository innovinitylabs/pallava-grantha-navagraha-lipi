import type { Metadata } from "next";
import { Anek_Tamil, Cormorant_Garamond, Source_Serif_4 } from "next/font/google";
import { BRAND } from "@/lib/brand";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const anekTamil = Anek_Tamil({
  variable: "--font-anek-tamil",
  subsets: ["tamil"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const siteDescription =
  "An open-source Indian astronomical glyph initiative developing original, historically grounded planetary symbols informed by Tamil-region epigraphical traditions.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BRAND.deploymentDomain}`),
  title: {
    default: `${BRAND.name} — ${BRAND.nameTamil}`,
    template: `%s — ${BRAND.name}`,
  },
  description: siteDescription,
  applicationName: BRAND.name,
  creator: BRAND.author,
  publisher: BRAND.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BRAND.name} — ${BRAND.nameTamil}`,
    description: siteDescription,
    url: "/",
    siteName: BRAND.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.name,
    description: siteDescription,
  },
  icons: {
    icon: BRAND.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sourceSerif.variable} ${anekTamil.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
