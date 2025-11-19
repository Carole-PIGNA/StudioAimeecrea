
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"], // ou ["700", "800"] si tu veux plus de variantes
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = {
  title: "Studio Aimée Créa",
  description: "Création de sites élégants et immersifs",
  icons: {
    icon: "/images/favicon_StudioAimeeCrea_64.png",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${inter.variable} font-sans flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

