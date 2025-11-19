"use client";

import Link from "next/link";

const offers = [
  {
    title: "Site vitrine 1 page",
    price: "490€",
    originalPrice: "890€",
    entrepreneurePrice: "350€",
    subtitle: "Offre de lancement",
    features: [
      "Site complet clé en main",
      "Livraison en 7 jours",
      "Compatible mobile",
      "Formulaire de contact",
      "Référencement naturel",
    ],
    recommended: false,
  },
  {
    title: "Site vitrine multi-pages",
    price: "650€",
    originalPrice: "1290€",
    entrepreneurePrice: "510€",
    subtitle: "Offre de lancement",
    features: [
      "Site complet clé en main",
      "Livraison en 15 jours",
      "Compatible mobile",
      "Formulaire de contact",
      "Blog intégré",
      "Référencement naturel",
    ],
    recommended: true,
  },
  {
    title: "Site E-Commerce",
    price: "950€",
    originalPrice: "1690€",
    entrepreneurePrice: "650€",
    subtitle: "Offre de lancement",
    features: [
      "Site complet clé en main",
      "Livraison en 30 jours",
      "Compatible mobile",
      "Formulaire de contact",
      "Paiement sécurisé intégré",
      "Référencement naturel",
    ],
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
        <h2 className="text-3xl md:text-4xl font-serif text-[#a87a64] dark:text-[#d4af37]">
          Mes offres sur mesure
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Des formules pensées pour les entrepreneuses qui veulent un site élégant, efficace et aligné avec leur énergie.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`flex flex-col items-center rounded-xl p-6 shadow-md transition hover:shadow-lg ${
                offer.recommended ? "border-2 border-[#d4af37]" : ""
              }`}
              style={{ backgroundColor: "var(--background)" }}
            >
              {/* Titre + sous-titre */}
              <div className="w-full max-w-[260px] mb-4 text-center">
                <h3 className="text-xl font-semibold">{offer.title}</h3>
                <p className="text-sm font-medium text-[#6b4f3b]">{offer.subtitle}</p>
              </div>

              {/* Prix */}
              <div className="w-full max-w-[260px] mb-6 text-center">
                <p className="text-2xl font-bold text-[#3b5f3b]">
                  {offer.price} <span className="text-base font-normal">/ TTC</span>
                </p>
        
                {offer.entrepreneurePrice && (
                  <p className="text-sm mt-2 text-[#a87a64] italic">
                    🌸 {offer.entrepreneurePrice} TTC pour les femmes entrepreneures
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="w-full max-w-[220px] mb-6 text-sm text-center ml-auto [text-align-last:left] [hyphens:auto]">
                <ul className="space-y-2">
                  {offer.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Bouton */}
              <div className="w-full max-w-[260px] flex justify-center">
                <Link href="/contact">
                  <button className="bg-[#3b5f3b] text-white px-6 py-2 rounded-full hover:bg-[#2f4f2f] transition text-sm font-semibold">
                    Demande de devis
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note explicative */}
        <p className="text-sm text-center mt-8 text-[#6b4f3b] italic">
          🌸 Un tarif solidaire est proposé aux femmes entrepreneures, parce que soutenir celles qui osent est au cœur de ma mission.
        </p>
      </div>
    </section>
  );
}
