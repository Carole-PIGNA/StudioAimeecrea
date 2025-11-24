"use client";

import Link from "next/link";

const featureList = [
  "Site complet clé en main",
  "Design responsive (mobile & tablette)",
  "Navigation fluide avec menu personnalisé",
  "Intégration de vos textes et visuels",
  "Formulaire de contact",
  "Référencement naturel",
  "Sécurisation HTTPS",
  "Pages thématiques (Accueil, À propos, Services, Témoignages, Contact…)",
  "Catalogue produits (jusqu’à X inclus)",
  "Paiement sécurisé (Stripe, PayPal…)",
  "Gestion des commandes (back-office simple)",
  "Page CGV / Mentions légales",
  "Hébergement & maintenance inclus",
  "Accompagnement personnalisé",
];

const offers = [
  {
    title: "Site vitrine 1 page",
    subtitle: "Pack Clé en Main",
    delay: "2 à 3 semaines",
    priceBlock: (
      <>
        <p className="text-2xl font-bold text-[#3b5f3b]">
          490€ <span className="text-sm font-normal text-[#6b4f3b]">TTC</span>
        </p>
      </>
    ),
    included: [
      "Site complet clé en main",
      "Design responsive (mobile & tablette)",
      "Intégration de vos textes et visuels",
      "Formulaire de contact",
      "Sécurisation HTTPS",
    ],
    recommended: false,
  },
  {
    title: "Site vitrine multipages",
    subtitle: "Pack Sérénité",
    delay: "3 à 4 semaines",
    priceBlock: (
      <>
        <p className="text-3xl font-bold text-[#3b5f3b] leading-tight">
          49€<span className="text-sm text-[#6b4f3b] font-normal"> TTC/mois</span>
        </p>
        <p className="text-xs font-semibold text-[#6b4f3b] mt-1">
         + 300€ TTC de frais de création
        </p>
      </>
    ),
    included: [
      "Site complet clé en main",
      "Design responsive (mobile & tablette)",
      "Navigation fluide avec menu personnalisé",
      "Intégration de vos textes et visuels",
      "Formulaire de contact",
      "Référencement naturel",
      "Sécurisation HTTPS",
      "Pages thématiques (Accueil, À propos, Services, Témoignages, Contact…)",
      "Hébergement & maintenance inclus",
      "Accompagnement personnalisé",
    ],
    recommended: true,
  },
  {
    title: "Site E-Commerce",
    subtitle: "Pack Sérénité E‑Commerce",
    delay: "4 à 6 semaines",
    priceBlock: (
      <>
        <p className="text-3xl font-bold text-[#3b5f3b] leading-tight">
          79€<span className="text-sm text-[#6b4f3b] font-normal"> TTC/mois</span>
        </p>
        <p className="text-xs font-semibold text-[#6b4f3b] mt-1">
          + 600€ TTC de frais de création
        </p>
      </>
    ),
    included: [
      "Site complet clé en main",
      "Design responsive (mobile & tablette)",
      "Navigation fluide avec menu personnalisé",
      "Intégration de vos textes et visuels",
      "Formulaire de contact",
      "Référencement naturel",
      "Sécurisation HTTPS",
      "Pages thématiques (Accueil, À propos, Services, Témoignages, Contact…)",
      "Catalogue produits (jusqu’à X inclus)",
      "Paiement sécurisé (Stripe, PayPal…)",
      "Gestion des commandes (back-office simple)",
      "Page CGV / Mentions légales",
      "Hébergement & maintenance inclus",
      "Accompagnement personnalisé",
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
  Trois formules claires pour créer un site qui vous ressemble, selon votre niveau d’autonomie et vos besoins techniques.
</p>


        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-xl p-10 shadow-md transition hover:shadow-lg ${
                offer.recommended ? "border-2 border-[#d4af37]" : ""
              }`}
              style={{ backgroundColor: "var(--background)" }}
            >
              {/* Délai en haut à droite */}
              <div className="absolute top-4 right-4 text-xs text-[#6b4f3b] bg-[#fdf6f0] px-2 py-1 rounded-full shadow-sm">
                ⏱ {offer.delay}
              </div>

              {/* Titre + sous-titre */}
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold">{offer.title}</h3>
                <p className="text-sm font-medium text-[#6b4f3b]">{offer.subtitle}</p>
              </div>

              {/* Prix */}
              <div className="mb-6 text-center">{offer.priceBlock}</div>

              {/* Features */}
              <div className="mb-6 text-sm text-left">
                <ul className="space-y-2">
                  {featureList.map((feature, i) => {
                    const isIncluded = offer.included.includes(feature);
                    return (
                      <li key={i} className="flex items-start">
                        <span className={`mr-2 text-lg font-bold ${isIncluded ? "text-green-600" : "text-red-500"}`}>
                          {isIncluded ? "✔" : "✘"}
                        </span>
                        <span className={isIncluded ? "" : "text-[#999]"}>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Bouton */}
              <div className="text-center">
                <Link href="/contact">
                  <button className="bg-[#3b5f3b] text-white px-6 py-2 rounded-full hover:bg-[#2f4f2f] transition text-sm font-semibold">
                    Demander un devis
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
