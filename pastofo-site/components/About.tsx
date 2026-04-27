export default function About() {
  return (
    <section id="sobre" className="py-32 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A855]" />
              <span className="text-[#C9A855] text-xs tracking-[0.25em] uppercase font-body">
                Sobre Nós
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1E] font-semibold leading-tight">
              Mais de meio século
              <br />a moldar o conforto
              <br />
              <em className="text-[#C9A855]">português</em>
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-[#1C1C1E]/60 text-lg leading-relaxed mb-6">
              Fundada em 1972 em Trofa, no coração do distrito do Porto, a
              Pastofo nasceu da visão de criar têxteis que combinam tradição
              artesanal com inovação industrial.
            </p>
            <p className="text-[#1C1C1E]/60 text-lg leading-relaxed">
              Com um capital social de €1.500.000 e três gerações de experiência
              acumulada, somos hoje referência nacional na produção de têxteis
              lar, feltros industriais e materiais para estofos.
            </p>
          </div>
        </div>

        {/* Editorial grid */}
        <div className="grid lg:grid-cols-3 gap-0 overflow-hidden">
          {/* Large image */}
          <div className="lg:col-span-2 relative aspect-[16/10] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80&auto=format&fit=crop"
              alt="Fábrica Pastofo — Trofa"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/50 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-white/80 text-sm font-body tracking-wide">
                Instalações — Trofa, Porto
              </span>
            </div>
          </div>

          {/* Values stack */}
          <div className="flex flex-col bg-[#1C1C1E]">
            {[
              {
                num: "01",
                title: "Tradição",
                text: "Três gerações de conhecimento têxtil transmitido com rigor e paixão.",
              },
              {
                num: "02",
                title: "Inovação",
                text: "Investimento constante em tecnologia e processos sustentáveis.",
              },
              {
                num: "03",
                title: "Qualidade",
                text: "Cada produto passa por controlo rigoroso antes de sair da fábrica.",
              },
            ].map((v) => (
              <div
                key={v.num}
                className="flex-1 p-8 border-b border-white/10 last:border-0 hover:bg-[#2C2C2E] transition-colors duration-300"
              >
                <div className="text-[#C9A855]/40 font-display text-4xl font-semibold mb-3">
                  {v.num}
                </div>
                <h3 className="text-white font-display text-xl font-semibold mb-2">
                  {v.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-body">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1C1C1E]/10 pt-16">
          {[
            { year: "1972", event: "Fundação da empresa em Trofa, Porto" },
            { year: "1990s", event: "Expansão para feltros industriais e B2B" },
            { year: "2000s", event: "Internacionalização e exportação de fibras" },
            { year: "Hoje", event: "Referência nacional em têxteis técnicos e lar" },
          ].map((t) => (
            <div key={t.year}>
              <div className="text-[#C9A855] font-display text-2xl font-semibold mb-2">
                {t.year}
              </div>
              <p className="text-[#1C1C1E]/50 text-sm leading-relaxed font-body">
                {t.event}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
