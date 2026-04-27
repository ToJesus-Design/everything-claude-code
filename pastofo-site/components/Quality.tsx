const pillars = [
  {
    label: "Matérias-Primas",
    title: "Fibras selecionadas na origem",
    desc: "Importamos fibras naturais e sintéticas das melhores origens mundiais. Cada lote é testado antes de entrar em produção.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Processo",
    title: "Controlo em cada etapa",
    desc: "Da transformação ao produto final, cada fase de produção é monitorizada com equipamentos de medição certificados.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Sustentabilidade",
    title: "Reutilização de resíduos têxteis",
    desc: "Transformamos resíduos de fibras têxteis em produtos de valor, reduzindo o impacto ambiental e fechando o ciclo produtivo.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Quality() {
  return (
    <section id="qualidade" className="py-32 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A855]" />
            <span className="text-[#C9A855] text-xs tracking-[0.25em] uppercase font-body">
              Qualidade & Processo
            </span>
            <div className="w-8 h-px bg-[#C9A855]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1E] font-semibold leading-tight mb-6">
            Rigor que não se vê
            <br />mas se{" "}
            <em className="text-[#C9A855]">sente</em>
          </h2>
          <p className="text-[#1C1C1E]/50 text-lg leading-relaxed font-body">
            A qualidade Pastofo começa muito antes do produto chegar às suas
            mãos — começa na escolha da fibra e termina só quando temos a
            certeza absoluta da excelência.
          </p>
        </div>

        {/* Pillars */}
        <div className="space-y-0">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-0 overflow-hidden ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden ${
                  i % 2 === 1 ? "md:[direction:ltr]" : ""
                }`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                className={`bg-[#1C1C1E] flex items-center p-12 lg:p-16 ${
                  i % 2 === 1 ? "md:[direction:ltr]" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-px bg-[#C9A855]" />
                    <span className="text-[#C9A855] text-xs tracking-[0.25em] uppercase font-body">
                      {p.label}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white font-semibold mb-4">
                    {p.title}
                  </h3>
                  <p className="text-white/40 text-base leading-relaxed font-body">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications bar */}
        <div className="mt-16 p-10 bg-[#1C1C1E] grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Produção", val: "Nacional" },
            { label: "Experiência", val: "+52 Anos" },
            { label: "Capital", val: "€1.5M" },
            { label: "Localização", val: "Trofa, Porto" },
          ].map((c) => (
            <div key={c.label} className="text-center">
              <div className="text-[#C9A855] font-display text-2xl font-semibold mb-1">
                {c.val}
              </div>
              <div className="text-white/30 text-xs uppercase tracking-widest font-body">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
