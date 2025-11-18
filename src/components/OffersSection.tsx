"use client";

import Link from "next/link";

const offers = [
  {
    title: "Site vitrine 1 page",
    price: "300€",
    originalPrice: "890€",
    subtitle: "Offre de lancement",
    features: [
      "Site complet clé en main",
      "Livraison en 7 jours",
      "Compatible mobile",
      "Formulaire de contact",
      "Référencement naturel",
    ],
    color: "var(--background)", // suit le thème
    recommended: false,
  },
  {
    title: "Site vitrine multi-pages",
    price: "450€",
    originalPrice: "1290€",
    subtitle: "Offre recommandée",
    features: [
      "Site complet clé en main",
      "Livraison en 15 jours",
      "Compatible mobile",
      "Formulaire de contact",
      "Blog intégré",
      "Référencement naturel",
    ],
    color: "var(--background)",
    recommended: true,
  },
  {
    title: "Site E-Commerce",
    price: "650€",
    originalPrice: "1690€",
    subtitle: "Offre de lancement",
    features: [
      "Site complet clé en main",
      "Livraison en 30 jours",
      "Compatible mobile",
      "Formulaire de contact",
      "Paiement sécurisé intégré",
      "Référencement naturel",
    ],
    color: "var(--background)",
    recommended: false,
  },
];

export default function OffersSection() {
  return (
    <section
      id="offers"
      className="py-24 px-6 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-[#a87a64] dark:text-[#d4af37] transition-colors duration-300">
          Mes offres sur mesure
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Des formules pensées pour les entrepreneuses qui veulent un site élégant, efficace et aligné avec leur énergie.
        </p>

        {/* Cartes d'offres */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-md transition hover:shadow-lg ${
                offer.recommended ? "border-2 border-[#d4af37]" : ""
              }`}
              style={{ backgroundColor: offer.color }}
            >
              <h3 className="text-xl font-semibold mb-2">
                {offer.title}
              </h3>
              <p className="text-sm font-medium text-[#6b4f3b] mb-4">
                {offer.subtitle}
              </p>
              <div className="mb-6">
                <p className="text-2xl font-bold text-[#3b5f3b]">
                  {offer.price} <span className="text-base font-normal">/ TTC</span>
                </p>
                <p className="text-sm line-through mt-1 opacity-70">
                  {offer.originalPrice} prix du marché
                </p>
              </div>
              <ul className="text-sm space-y-2 mb-6 text-left">
                {offer.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="bg-[#3b5f3b] text-white px-6 py-2 rounded-full hover:bg-[#2f4f2f] transition text-sm font-semibold">
                  Demande de devis
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
