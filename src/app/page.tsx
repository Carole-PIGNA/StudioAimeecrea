import Image from "next/image";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import Gallery from "@/components/Gallery";
import CollaborationProcess from "@/components/CollaborationProcess";
import OffersSection from "@/components/OffersSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Studio AiméeCréa – Crée ton univers digital",
  description: "Un site sur-mesure pour entrepreneur.e.s : liberté, performance et identité unique.",
  openGraph: {
    title: "Studio AiméeCréa – Crée ton univers digital",
    description: "Un site sur-mesure pour entrepreneur.e.s : liberté, performance et identité unique.",
    url: "https://studio-aimeecrea.vercel.app/",
    siteName: "Studio AiméeCréa",
    images: [
      {
        url: "https://studio-aimeecrea.vercel.app/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du site Studio AiméeCréa",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio AiméeCréa – Crée ton univers digital",
    description: "Un site sur-mesure pour entrepreneur.e.s : liberté, performance et identité unique.",
    images: ["https://studio-aimeecrea.vercel.app/images/preview.png"],
  },
};


export default function Home() {
  return(
    <>
    <Hero /> 
    <ServicesSection />
    <Benefits />
    <About />
    <TrustSection />
    <Gallery />
    <CollaborationProcess />
    <OffersSection />
    <FinalCTA />
    </>
  )
  }
