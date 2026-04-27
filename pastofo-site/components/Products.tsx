const homeProducts = [
  {
    name: "Fronha de Almofada Impermeável",
    desc: "Proteção total contra líquidos, fluidos corporais e transpiração. Lavável a 60ºC. Certificada para uso hospitalar e doméstico.",
    features: ["Impermeável", "Lavável 60ºC", "Anti-bacteriano", "Com fecho"],
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Almofada de Penas e Penugem",
    desc: "Enchimento natural premium com penas e penugem selecionadas. Capa em algodão 100% para sensação fresca e confortável.",
    features: ["Anti-alérgica", "Anti-bacteriana", "Algodão 100%", "Certificada"],
    img: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Protetor de Colchão",
    desc: "Proteção completa do colchão com membrana impermeável respirável. Preserva a higiene e prolonga a vida útil.",
    features: ["Respirável", "Impermeável", "Elástico 360°", "Hipoalérgico"],
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-32 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A855]" />
              <span className="text-[#C9A855] text-xs tracking-[0.25em] uppercase font-body">
                Têxteis Lar
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1E] font-semibold leading-tight">
              Conforto que se
              <br />
              <em className="text-[#C9A855]">sente</em> ao toque
            </h2>
          </div>
          <p className="text-[#1C1C1E]/50 max-w-sm text-base leading-relaxed font-body">
            Linha completa de têxteis para o lar, desenvolvida com os melhores
            materiais e processos de fabrico rigorosamente controlados.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-[#1C1C1E]/10">
          {homeProducts.map((p, i) => (
            <div
              key={i}
              className="group relative flex flex-col border-r border-[#1C1C1E]/10 last:border-r-0 hover:bg-[#F5F0E8] transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F0E8]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#C9A855] px-2 py-1">
                  <span className="text-[#1C1C1E] text-[10px] font-semibold tracking-widest uppercase">
                    Pastofo
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-xl text-[#1C1C1E] font-semibold mb-3">
                  {p.name}
                </h3>
                <p className="text-[#1C1C1E]/50 text-sm leading-relaxed mb-6 flex-1 font-body">
                  {p.desc}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] tracking-widest uppercase font-body font-medium px-3 py-1.5 border border-[#1C1C1E]/15 text-[#1C1C1E]/60 hover:border-[#C9A855] hover:text-[#C9A855] transition-colors"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#contactos"
                  className="text-[#C9A855] text-xs tracking-[0.15em] uppercase font-body font-semibold flex items-center gap-2 group/link hover:gap-4 transition-all"
                >
                  Pedir Informação
                  <span className="w-6 h-px bg-[#C9A855] group-hover/link:w-10 transition-all" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-[#1C1C1E] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-display text-xl font-semibold">
              Linha completa disponível sob consulta
            </p>
            <p className="text-white/40 text-sm font-body mt-1">
              Encomendas B2B · Produção personalizada · Grandes volumes
            </p>
          </div>
          <a
            href="#contactos"
            className="shrink-0 px-8 py-4 bg-[#C9A855] text-[#1C1C1E] font-semibold text-sm tracking-widest uppercase hover:bg-[#E8D5A3] transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
