"use client";

export default function CollaborationProcess() {
  const steps = [
    {
      label: "Découverte",
      color: "#3b5f3b",
      description: "On échange sur ton projet, ton univers, tes besoins et tes envies.",
    },
    {
      label: "Design",
      color: "#a87a64",
      description: "Je crée une identité visuelle qui te ressemble et qui parle à ta cible.",
    },
    {
      label: "Développement",
      color: "#d4af37",
      description: "Je transforme le design en site web fluide, responsive et optimisé.",
    },
    {
      label: "Lancement",
      color: "#f5ca92",
      description: "On met ton site en ligne, prêt à rayonner et à accueillir tes clients.",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 px-6 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-[#a87a64] dark:text-[#d4af37] transition-colors duration-300">
          Un processus clair et rassurant
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Chaque projet est une aventure partagée. Voici les étapes que nous suivrons ensemble pour créer ton univers digital, en toute sérénité.
        </p>

        {/* Étapes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[var(--background)] text-[var(--foreground)] rounded-xl p-6 shadow-md hover:shadow-lg transition-colors duration-300 flex flex-col items-center"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                style={{ backgroundColor: step.color }}
              >
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {step.label}
              </h3>
              <p className="text-sm leading-snug max-w-[220px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Phrase finale */}
        <p className="text-md max-w-xl mx-auto mt-10 leading-relaxed">
          Un processus <strong>fluide, humain et sans stress</strong> <br />
          avec des échanges clairs, des validations à chaque étape,
          et des tests ensemble pour que tout soit prêt à rayonner.
        </p>
      </div>
    </section>
  );
}
