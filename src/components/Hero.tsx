"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[100vh] flex items-center justify-center">
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent dark:from-black/40 dark:via-black/20" />


      <div className="relative z-10 w-full px-4 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto flex flex-col md:items-start items-center text-center md:text-left space-y-6 md:ml-50">
          <h1 className="text-4xl md:text-6xl font-montserrat font-extrabold tracking-tight text-[#f5f5f5] max-w-[90%] md:max-w-none">
            Un site qui te ressemble et te propulse.
          </h1>
          <p className="text-lg md:text-xl font-inter leading-relaxed text-[#f5f5f5]  max-w-[85%] md:max-w-2xl">
            Ensemble, on crée un univers digital qui inspire, touche et transforme.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-6">
            <Link href="/#gallery">
              <button className="bg-[#a87a64] text-white px-6 py-3 rounded-full hover:bg-[#8c5f4e] transition text-sm sm:text-base">
                Découvre mes designs ↓
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-[#d4af37] text-black px-6 py-3 rounded-full hover:bg-[#b9972f] transition text-sm sm:text-base">
                Parle-moi de ton projet
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Flèche animée */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#pourquoi-site" aria-label="Scroll down">
          <svg
            className="w-10 h-10 sm:w-14 sm:h-14 text-[#d4af37] animate-bounce"
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
