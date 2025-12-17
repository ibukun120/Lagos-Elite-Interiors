import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "./component/Header";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lagos Elite Interiors - Luxury Interior Contracting in Lagos",
  description:
    "Professional interior design and contracting services for luxury homes, estates, offices, and churches in Lekki, Ikeja, and Ikorodu.",
  keywords:
    "interior design Lagos, interior contracting Lekki, luxury home interiors Ikeja, office renovation Lagos, church interiors Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
