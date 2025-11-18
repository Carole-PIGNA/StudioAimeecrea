"use client";

import { FaSearch, FaChartLine, FaHandshake } from "react-icons/fa";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-[var(--background)] text-[var(--foreground)] py-24 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#a87a64] dark:text-[#d4af37] mb-6 transition-colors duration-300">
          Pourquoi avoir un site web change tout?
        </h2>
        <p className="text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
          Les réseaux sociaux sont puissants, mais ton site est ton espace à toi. 
          Il reflète ton univers, ton énergie et ton expertise. 
          C’est là que tu peux vraiment convertir, rassurer et construire une relation durable avec tes clients.
        </p>

        {/* Grille de cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-lg p-8 hover:shadow-xl transition-colors duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#a87a64]/10 text-[#a87a64] mb-6 mx-auto">
              <FaChartLine size={28} />
            </div>
            <h3 className="text-xl font-semibold text-[#a87a64] mb-3">Visibilité</h3>
            <p>
              93% des expériences en ligne commencent par une recherche Google. 
              Sans site, ton business reste invisible.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-lg p-8 hover:shadow-xl transition-colors duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#a87a64]/10 text-[#a87a64] mb-6 mx-auto">
              <FaSearch size={28} />
            </div>
            <h3 className="text-xl font-semibold text-[#a87a64] mb-3">Référencement</h3>
            <p>
              Google détient 92% du marché de la recherche. 
              Le SEO attire des visiteurs gratuitement et durablement.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-lg p-8 hover:shadow-xl transition-colors duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#a87a64]/10 text-[#a87a64] mb-6 mx-auto">
              <FaHandshake size={28} />
            </div>
            <h3 className="text-xl font-semibold text-[#a87a64] mb-3">Crédibilité</h3>
            <p>
              Un site bien conçu inspire confiance. 
              99% des TPE-PME françaises estiment qu’une présence en ligne est essentielle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
