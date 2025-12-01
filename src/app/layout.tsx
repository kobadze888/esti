// File: src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"; // 1. ვიმატებთ localFont-ს
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 2. ვტვირთავთ FiraGO-ს
const firaGo = localFont({
  src: [
    {
      path: '../../public/fonts/FiraGO-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-fira-go',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Esti App",
  description: "სილამაზის სერვისების ერთიანი სივრცე",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      {/* 3. ვამატებთ firaGo.variable-ს body კლასებში */}
      <body className={`${inter.variable} ${firaGo.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}