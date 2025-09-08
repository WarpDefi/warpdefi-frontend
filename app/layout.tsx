import "./globals.css";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Warp DeFi – Multichain DEX & Avalanche DAO",
  description:
    "Warp DeFi: Swap, provide liquidity & earn across AVAX, Hedera, Flare & SGB. A leading multichain DEX and the largest DAO on Avalanche.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        {/* og image */}
        <meta property="og:image" content="/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Warp DeFi: Swap, provide liquidity & earn across AVAX, Hedera, Flare & SGB. A leading multichain DEX and the largest DAO on Avalanche."
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  );
}
