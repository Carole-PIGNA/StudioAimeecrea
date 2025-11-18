"use client";
import { useState } from "react";

export default function Rappel() {
  const [contactPref, setContactPref] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactEmail: "",
    contactPhone: "",
    subject: "",
  });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      contactPref,
      subject: formData.subject,
      contactEmail:
        contactPref === "email" || contactPref === "visio" ? formData.contactEmail : "",
      contactPhone: contactPref === "whatsapp" ? formData.contactPhone : "",
    };

    try {
      const response = await fetch("/api/contactrappel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          contactEmail: "",
          contactPhone: "",
          subject: "",
        });
        setContactPref("");
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
      <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center px-6 py-24 transition-colors duration-300">
        <div className="w-full max-w-md bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-lg p-8 space-y-6 transition-colors duration-300">
          <h1 className="text-center text-[#d4af37] text-2xl font-semibold tracking-wide">
            Réserve ton appel découverte
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Prénom */}
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

            {/* Email principal */}
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

            {/* Préférence de contact */}
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-[var(--foreground)]">
                Préférence de contact
              </label>
              <select
                id="contact"
                name="contact"
                value={contactPref}
                onChange={(e) => setContactPref(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-[#d4af37] bg-[var(--background)] text-[var(--foreground)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              >
                <option value="">Choisis une option</option>
                <option value="email">Email</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="visio">Appel visio (Teams/Zoom)</option>
              </select>
            </div>

            {/* Champ conditionnel */}
            {(contactPref === "email" || contactPref === "visio") && (
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-[var(--foreground)]">
                  Adresse email pour le contact
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-[#d4af37] bg-[var(--background)] text-[var(--foreground)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>
            )}

            {contactPref === "whatsapp" && (
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-[var(--foreground)]">
                  Numéro WhatsApp
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-[#d4af37] bg-[var(--background)] text-[var(--foreground)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>
            )}

            {/* Sujet */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[var(--foreground)]">
                Je souhaite être rappelée pour…
              </label>
              <textarea
                id="subject"
                name="subject"
                rows={4}
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Exemple : création de mon site, refonte, identité visuelle, stratégie…"
                className="mt-1 block w-full rounded-md border border-[#d4af37] bg-[var(--background)] text-[var(--foreground)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            {/* Bouton CTA */}
            <button
              type="submit"
              className="w-full bg-[#d4af37] text-black font-semibold py-3 rounded-md hover:bg-[#c49e2f] transition"
            >
              Envoyer ma demande ✨
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-red-500 mt-4 animate-fade-in">
                Une erreur est survenue ❌
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Modal de remerciement */}
      {showModal && (
        <div className="fixed inset-0 bg-[var(--background)]/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-xl p-6 max-w-sm w-full text-center space-y-4 transition-colors duration-300">
            <h2 className="text-lg font-semibold text-[#d4af37]">Merci pour ta demande ✨</h2>
            <p className="text-sm">
              J’ai bien reçu ton souhait d’échange. Je reviendrai vers toi dès que possible pour en discuter.
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
