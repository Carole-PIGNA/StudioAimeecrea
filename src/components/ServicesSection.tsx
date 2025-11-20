"use client";

import { FaLaptopCode, FaSearch, FaPalette, FaPenNib } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Site web sur-mesure",
    text: "Un site élégant, fluide et pensé pour convertir. Adapté à ton univers et à tes clients.",
    bg: "var(--card-bg-1)",
    accent: "var(--card-accent-1)",
  },
  {
    icon: <FaSearch />,
    title: "Référencement naturel (SEO)",
    text: "Je structure ton contenu pour qu’il soit bien référencé sur Google et attire les bonnes personnes.",
    bg: "var(--card-bg-2)",
    accent: "var(--card-accent-2)",
  },
  {
    icon: <FaPalette />,
    title: "Identité visuelle",
    text: "Palette, typographie, ambiance… Je crée une esthétique cohérente qui te ressemble.",
    bg: "var(--card-bg-1)",
    accent: "var(--card-accent-1)",
  },
  {
    icon: <FaPenNib />,
    title: "Stratégie de contenu",
    text: "Je t’aide à raconter ton histoire avec clarté et émotion, pour créer du lien et de la confiance.",
    bg: "var(--card-bg-2)",
    accent: "var(--card-accent-2)",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative mt-12 md:-mt-20 lg:-mt-34 z-20 px-6"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl shadow-xl p-6 hover:shadow-2xl transition"
            style={{ backgroundColor: service.bg, color: "var(--card-text)" }}
          >
            <div className="text-3xl mb-4" style={{ color: service.accent }}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
