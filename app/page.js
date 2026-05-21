"use client";
import { useState } from "react";
import { ClipboardList, CalendarCheck, PhoneCall, ArrowLeft, CheckCircle, MessageSquare, Scissors, TreePine, Hammer, Flower2, Layers, Leaf, Sparkles, Shovel } from "lucide-react";

const OPTIONS = [
  {
    id: "angebot",
    icon: ClipboardList,
    title: "Angebot anfragen",
    desc: "Beschreiben Sie Ihr Projekt – wir melden uns mit einem unverbindlichen Kostenvoranschlag.",
    color: "from-[#3a7d1e] to-[#2d5a14]",
  },
  {
    id: "termin",
    icon: CalendarCheck,
    title: "Kostenlose Vor-Ort-Besichtigung",
    desc: "Wir kommen zu Ihnen – schauen uns alles an und beraten Sie direkt vor Ort. Kostenlos.",
    color: "from-[#4a8c2a] to-[#366020]",
    badge: "Empfohlen",
  },
  {
    id: "rueckruf",
    icon: PhoneCall,
    title: "Rückruf anfordern",
    desc: "Hinterlassen Sie Ihre Nummer – wir rufen Sie wunschgemäß zurück.",
    color: "from-[#5a9e35] to-[#3a6e1e]",
  },
];

const FIELDS = {
  angebot: [
    { name: "name", label: "Ihr Name", type: "text", placeholder: "Max Mustermann" },
    { name: "phone", label: "Telefonnummer", type: "tel", placeholder: "+49 ..." },
    { name: "address", label: "Adresse / Ort", type: "text", placeholder: "Bernau bei Berlin" },
    { name: "message", label: "Was darf es sein?", type: "textarea", placeholder: "z. B. Rasenmähen, Heckenschnitt, Neugestaltung, Baumfällung ..." },
  ],
  termin: [
    { name: "name", label: "Ihr Name", type: "text", placeholder: "Max Mustermann" },
    { name: "phone", label: "Telefonnummer", type: "tel", placeholder: "+49 ..." },
    { name: "address", label: "Adresse des Grundstücks", type: "text", placeholder: "Straße, Ort" },
    { name: "date", label: "Wunschtermin (ca.)", type: "text", placeholder: "z. B. nächste Woche, Mai, flexibel" },
  ],
  rueckruf: [
    { name: "name", label: "Ihr Name", type: "text", placeholder: "Max Mustermann" },
    { name: "phone", label: "Telefonnummer", type: "tel", placeholder: "+49 ..." },
    { name: "time", label: "Am besten erreichbar", type: "text", placeholder: "z. B. vormittags, nach 17 Uhr" },
  ],
};

export default function FunnelPage() {
  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const option = OPTIONS.find(o => o.id === selected);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F2F7ED] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#3a7d1e] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#1a3a0a] mb-3">Vielen Dank!</h2>
          <p className="text-[#4a5a40] text-base leading-relaxed mb-6">
            Ihre Anfrage ist bei uns eingegangen. Wir melden uns so schnell wie möglich bei Ihnen.
          </p>
          <p className="text-sm text-[#6a7a60]">Green Boys – Baum & Gartenservice · Bernau</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F7ED] flex flex-col">

      {/* Hero */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img src="/hero.jpg" alt="Schöner Garten" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#F2F7ED]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <img src="/team.jpg" alt="Green Boys Team" className="hidden" />
          <div className="inline-flex items-center gap-2 bg-[#3a7d1e] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3 shadow">
            <span>🌿</span> Täglich im Einsatz für Barnim & Umland
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md leading-tight">
            Gartenbau für<br />Barnim und Umland
          </h1>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-white border-b border-[#ddeedd] py-3 px-4">
        <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-[#3a5a2a]">
          <span>⭐⭐⭐⭐⭐ <strong>5,0</strong> Google-Bewertung</span>
          <span className="hidden sm:inline text-[#c0d8b0]">|</span>
          <span>✅ Über 100 Projekte in Barnim</span>
          <span className="hidden sm:inline text-[#c0d8b0]">|</span>
          <span>📍 Umkreis 50 km um Bernau</span>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-10">

        {!selected ? (
          <>
            <p className="text-center text-[#4a5a40] text-base mb-8">
              <strong className="text-[#1a3a0a]">Green Boys – Baum & Gartenservice.</strong><br />
              Wie dürfen wir Ihnen helfen?
            </p>

            <div className="flex flex-col gap-4">
              {OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className="group relative w-full text-left bg-white rounded-2xl shadow-sm border border-[#d0e8c0] hover:shadow-md hover:border-[#3a7d1e] transition-all duration-200 overflow-hidden"
                >
                  {opt.badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-[#3a7d1e] text-white px-2.5 py-1 rounded-full">
                      {opt.badge}
                    </span>
                  )}
                  <div className="flex items-start gap-4 p-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${opt.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <opt.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1a3a0a] text-base mb-1 group-hover:text-[#3a7d1e] transition-colors">{opt.title}</p>
                      <p className="text-sm text-[#6a7a60] leading-snug">{opt.desc}</p>
                    </div>
                    <div className="ml-auto flex-shrink-0 self-center text-[#3a7d1e] opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Map */}
            <div className="mt-10 bg-white rounded-2xl border border-[#d0e8c0] overflow-hidden shadow-sm">
              <img src="/map.jpg" alt="Einzugsgebiet Barnim" className="w-full h-40 object-cover object-top" />
              <div className="px-5 py-4">
                <p className="text-sm text-[#4a5a40] font-medium">📍 Unser Einzugsgebiet</p>
                <p className="text-sm text-[#6a7a60] mt-1">Bernau bei Berlin, Barnim, Märkisch-Oderland, Pankow – und alles im Umkreis von 50 km.</p>
              </div>
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={() => setSelected(null)}
              className="flex items-center gap-2 text-sm text-[#3a7d1e] font-medium mb-6 hover:text-[#2d5a14] transition-colors"
            >
              <ArrowLeft size={16} /> Zurück
            </button>

            <div className={`bg-gradient-to-br ${option.color} rounded-2xl p-5 mb-6 flex items-center gap-4`}>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <option.icon size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">{option.title}</p>
                <p className="text-white/70 text-sm">Einfach ausfüllen – wir melden uns schnell.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#d0e8c0] p-6 shadow-sm space-y-4">
              {FIELDS[selected].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-[#1a3a0a] mb-1.5">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      required
                      rows={4}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={e => setFormData(d => ({ ...d, [field.name]: e.target.value }))}
                      className="w-full border border-[#d0e8c0] rounded-xl px-4 py-3 text-sm text-[#1a3a0a] placeholder:text-[#a0b090] focus:outline-none focus:ring-2 focus:ring-[#3a7d1e]/30 focus:border-[#3a7d1e] transition resize-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      required={field.name === "name" || field.name === "phone"}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={e => setFormData(d => ({ ...d, [field.name]: e.target.value }))}
                      className="w-full border border-[#d0e8c0] rounded-xl px-4 py-3 text-sm text-[#1a3a0a] placeholder:text-[#a0b090] focus:outline-none focus:ring-2 focus:ring-[#3a7d1e]/30 focus:border-[#3a7d1e] transition"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-[#3a7d1e] hover:bg-[#2d5a14] text-white font-bold py-4 rounded-xl transition-colors text-base shadow-sm mt-2"
              >
                Jetzt absenden →
              </button>
              <p className="text-xs text-[#8a9a80] text-center">Kostenlos & unverbindlich · Keine Weitergabe Ihrer Daten</p>
            </form>
          </div>
        )}
      </div>

      {/* Direktkontakt */}
      <div className="bg-[#1a3a0a] px-4 py-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-2">Lieber direkt?</p>
          <h2 className="text-white text-2xl font-bold mb-2">Rufen Sie uns an oder schreiben Sie uns auf WhatsApp</h2>
          <p className="text-white/60 text-sm mb-8">Wir antworten in der Regel innerhalb weniger Stunden.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+4915901444621"
              className="flex items-center justify-center gap-2.5 bg-white text-[#1a3a0a] font-bold px-6 py-4 rounded-2xl hover:bg-[#f0f8ea] transition-colors text-base"
            >
              <PhoneCall size={20} />
              +49 1590 1444621
            </a>
            <a
              href="https://wa.me/4915901444621"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-6 py-4 rounded-2xl transition-colors text-base"
            >
              <MessageSquare size={20} fill="white" />
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </div>

      {/* Leistungen */}
      <div className="bg-[#F2F7ED] px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#3a7d1e] text-sm uppercase tracking-widest font-semibold text-center mb-2">Was wir für Sie tun</p>
          <h2 className="text-[#1a3a0a] text-2xl font-bold text-center mb-8">Alle Leistungen aus einer Hand</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Scissors, label: "Heckenschnitt" },
              { icon: TreePine, label: "Baumpflege & Baumfällung" },
              { icon: Leaf, label: "Rasenmähen & Rasenpflege" },
              { icon: Flower2, label: "Gartengestaltung" },
              { icon: Shovel, label: "Bepflanzung & Beete" },
              { icon: Layers, label: "Pflaster- & Wegebau" },
              { icon: Sparkles, label: "Gartenreinigung" },
              { icon: Hammer, label: "Zäune & Sichtschutz" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white rounded-2xl p-4 border border-[#d0e8c0] flex flex-col items-center text-center gap-2.5 shadow-sm">
                <div className="w-10 h-10 bg-[#eaf5e2] rounded-xl flex items-center justify-center">
                  <Icon size={20} className="text-[#3a7d1e]" />
                </div>
                <p className="text-xs font-semibold text-[#1a3a0a] leading-snug">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#6a7a60] mt-6">
            Sie haben etwas anderes im Sinn?{" "}
            <button onClick={() => { setSelected(null); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-[#3a7d1e] font-semibold underline underline-offset-2">
              Einfach anfragen →
            </button>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 px-4 text-xs text-[#8a9a80] border-t border-[#d0e8c0] bg-white">
        <p className="font-semibold text-[#4a5a40] mb-1">Green Boys – Baum & Gartenservice</p>
        <p>Bernau bei Berlin · Tätig im Umkreis von 50 km</p>
      </div>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/4915901444621"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe59] text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
        aria-label="WhatsApp"
      >
        <MessageSquare size={26} fill="white" />
      </a>
    </div>
  );
}
