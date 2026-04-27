"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:geral@pastofo.com?subject=${encodeURIComponent(
      form.subject || "Contacto via Website"
    )}&body=${encodeURIComponent(
      `Nome: ${form.name}\nEmpresa: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    setSent(true);
  };

  return (
    <section id="contactos" className="py-32 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A855]" />
            <span className="text-[#C9A855] text-xs tracking-[0.25em] uppercase font-body">
              Contactos
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white font-semibold leading-tight">
            Fale connosco.
            <br />
            <em className="text-[#C9A855]">Respondemos sempre.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-0">
          {/* Info panel */}
          <div className="lg:col-span-2 bg-[#2C2C2E] p-10 flex flex-col gap-10">
            <div>
              <h3 className="text-white font-display text-xl font-semibold mb-6">
                Pastofo — Pasta para Estofos, S.A.
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <MapPin size={18} className="text-[#C9A855] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm font-body leading-relaxed">
                      Rua 16 de Maio, nº 3484
                    </p>
                    <p className="text-white/80 text-sm font-body">
                      4785-521 Trofa, Porto
                    </p>
                    <p className="text-white/40 text-sm font-body">Portugal</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail size={18} className="text-[#C9A855] shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="mailto:geral@pastofo.com"
                      className="text-white/80 text-sm font-body hover:text-[#C9A855] transition-colors"
                    >
                      geral@pastofo.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={18} className="text-[#C9A855] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm font-body">
                      +351 252 XXX XXX
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock size={18} className="text-[#C9A855] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm font-body">
                      Segunda — Sexta
                    </p>
                    <p className="text-white/80 text-sm font-body">
                      08:00 — 17:30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NIF */}
            <div className="border-t border-white/10 pt-8">
              <div className="text-white/20 text-xs tracking-widest uppercase font-body mb-2">
                Dados Fiscais
              </div>
              <p className="text-white/50 text-sm font-body">NIF: 500 212 775</p>
              <p className="text-white/50 text-sm font-body">
                Capital Social: €1.500.000
              </p>
            </div>

            {/* Map embed placeholder */}
            <div className="flex-1 min-h-48 bg-[#3A3A3C] relative overflow-hidden">
              <a
                href="https://maps.google.com/?q=Rua+16+de+Maio+3484+Trofa+Porto+Portugal"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center hover:bg-[#C9A855]/10 transition-colors group"
              >
                <div className="text-center">
                  <MapPin
                    size={32}
                    className="text-[#C9A855] mx-auto mb-2 group-hover:scale-110 transition-transform"
                  />
                  <p className="text-white/40 text-xs font-body">
                    Ver no Google Maps
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-[#FAFAF8] p-10">
            {sent ? (
              <div className="h-full flex items-center justify-center text-center py-20">
                <div>
                  <div className="w-16 h-16 bg-[#C9A855] flex items-center justify-center mx-auto mb-6">
                    <Send size={24} className="text-[#1C1C1E]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#1C1C1E] font-semibold mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="text-[#1C1C1E]/50 font-body">
                    Responderemos em até 24 horas úteis.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1C1C1E]/50 text-xs tracking-widest uppercase font-body mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-[#1C1C1E]/15 bg-white px-4 py-3 text-[#1C1C1E] text-sm font-body focus:outline-none focus:border-[#C9A855] transition-colors"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1C1C1E]/50 text-xs tracking-widest uppercase font-body mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className="w-full border border-[#1C1C1E]/15 bg-white px-4 py-3 text-[#1C1C1E] text-sm font-body focus:outline-none focus:border-[#C9A855] transition-colors"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#1C1C1E]/50 text-xs tracking-widest uppercase font-body mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#1C1C1E]/15 bg-white px-4 py-3 text-[#1C1C1E] text-sm font-body focus:outline-none focus:border-[#C9A855] transition-colors"
                    placeholder="email@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-[#1C1C1E]/50 text-xs tracking-widest uppercase font-body mb-2">
                    Assunto *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="w-full border border-[#1C1C1E]/15 bg-white px-4 py-3 text-[#1C1C1E] text-sm font-body focus:outline-none focus:border-[#C9A855] transition-colors"
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="Têxteis Lar">Têxteis Lar</option>
                    <option value="Feltros Industriais">
                      Feltros Industriais
                    </option>
                    <option value="Pasta para Estofos">
                      Pasta para Estofos
                    </option>
                    <option value="Matérias-Primas">Matérias-Primas</option>
                    <option value="Orçamento">Pedido de Orçamento</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#1C1C1E]/50 text-xs tracking-widest uppercase font-body mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full border border-[#1C1C1E]/15 bg-white px-4 py-3 text-[#1C1C1E] text-sm font-body focus:outline-none focus:border-[#C9A855] transition-colors resize-none"
                    placeholder="Descreva o que precisa..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#1C1C1E] text-white font-semibold text-sm tracking-widest uppercase hover:bg-[#C9A855] hover:text-[#1C1C1E] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send size={16} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
