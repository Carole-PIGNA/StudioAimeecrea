
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
