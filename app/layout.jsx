import { Inter , Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets : ['latin'] ,
  display : 'swap' ,
  variable : '--font-montserrat'
})

export const metadata = {
  title: "Zag Eng Family",
  description: " Zagazig Engineering Family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
