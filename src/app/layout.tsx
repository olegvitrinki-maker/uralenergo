import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  style: ["italic"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "УРАЛЭНЕРГО — Трансформаторы и КТП до 110 кВ",
  description: "ООО «Урал Энерго» — завод-изготовитель трансформаторов и комплектных подстанций. Серийные и индивидуальные решения по ГОСТ и ТУ. Екатеринбург.",
  keywords: ["трансформаторы", "КТП", "подстанции", "УралЭнерго", "электрооборудование", "Екатеринбург"],
  authors: [{ name: "ООО УралЭнерго" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "УРАЛЭНЕРГО — Трансформаторы и КТП",
    description: "Завод-изготовитель. Оборудование для сетей до 110 кВ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} antialiased font-sans`}
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
