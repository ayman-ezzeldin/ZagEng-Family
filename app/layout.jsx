import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

export const metadata = {
  title: "Zag Eng Family",
  description: " Zagazig Engineering Family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
