"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const targets = [52, 1500000, 3];
    const formats = ["anos", "€ capital", "gerações"];

    counterRefs.current.forEach((el, i) => {
      if (!el) return;
      let start = 0;
      const end = targets[i];
      const duration = 2000;
      const step = end / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        if (i === 1) {
          el.textContent = "€" + (start / 1000000).toFixed(1) + "M";
        } else {
          el.textContent = Math.floor(start).toString();
        }
      }, 16);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#1C1C1E]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80&auto=format&fit=crop')",
        }}
      />
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/60 to-[#1C1C1E]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E]/80 via-transparent to-transparent" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A855] to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#C9A855]" />
            <span className="text-[#C9A855] text-xs tracking-[0.3em] uppercase font-body font-medium">
              Têxteis · Trofa · Porto · Portugal
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] mb-6">
            Qualidade
            <br />
            <em className="text-[#C9A855] not-italic">tecida</em> com
            <br />
            50 anos de{" "}
            <span className="relative">
              experiência
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-[#C9A855]/50" />
            </span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl font-body leading-relaxed max-w-xl mb-12">
            Da fibra ao produto final — fabricamos têxteis lar, feltros
            industriais e materiais para estofos que definem conforto e
            durabilidade.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A855] text-[#1C1C1E] font-semibold text-sm tracking-widest uppercase hover:bg-[#E8D5A3] transition-all duration-300"
            >
              Ver Produtos
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium text-sm tracking-wider hover:border-[#C9A855] hover:text-[#C9A855] transition-all duration-300"
            >
              A Nossa História
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl">
          {[
            { value: "52", suffix: " anos", label: "de experiência" },
            { value: "€1.5M", suffix: "", label: "capital social" },
            { value: "3ª", suffix: "", label: "geração familiar" },
          ].map((stat, i) => (
            <div key={i} className="border-t border-white/10 pt-4">
              <div className="font-display text-3xl text-[#C9A855] font-semibold">
                {stat.value}
                <span className="text-lg">{stat.suffix}</span>
              </div>
              <div className="text-white/40 text-xs tracking-wide mt-1 font-body uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 right-12 flex flex-col items-center gap-2 text-white/40 hover:text-[#C9A855] transition-colors group"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-body rotate-90 origin-center mb-2">
          Scroll
        </span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
