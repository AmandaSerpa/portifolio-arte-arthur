import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//fontes acima ^

export const metadata = {
  title: "Projeto Portifolio",
  description: "Site desenvolvido por Amanda",
};

export default function LayoutSite({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className="min-h-screen flex flex-col" //determina que a altura minima é igual a altura da tela
        //className={`${geistSans.variable} ${geistMono.variable} antialiased` }
      >
        <NavBar/>

        <main className="flex-1">
          {children}
        </main>        

        <Footer/>
      </body>
    </html>
  );
}
