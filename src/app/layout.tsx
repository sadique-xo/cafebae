import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Cafe BAE | Good Food. Good Coffee. Good Vibes. | Ranchi",
  description:
    "Cafe BAE is Ranchi's go-to for good food, great coffee, and even better vibes. Cafe BAE, YELLOW by Cafe BAE, Yaarana Rooftop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-[#0C0A08] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
