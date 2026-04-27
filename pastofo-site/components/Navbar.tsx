"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Industrial", href: "#industrial" },
  { label: "Qualidade", href: "#qualidade" },
  { label: "Contactos", href: "#contactos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1C1C1E]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#C9A855] flex items-center justify-center">
            <span className="text-[#1C1C1E] font-bold text-sm tracking-tight">P</span>
          </div>
          <div>
            <span className="text-white font-display text-xl font-semibold tracking-wide">
              Pastofo
            </span>
            <span className="block text-[#C9A855] text-[9px] tracking-[0.2em] uppercase font-body">
              desde 1972
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-[#C9A855] text-sm tracking-[0.08em] uppercase font-body font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contactos"
            className="ml-4 px-5 py-2.5 bg-[#C9A855] text-[#1C1C1E] text-sm font-semibold tracking-wide uppercase hover:bg-[#E8D5A3] transition-colors duration-200"
          >
            Pedir Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1C1C1E] border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-[#C9A855] text-base tracking-wide font-body"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contactos"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 bg-[#C9A855] text-[#1C1C1E] text-sm font-semibold text-center tracking-wide uppercase"
            >
              Pedir Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
