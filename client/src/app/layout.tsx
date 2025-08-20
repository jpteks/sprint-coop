import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const fontMonsMedium = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  weight: "500",
  style: "normal",
  variable: "--font-geist-sans",
  display: "swap",
});





export const metadata: Metadata = {
  title: "SOLIF-COOP-BOD | Empowering Farmers, Enriching Communities",
  description: "SOLIF-COOP-BOD transforms agricultural communities through cassava processing,livesock farming, farmer training, and cooperative credit services. Join us to build sustainable farming futures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontMonsMedium.variable} overflow-y-auto antialiased overflow-x-hidden`}
      >
        
        <Navbar/>
        {children}
        <Footer/>
       
      </body>
    </html>
  );
}
