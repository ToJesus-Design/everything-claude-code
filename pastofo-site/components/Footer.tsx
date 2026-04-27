export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1C1C1E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#C9A855] flex items-center justify-center">
                <span className="text-[#1C1C1E] font-bold text-sm">P</span>
              </div>
              <span className="text-white font-display text-xl font-semibold">
                Pastofo
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed font-body max-w-xs">
              Pasta para Estofos, S.A. — Fabricantes de têxteis técnicos e lar
              desde 1972. Trofa, Porto, Portugal.
            </p>
            <div className="mt-6 text-white/20 text-xs font-body">
              NIF 500 212 775 · Capital €1.500.000
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/50 text-xs tracking-widest uppercase font-body mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              {["Sobre", "Produtos", "Industrial", "Qualidade", "Contactos"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-white/40 text-sm font-body hover:text-[#C9A855] transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/50 text-xs tracking-widest uppercase font-body mb-4">
              Localização
            </h4>
            <address className="not-italic text-white/40 text-sm font-body space-y-1">
              <p>Rua 16 de Maio, nº 3484</p>
              <p>4785-521 Trofa</p>
              <p>Porto, Portugal</p>
              <p className="mt-3">
                <a
                  href="mailto:geral@pastofo.com"
                  className="hover:text-[#C9A855] transition-colors"
                >
                  geral@pastofo.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-body">
            © {year} Pastofo — Pasta para Estofos, S.A. Todos os direitos
            reservados.
          </p>
          <a
            href="https://maps.google.com/?q=Rua+16+de+Maio+3484+Trofa+Porto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 text-xs font-body hover:text-[#C9A855] transition-colors"
          >
            Trofa · Porto · Portugal
          </a>
        </div>
      </div>
    </footer>
  );
}
