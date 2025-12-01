// File: src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

// Inter ფონტის კონფიგურაცია (ინგლისური/ლათინური ტექსტისთვის)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Noto Sans Georgian ფონტის კონფიგურაცია (ქართული ტექსტისთვის)
const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: "--font-noto-georgian",
  display: "swap",
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
      {/* ფონტების ცვლადები და ბაზისური კლასები */}
      <body className={`${inter.variable} ${notoSansGeorgian.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}