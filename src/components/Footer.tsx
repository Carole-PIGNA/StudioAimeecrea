"use client";

import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaPinterestP } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("/api/newslettersubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      let result: any = null;
      try {
        result = await response.json();
      } catch {}

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setShowModal(true);
      } else {
        setStatus("error");
        console.error("Erreur API:", result?.error || "Réponse invalide");
      }
    } catch (err) {
      console.error("Erreur réseau:", err);
      setStatus("error");
    }
  };

  return (
    <>
      <footer className="bg-[var(--footer-background)] text-[var(--foreground)] py-16 mt-24 transition-colors duration-300 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
          
          {/* Contact */}
          <div className="space-y-3 text-left">
            <h3 className="text-base font-semibold text-[#d4af37]">Contact</h3>
            <p>aimee.entreprises@outlook.fr</p>
          </div>

          {/* Adresse */}
          <div className="space-y-3 text-left">
            <h3 className="text-base font-semibold text-[#d4af37]">Adresse</h3>
            <p>📍 Île-de-France</p>
            <p>🌍 Partout en France & à l’international</p>
          </div>

          {/* Liens rapides */}
          <div className="space-y-3 text-justify">
            <h3 className="text-base font-semibold text-[#d4af37]">Liens rapides</h3>
            <ul className="space-y-1">
              <li><a href="/#offers" className="block hover:text-[#a87a64] transition">Offres</a></li>
              <li><a href="/#gallery" className="block hover:text-[#a87a64] transition">Inspirations</a></li>
              <li><a href="/blog" className="block hover:text-[#a87a64] transition">Blog</a></li>
              <li><a href="/contact" className="block hover:text-[#a87a64] transition">Contact</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-3 text-left">
            <h3 className="text-base font-semibold text-[#d4af37]">Suivez-moi</h3>
            <div className="flex space-x-4 text-lg">
              <a href="https://www.tiktok.com/@studio.aimee.crea" target="_blank" rel="noopener noreferrer" className="hover:text-[#a87a64] transition"><SiTiktok /></a>
              <a href="https://www.instagram.com/studio.aimee.crea" target="_blank" rel="noopener noreferrer" className="hover:text-[#a87a64] transition"><FaInstagram /></a>
              <a href="https://www.pinterest.fr/studio.aimee.crea" target="_blank" rel="noopener noreferrer" className="hover:text-[#a87a64] transition"><FaPinterestP /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-3 text-left">
            <h3 className="text-base font-semibold text-[#d4af37]">Newsletter</h3>
            <p className="text-xs text-[#b4b4b4] text-justify">Reçois chaque mois mes inspirations, conseils et nouveautés.</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Ton email ici ✨"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 rounded-md bg-[var(--footer-background)] text-[var(--foreground)] placeholder-[#b4b4b4] border border-[#a87a64] focus:outline-none focus:ring-2 focus:ring-[#a87a64] transition text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#d4af37] text-[#1c1c1c] font-semibold rounded-md hover:bg-[#bfa12f] transition text-sm"
              >
                Je m’inscris
              </button>
              {status === "error" && (
                <p className="text-xs text-red-500 pt-1">Une erreur est survenue ❌</p>
              )}
            </form>
          </div>
        </div>

        {/* Citation douce */}
        <div className="mt-12 text-center text-xs italic text-[#a87a64]">
          “Chaque pixel compte quand il raconte votre histoire.”
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-xs border-t border-[#a87a64] pt-4 text-[var(--foreground)]">
          © {new Date().getFullYear()} Studio AiméeCréa. Tous droits réservés.
        </div>
      </footer>

      {/* Modal de remerciement */}
      {showModal && (
        <div className="fixed inset-0  bg-[var(--background)] bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-xl p-6 max-w-sm w-full text-center space-y-4 transition-colors duration-300">
            <h2 className="text-lg font-semibold text-[#d4af37]">Merci pour ton inscription ✨</h2>
            <p className="text-sm ">
              Tu recevras bientôt mes inspirations, conseils et nouveautés directement dans ta boîte magique.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-[#d4af37] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#c49e2f] transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
