"use client";

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-[#3b5f3b] dark:text-[#d4af37] transition-colors duration-300">
          Prête à créer ton univers digital ?
        </h2>

        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          Ensemble, on peut donner vie à un site qui te ressemble, qui inspire, et qui convertit. 
          Je suis là pour t’accompagner à chaque étape.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <Link href="/contact">
            <button className="bg-[#3b5f3b] text-white px-6 py-3 rounded-full hover:bg-[#2f4f2f] transition text-base font-semibold">
              Démarrer mon projet
            </button>
          </Link>
          <Link href="/rappel">
            <button className="bg-[var(--background)] text-[#3b5f3b] border-2 border-[#3b5f3b] px-6 py-3 rounded-full hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition text-base font-semibold">
              Réserver un appel découverte
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
