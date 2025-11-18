"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("/api/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let result: any = null;
      try {
        result = await response.json();
      } catch {}

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setShowModal(true); // ← affiche le modal
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
      <section className="mt-30 min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-24 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Bloc gauche : infos de contact */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-serif text-[#d4af37]">
              Parle-moi de ton projet ✨
            </h1>
            <p className="text-lg">
              Que tu sois prête à démarrer, à brainstormer ou simplement à poser tes idées…  
              je suis là pour t’écouter, te guider et créer un site qui te ressemble.
            </p>

            <div className="space-y-4 text-sm">
              <p>📍 Studio AiméeCréa, Île-de-France</p>
              <p>✉️ contact@studioaimeecrea.fr</p>
              <p>📞 (+33) 6 12 34 56 78</p>
              <p>📱 WhatsApp : +33 6 12 34 56 78</p>
              <p>📷 Instagram : @studioaimeecrea</p>
            </div>
          </div>

          {/* Bloc droit : formulaire */}
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-lg p-8 space-y-6 transition-colors duration-300"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
                Ton prénom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-[#d4af37] bg-[var(--background)] text-[var(--foreground)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
                Ton email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-[#d4af37] bg-[var(--background)] text-[var(--foreground)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">
                Ton message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-[#d4af37] bg-[var(--background)] text-[var(--foreground)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                placeholder="Décris ton activité, ton univers, tes besoins…"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4af37] text-black font-semibold py-3 rounded-md hover:bg-[#c49e2f] transition"
            >
              Envoyer ma demande
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-red-500 mt-4">
                Une erreur est survenue ❌
              </p>
            )}

            <p className="text-center text-sm text-[var(--foreground)] pt-4">
              Ou <Link href="/rappel" className="underline hover:text-[#d4af37]">réserve ton appel découverte</Link>
            </p>
          </form>
        </div>
      </section>

      {/* Modal de remerciement */}
      {showModal && (
        <div className="fixed inset-0 bg-[var(--background)]/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-xl p-6 max-w-sm w-full text-center space-y-4 transition-colors duration-300">
            <h2 className="text-lg font-semibold text-[#d4af37]">Merci pour ton message ✨</h2>
            <p className="text-sm">
              Je te répondrai très vite pour en discuter ensemble.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="mt-4 bg-[#d4af37] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#c49e2f] transition"
            >
              Retour à l’accueil
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="text-xs text-gray-500 underline mt-2"
            >
            </button>
          </div>
        </div>
      )}
    </>
  );
}
