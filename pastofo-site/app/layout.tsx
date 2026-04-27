import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pastofo — Têxteis de Excelência desde 1972",
  description:
    "Mais de 50 anos a fabricar têxteis lar, feltros industriais e materiais para estofos de alta qualidade. Trofa, Porto, Portugal.",
  keywords:
    "pastofo, têxteis lar, feltros industriais, pasta estofos, almofadas, protetores colchão, trofa, porto",
  openGraph: {
    title: "Pastofo — Têxteis de Excelência desde 1972",
    description:
      "Mais de 50 anos a fabricar têxteis lar, feltros industriais e materiais para estofos.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
