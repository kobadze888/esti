import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

/**
 * Font Configuration
 * Loading local fonts with variable weight support for optimal performance.
 */
const firaGo = localFont({
  src: [
    {
      path: '../../public/fonts/FiraGO-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FiraGO-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-fira-go",
  display: "swap",
});

/**
 * SEO & Metadata Configuration
 * Defines global metadata, Open Graph, and robot directives.
 */
export const metadata: Metadata = {
  title: {
    default: "Esti.ge - სილამაზის სერვისების ონლაინ ჯავშანი",
    template: "%s | Esti.ge"
  },
  description: "იპოვე და დაჯავშნე ვიზიტი საუკეთესო სალონებში, ესთეტიკურ ცენტრებსა და სტილისტებთან თბილისში.",
  keywords: ["სალონი", "სილამაზე", "ჯავშანი", "Esti", "თბილისი"],
  openGraph: {
    title: "Esti.ge - Premium Beauty Booking Platform",
    description: "სილამაზის სერვისების ერთიანი სივრცე.",
    url: "https://esti.ge",
    siteName: "Esti.ge",
    locale: "ka_GE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className="scroll-smooth">
      <body className={`${firaGo.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}