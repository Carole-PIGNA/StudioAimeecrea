"use client";

import Link from "next/link";

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="py-24 px-6 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-[#a87a64] dark:text-[#d4af37] transition-colors duration-300">
          Pourquoi me faire confiance ?
        </h2>

        {/* Intro */}
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Je combine <strong>rigueur d’ingénieure</strong> et <strong>sensibilité créative</strong>, 
          pour offrir aux entrepreneur.es des sites qui inspirent, rassurent et donnent confiance.
        </p>

        {/* Chiffres clés */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-5xl font-bold text-[#a87a64] dark:text-[#d4af37]">+7</p>
            <p>années d’expérience</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-[#d4af37] dark:text-[#f5ca92]">20+</p>
            <p>projets</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-[#3b5f3b] dark:text-[#a8d8a8]">100%</p>
            <p>focus sur l’authenticité et la réussite des entrepreneur·es</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-[#f5ca92] dark:text-[#d4af37]">∞</p>
            <p>créativité & passion</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link href="/contact">
            <button className="bg-[#d4af37] text-black px-8 py-3 rounded-full hover:bg-[#b9972f] font-semibold transition-colors duration-300">
              Démarrer mon projet
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
