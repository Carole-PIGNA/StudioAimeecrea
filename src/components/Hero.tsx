
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[100vh] flex items-center">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_image3.png"
          alt="Hero background Studio AiméeCréa"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Gradient overlay (transition douce, pas de coupure nette) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/25 via-[#000000]/10 to-transparent dark:from-[#000000]/35 dark:via-[#000000]/20" />

      {/* Contenu (padding top pour compenser le header fixe) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 pt-28 md:pt-32">
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight drop-shadow-md">
            Des sites féminins & épurés<br />pour entrepreneuses ambitieuses
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl">
            Je crée des sites web élégants qui reflètent ton authenticité
            et convertissent tes visiteurs en clients fidèles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#gallery">
              <button className="bg-[#a87a64] text-white px-6 py-3 rounded-lg hover:bg-[#8c5f4e] transition">
                Découvre mes designs ↓
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-[#d4af37] text-black px-6 py-3 rounded-lg hover:bg-[#b9972f] transition">
                Parle-moi de ton projet
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Flèche dessinée animée */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#pourquoi-site" aria-label="Scroll down">
          <svg
            className="w-20 h-20 text-[#d4af37] animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>

    </section>
  );
}
