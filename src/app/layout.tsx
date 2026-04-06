import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taj Misr Developments | شركة تاج مصر للتنمية العقارية",
  description:
    "Discover premium real estate developments by Taj Misr across Egypt. Luxury residential compounds, commercial hubs, and coastal retreats in the New Capital, New Cairo, and North Coast.",
  keywords:
    "Taj Misr, تاج مصر, real estate, Egypt, De Joya, Ezdan, New Capital, New Cairo, luxury living",
  openGraph: {
    title: "Taj Misr Developments | Premium Real Estate in Egypt",
    description:
      "Crafting exceptional living experiences across Egypt's most prestigious destinations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
