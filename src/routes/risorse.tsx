import { createFileRoute, Link } from "@tanstack/react-router";
import libroCover from "@/assets/libro-patrizia.png";

export const Route = createFileRoute("/risorse")({
  head: () => ({
    meta: [
      { title: "Risorse ESG | Guide, normative e strumenti per PMI — sì sustainability intelligence" },
      { name: "description", content: "Risorse, guide e riferimenti normativi sulla sostenibilità per PMI italiane: CSRD, D.Lgs. 30/2026, KPI ESG, materialità e reporting." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Risorse ESG — sì sustainability intelligence" },
      { property: "og:description", content: "Guide, normative e strumenti pratici sulla sostenibilità per PMI italiane." },
    ],
    links: [
      { rel: "canonical", href: "https://www.sustainabilityintelligence.it/risorse" },
    ],
  }),
  component: RisorsePage,
});

type Resource = {
  category: string;
  title: string;
  description: string;
  href: string;
  type: string;
};

const resources: Resource[] = [
  {
    category: "Normativa",
    title: "Direttiva CSRD (UE 2022/2464)",
    description: "Il testo ufficiale della Corporate Sustainability Reporting Directive: ambito di applicazione, soggetti obbligati e tempistiche.",
    href: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX%3A32022L2464",
    type: "Testo ufficiale",
  },
  {
    category: "Normativa",
    title: "D.Lgs. 30/2026 — Green claims",
    description: "Il decreto italiano che recepisce le regole UE su dichiarazioni ambientali: obblighi di prova, sanzioni fino al 4% del fatturato.",
    href: "https://www.gazzettaufficiale.it/",
    type: "Decreto legislativo",
  },
  {
    category: "Standard",
    title: "ESRS — European Sustainability Reporting Standards",
    description: "Gli standard EFRAG che definiscono cosa rendicontare: ambiente (E1–E5), sociale (S1–S4), governance (G1).",
    href: "https://www.efrag.org/lab6",
    type: "Standard",
  },
  {
    category: "Standard",
    title: "VSME — Standard volontario per PMI",
    description: "Lo standard semplificato pensato per le piccole e medie imprese non quotate. Punto di partenza pragmatico per il reporting ESG.",
    href: "https://www.efrag.org/News/Public-490/EFRAG-publishes-the-final-Voluntary-SME-Standard",
    type: "Standard volontario",
  },
  {
    category: "Metodo",
    title: "Analisi di doppia materialità",
    description: "Come identificare i temi ESG che contano davvero per la tua impresa: impatto verso l'esterno e rischi/opportunità finanziarie.",
    href: "#",
    type: "Guida (in arrivo)",
  },
  {
    category: "Metodo",
    title: "KPI ESG misurabili per PMI",
    description: "Una selezione di indicatori essenziali per partire: emissioni Scope 1-2, consumi idrici, sicurezza sul lavoro, parità di genere.",
    href: "#",
    type: "Checklist (in arrivo)",
  },
  {
    category: "Dati",
    title: "CRIF ESG Outlook",
    description: "Report annuale sulla relazione tra profilo ESG e rischio di credito delle PMI italiane.",
    href: "https://www.crif.it/",
    type: "Report",
  },
  {
    category: "Dati",
    title: "ISPRA — Inventario nazionale emissioni",
    description: "Dati ufficiali su emissioni atmosferiche, fattori di emissione e bilanci ambientali nazionali.",
    href: "https://www.isprambiente.gov.it/",
    type: "Database",
  },
];

function RisorsePage() {
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <div className="min-h-screen bg-bg text-cream">
      <header className="border-b border-border-soft">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2" aria-label="Torna alla home">
            <span className="font-display font-black text-teal text-2xl leading-none">sì</span>
            <span className="font-mono text-muted text-[0.6rem] uppercase tracking-[0.18em] hidden sm:inline">sustainability intelligence</span>
          </Link>
          <Link to="/" className="font-mono uppercase text-[0.65rem] tracking-[0.18em] text-cream/80 hover:text-teal transition-colors">← Home</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="label-mono label-mono-teal">● RISORSE</div>
        <h1 className="mt-5 font-display font-black text-4xl sm:text-5xl lg:text-6xl">
          Strumenti, normative e <em className="italic text-teal">letture</em> sulla sostenibilità.
        </h1>
        <p className="mt-8 max-w-2xl text-cream/80 text-lg leading-relaxed">
          Una raccolta ragionata di riferimenti utili per orientarsi nella sostenibilità d'impresa: testi normativi, standard di rendicontazione, guide pratiche e fonti dati. Aggiornata periodicamente.
        </p>

        <section className="mt-20 px-6 sm:px-10 py-16 -mx-6 lg:-mx-10" style={{ backgroundColor: "#dde6d3", color: "#1a2e1a" }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src={libroCover}
                alt="Copertina del libro 'La sostenibilità è un dato di fatto' di Patrizia Parca"
                className="w-full max-w-sm shadow-2xl"
              />
            </div>
            <div>
              <div className="font-mono uppercase text-[0.7rem] tracking-[0.2em]" style={{ color: "#1a4d2e" }}>● IL LIBRO</div>
              <h2 className="mt-5 font-display font-black text-3xl sm:text-4xl" style={{ color: "#0f2818" }}>
                La sostenibilità è <em className="italic" style={{ color: "#1a4d2e" }}>«un dato di fatto»</em>
              </h2>
              <p className="mt-6 leading-relaxed" style={{ color: "#1a2e1a" }}>
                Il mio libro su perché la sostenibilità d'impresa non è più un'opzione, ma un dato di fatto. Un percorso pratico tra normativa, dati e metodo per chi guida una PMI e vuole trasformare gli obblighi ESG in vantaggio competitivo.
              </p>
              <p className="mt-4 leading-relaxed text-sm" style={{ color: "#3d4f3d" }}>
                Di Patrizia Parca.
              </p>
              <a
                href="https://www.amazon.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 font-mono uppercase text-xs tracking-[0.18em] transition-colors hover:opacity-90"
                style={{ backgroundColor: "#0f2818", color: "#dde6d3" }}
              >
                Acquista su Amazon →
              </a>
            </div>
          </div>
        </section>

        <div className="mt-16 space-y-16">
          {categories.map((cat) => (
            <section key={cat}>
              <h2 className="font-mono uppercase text-[0.7rem] tracking-[0.2em] text-teal border-b border-border-soft pb-3">
                {cat}
              </h2>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {resources
                  .filter((r) => r.category === cat)
                  .map((r) => (
                    <a
                      key={r.title}
                      href={r.href}
                      target={r.href.startsWith("http") ? "_blank" : undefined}
                      rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group block border border-border-soft p-6 hover:border-teal transition-colors"
                    >
                      <div className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                        {r.type}
                      </div>
                      <h3 className="mt-3 font-display text-xl text-cream group-hover:text-teal transition-colors">
                        {r.title}
                      </h3>
                      <p className="mt-3 text-cream/70 text-sm leading-relaxed">{r.description}</p>
                    </a>
                  ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-24 border-t border-border-soft pt-12">
          <p className="text-cream/70 leading-relaxed">
            Cerchi una risorsa specifica o vuoi proporne una?{" "}
            <Link to="/" hash="contatti" className="text-teal underline">
              Scrivimi
            </Link>
            .
          </p>
        </div>
      </main>

      <footer className="border-t border-border-soft py-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
            © {new Date().getFullYear()} Patrizia Parca · P.IVA 14729701004
          </span>
          <Link to="/" className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-cream/80 hover:text-teal transition-colors">
            ← Torna alla home
          </Link>
        </div>
      </footer>
    </div>
  );
}