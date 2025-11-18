"use client";

import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    title: "Pourquoi créer son site sans passer par un CMS",
    excerpt:
      "Tu veux un site qui te ressemble vraiment, sans les limites techniques ou visuelles des plateformes comme WordPress ou Wix ? Découvre pourquoi le sur-mesure est souvent plus puissant, plus léger et plus évolutif.",
    slug: "site-sans-cms",
    img: "/images/crea_site_sans_cms.png",
    color: "text-[#a87a64] dark:text-[#d4af37]", 
  },
  {
    title: "Comment définir ton identité visuelle",
    excerpt:
      "Couleurs, typographies, ambiance… Ton identité visuelle est bien plus qu’un look : c’est une énergie, une émotion, une signature. Voici comment la construire avec cohérence et authenticité.",
    slug: "identite-visuelle",
    img: "/images/id_visuelle.png",
    color: "text-[#a87a64] dark:text-[#d4af37]",
  },
  {
    title: "Comment se rendre visible au-delà d’un bon site",
    excerpt:
      "Un site bien référencé, c’est essentiel. Mais la visibilité, c’est aussi du contenu, du lien humain, et une stratégie alignée. Découvre les leviers pour rayonner durablement.",
    slug: "visibilite-au-dela-du-site",
    img: "/images/visibilite.png",
    color: "text-[#a87a64] dark:text-[#d4af37]", 
  },
];

export default function BlogPage() {
  return (
    <section
      id="blog"
      className="py-24 px-6 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      <div className="mt-15 max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-[#a87a64] dark:text-[#d4af37] transition-colors duration-300">
          Le blog Studio AiméeCréa
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Des conseils concrets, des inspirations stratégiques, et des réflexions pour t’aider à créer un univers digital qui te ressemble.
        </p>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-md hover:shadow-lg transition-colors duration-300 text-left overflow-hidden"
            >
              <Image
                src={article.img}
                alt={article.title}
                width={600}
                height={400}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className={`text-xl font-semibold ${article.color}`}>
                  {article.title}
                </h3>
                <p className="text-sm leading-snug">
                  {article.excerpt}
                </p>
                <Link href={`/blog/${article.slug}`}>
                  <button className="bg-[#3b5f3b] text-white px-4 py-2 rounded-full hover:bg-[#2f4f2f] transition text-sm font-semibold">
                    Lire l’article
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
