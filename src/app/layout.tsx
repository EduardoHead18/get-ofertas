import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavbarComponent } from "./component/header/NavbarComponent";
import { FooterComponent } from "./component/footer/FooterComponent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Get ofertas",
  description: "Website to get discounts in online stores like Amazon, Mercado Libre, Ali express etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-orange-100`}
      >
        <NavbarComponent></NavbarComponent>
        <main className="flex-grow m-10">{children}</main>
        <FooterComponent></FooterComponent>
      </body>
    </html>
  );
}
