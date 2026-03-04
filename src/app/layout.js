import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import NavBar from "scr/components/NavBar"

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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
