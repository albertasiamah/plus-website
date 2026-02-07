import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plus | All Your Investment Needs in One App",
  description: "Invest in Mutual Funds, Treasury Bills, and US Stocks from Ghana. SEC-regulated. 100,000+ registered users. Download Plus today.",
  keywords: "Plus Investment App, invest Ghana, mutual funds, treasury bills, US stocks, SEC regulated, 10th Capital",
  openGraph: {
    title: "Plus Investment App",
    description: "All your investment needs in one app",
    url: "https://www.plusapp.online",
    siteName: "Plus Investment App",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-montserrat text-gray-800 bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
