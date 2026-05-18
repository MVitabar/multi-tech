import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Multi-Tech · Assistência Técnica em Siderópolis",
  description: "Assistência técnica especializada em celulares e computadores em Siderópolis · SC. Consertos, acessórios e celulares seminovos com atendimento de excelência.",
  openGraph: {
    title: "Multi-Tech · Assistência Técnica em Siderópolis",
    description: "Consertos, acessórios e celulares seminovos com atendimento de excelência no coração de Siderópolis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
