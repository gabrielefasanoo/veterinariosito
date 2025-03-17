import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Centro Veterinario San Francesco - Monza",
  description: "Centro Veterinario San Francesco a Monza. Servizi veterinari specializzati, pronto soccorso 24/7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
