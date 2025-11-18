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
