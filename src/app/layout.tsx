import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FunHaus Decor — Maximalist Home Decor",
    template: "%s | FunHaus Decor",
  },
  description:
    "Maximalist home decor, striped ceilings, and bold color for the homeowner who refuses to be beige.",
  metadataBase: new URL("https://funhaus-decor.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "FunHaus Decor",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable} h-full antialiased`}>
      <head>
        <meta name="p:domain_verify" content="PENDING-VERIFICATION-CODE" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
