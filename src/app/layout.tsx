import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Arthi Portfolio",
  description: "Product Management Portfolio of Arthi Annamalai",
  openGraph: {
    title: "Arthi Annamalai | Product Manager Portfolio",
    description:
      "Product Manager with a strong background in research, workflows, PRDs, RCA, and user-centric problem solving.",
    url: "https://arthideepak.me",
    siteName: "Arthi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 600,
        height: 300,
        alt: "Arthi Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  }

};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
