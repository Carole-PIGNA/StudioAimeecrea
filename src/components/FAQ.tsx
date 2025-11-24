"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Quelle est la différence entre le Pack Clé en Main et le Pack Sérénité ?",
    answer:
      "Le Pack Clé en Main est un paiement unique : vous êtes propriétaire du site et gérez vous-même l’hébergement et la maintenance. Le Pack Sérénité inclut un abonnement mensuel avec hébergement, maintenance et accompagnement technique, pour une tranquillité totale.",
  },
  {
    question: "Que comprend le tarif mensuel du Pack Sérénité ?",
    answer:
      "Il inclut l’hébergement sécurisé, la maintenance technique (mises à jour, surveillance), et un support prioritaire. Vous n’avez rien à gérer, je m’occupe de tout.",
  },
  {
    question: "Y a-t-il des frais de création en plus de l’abonnement ?",
    answer:
      "Oui, le Pack Sérénité inclut des frais de mise en service (ex. 300€ TTC pour un site vitrine) qui couvrent la conception, le développement initial et la mise en ligne.",
  },
  {
    question: "Puis-je passer du Pack Clé en Main au Pack Sérénité plus tard ?",
    answer:
      "Oui, c’est possible. Je vous proposerai un devis adapté selon les besoins techniques et le niveau d’accompagnement souhaité.",
  },
  {
    question: "Que se passe-t-il si vous arrêtez votre activité ?",
    answer:
      "Je vous remets toujours le code source et les accès. En cas de cessation, je peux transférer la gestion à un autre prestataire ou vous accompagner dans la transition.",
  },
  {
    question: "Suis-je propriétaire de mon site ?",
    answer:
      "Oui, dans tous les cas. Que vous choisissiez le Pack Clé en Main ou le Pack Sérénité, vous êtes propriétaire du code et du nom de domaine.",
  },
  {
    question: "Comment se passe la livraison technique ?",
    answer:
      "Le site est livré via un dépôt Git (GitHub ou autre), avec une documentation claire pour le déploiement et la prise en main. Je peux aussi vous accompagner pour le transfert vers votre hébergeur.",
  },
  {
    question: "Puis-je modifier mon site moi-même après livraison ?",
    answer:
      "Oui, si vous avez des bases techniques ou un CMS intégré. Sinon, je peux vous proposer une formation ou un accompagnement ponctuel.",
  },
  {
    question: "Quels sont les délais de réalisation ?",
    answer:
      "En moyenne : 2 à 3 semaines pour un site vitrine, 4 à 6 semaines pour un site e‑commerce. Ces délais peuvent varier selon la réactivité et les contenus fournis.",
  },
  {
    question: "Proposez-vous des fonctionnalités sur mesure ?",
    answer:
      "Oui, sur devis. Espace membre, multilingue, animations, SEO avancé, CRM… tout est possible selon vos besoins.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-[#a87a64] dark:text-[#d4af37]">
          Foire aux questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#3b5f3b] rounded-lg p-4 cursor-pointer transition hover:bg-[#d4e7d1]"
              onClick={() => toggle(index)}
            >
              <h3 className="text-md font-semibold text-[#3b5f3b] flex justify-between items-center">
                {faq.question}
                <span className="text-[#a87a64]">{openIndex === index ? "−" : "+"}</span>
              </h3>
              {openIndex === index && (
                <p className="mt-2 text-sm text-[#6b4f3b] leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
