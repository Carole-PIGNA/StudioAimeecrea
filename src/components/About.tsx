"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-[var(--background)] text-[var(--foreground)] overflow-hidden transition-colors duration-300"
    >
      {/* Motif subtil en fond */}
      <div className="absolute inset-0 bg-[url('/images/bg_pattern_light.svg')] dark:bg-[url('/images/bg_pattern_dark.svg')] bg-repeat opacity-10 pointer-events-none transition-all duration-300" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texte à gauche */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#a87a64] dark:text-[#d4af37] mb-6 transition-colors duration-300">
            Je crée pour toi
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Ancienne ingénieure biomédicale, j’ai choisi de me réinventer pour suivre mon élan créatif. 
              Aujourd’hui, je mets cette reconversion au service des femmes entrepreneures qui veulent 
              <strong> rayonner en ligne</strong> avec authenticité et confiance.
            </p>
            <p>
              Mon rôle est de transformer ta vision en une <strong>présence digitale</strong> élégante et magnétique, 
              qui attire les bonnes personnes et reflète ton univers unique.
            </p>
          </div>

          {/* Bouton CTA */}
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#d4af37] text-black px-6 py-3 rounded-full hover:bg-[#b9972f] transition text-base font-semibold">
                Démarrer mon projet
              </button>
            </Link>
          </div>
        </div>

        {/* Image à droite */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/images/maphotobis.png"
            alt="Portrait de la fondatrice"
            width={800}
            height={600}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
