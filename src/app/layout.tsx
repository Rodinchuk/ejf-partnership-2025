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
  title: "ІЯК 2025 Партнерство",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
     <html lang="en">
    <head>
      {/* <meta name="robots" content="noindex, nofollow" /> */}
      <meta name="google-site-verification" content="9vHRFlk5Pc5WUFMwJpTDDZ1rkVn-YTEaGezKjFSYmMs" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
