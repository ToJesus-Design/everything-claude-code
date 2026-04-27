const industrialProducts = [
  {
    icon: "▦",
    name: "Feltros Industriais",
    desc: "Produção de feltros técnicos para aplicações industriais diversas. Alta resistência, densidade controlada e tolerâncias precisas.",
    apps: ["Automóvel", "Construção", "Mobiliário", "Embalagem"],
  },
  {
    icon: "◈",
    name: "Pasta para Estofos",
    desc: "Material de enchimento e suporte para a indústria de estofos. Fabricado com fibras naturais e sintéticas de alta qualidade.",
    apps: ["Sofás", "Cadeiras", "Colchões", "Painéis"],
  },
  {
    icon: "⊞",
    name: "Não-Tecidos Técnicos",
    desc: "Produção de não-tecidos a partir de resíduos de fibras têxteis. Solução sustentável para isolamento térmico e acústico.",
    apps: ["Isolamento", "Geotêxtil", "Filtragem", "Agricultura"],
  },
  {
    icon: "◇",
    name: "Fibras & Matérias-Primas",
    desc: "Importação e exportação de fibras naturais e sintéticas. Fornecimento a fabricantes têxteis nacionais e internacionais.",
    apps: ["Lã", "Algodão", "Poliéster", "Viscose"],
  },
];

export default function Industrial() {
  return (
    <section id="industrial" className="py-32 bg-[#1C1C1E] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,85,0.3) 40px, rgba(201,168,85,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201,168,85,0.3) 40px, rgba(201,168,85,0.3) 41px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A855]" />
              <span className="text-[#C9A855] text-xs tracking-[0.25em] uppercase font-body">
                Segmento Industrial
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white font-semibold leading-tight">
              Soluções têxteis
              <br />
              para a{" "}
              <em className="text-[#C9A855]">indústria</em>
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-white/40 text-lg leading-relaxed font-body">
              Com 52 anos de know-how industrial, fornecemos materiais têxteis
              técnicos a fabricantes de todo o sector — do automóvel à
              construção, passando pela indústria do mobiliário.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-[#C9A855] font-display text-3xl font-semibold">B2B</div>
                <div className="text-white/30 text-xs uppercase tracking-widest font-body mt-1">
                  Foco Industrial
                </div>
              </div>
              <div>
                <div className="text-[#C9A855] font-display text-3xl font-semibold">Export</div>
                <div className="text-white/30 text-xs uppercase tracking-widest font-body mt-1">
                  Internacional
                </div>
              </div>
              <div>
                <div className="text-[#C9A855] font-display text-3xl font-semibold">Custom</div>
                <div className="text-white/30 text-xs uppercase tracking-widest font-body mt-1">
                  Por Medida
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {industrialProducts.map((p, i) => (
            <div
              key={i}
              className="bg-[#1C1C1E] p-10 hover:bg-[#2C2C2E] transition-colors duration-300 group"
            >
              <div className="text-[#C9A855]/30 text-4xl mb-6 group-hover:text-[#C9A855]/60 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-white font-display text-xl font-semibold mb-3">
                {p.name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6 font-body">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.apps.map((a) => (
                  <span
                    key={a}
                    className="text-[10px] tracking-widest uppercase font-body px-3 py-1.5 border border-white/10 text-white/30 group-hover:border-[#C9A855]/30 group-hover:text-[#C9A855]/60 transition-colors"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industrial CTA */}
        <div className="mt-12 border border-[#C9A855]/20 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-display text-2xl font-semibold mb-2">
              Procura soluções à medida para a sua indústria?
            </h3>
            <p className="text-white/40 font-body text-sm">
              A nossa equipa técnica desenvolve especificações customizadas para
              cada aplicação industrial.
            </p>
          </div>
          <a
            href="#contactos"
            className="shrink-0 px-8 py-4 border border-[#C9A855] text-[#C9A855] font-semibold text-sm tracking-widest uppercase hover:bg-[#C9A855] hover:text-[#1C1C1E] transition-all"
          >
            Falar com Técnico
          </a>
        </div>
      </div>
    </section>
  );
}
