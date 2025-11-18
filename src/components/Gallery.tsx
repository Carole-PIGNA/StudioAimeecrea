"use client";

import Link from "next/link";
import { useState } from "react";

const galleryVideos = [
  {
    title: "Boutique artisanale",
    src: "/videos/boutique.mp4",
    poster: "/images/poster_boutique.png",
    description: "Un univers chaleureux et authentique pour mettre en valeur tes créations.",
  },
  {
    title: "Thérapeute",
    src: "/videos/therapeute.mp4",
    poster: "/images/poster_therapeute.png",
    description: "Un espace apaisant et lumineux pour inspirer confiance et sérénité.",
  },
  {
    title: "Portfolio créatif",
    src: "/videos/portfolio.mp4",
    poster: "/images/poster_portfolio.png",
    description: "Un design élégant et affirmé pour révéler ton talent au monde.",
  },
  {
    title: "Association",
    src: "/videos/association.mp4",
    poster: "/images/poster_association.png",
    description: "Un site engagé et accessible pour porter tes valeurs et mobiliser ta communauté.",
  },
  {
    title: "Restaurant",
    src: "/videos/restaurant.mp4",
    poster: "/images/poster_restaurant.png",
    description: "Une ambiance gourmande et élégante pour éveiller les papilles dès la première visite.",
  },
];

const itemsPerPage = 3;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(galleryVideos.length / itemsPerPage);

  const paginatedItems = galleryVideos.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section
      id="gallery"
      className="py-24 px-6 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-[#a87a64] dark:text-[#d4af37] transition-colors duration-300">
          Des univers qui font rêver
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Chaque entrepreneure a son énergie, son style, son histoire. Voici quelques univers que j’aime créer — pour t’aider à imaginer le tien.
        </p>

        {/* Grille vidéo */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 hover:shadow-lg"
            >
              <video
                src={item.src}
                poster={item.poster}
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-64 object-cover"
                onMouseOver={(e) => {
                  try {
                    e.currentTarget.play();
                  } catch (_) {}
                }}
                onMouseOut={(e) => {
                  try {
                    e.currentTarget.pause();
                  } catch (_) {}
                }}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-[#a87a64] dark:text-[#d4af37]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-10 h-10 rounded-full border-2 ${
                currentPage === i
                  ? "bg-[#3b5f3b] border-[#3b5f3b] text-white"
                  : "border-[#3b5f3b] text-[#3b5f3b] hover:bg-[#e6f2e6] dark:hover:bg-[#2a2a2a]"
              } transition font-semibold`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link href="/contact">
            <button className="bg-[#d4af37] text-black px-8 py-3 rounded-full hover:bg-[#b9972f] transition text-base font-semibold">
              Créer mon univers digital
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
