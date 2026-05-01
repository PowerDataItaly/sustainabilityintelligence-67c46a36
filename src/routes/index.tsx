import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import patriziaImg from "@/assets/patrizia.jpg";
import sketchBank from "@/assets/sketch-bank.png";
import sketchLeaf from "@/assets/sketch-leaf.png";
import sketchScale from "@/assets/sketch-scale.png";
import sketchFactory from "@/assets/sketch-factory.png";
import sketchBook from "@/assets/sketch-book.png";
import sketchChart from "@/assets/sketch-chart.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patrizia Parca | Consulente ESG e Reporting di Sostenibilità per PMI — sì sustainability intelligence" },
      { name: "description", content: "Patrizia Parca, consulente ESG e data analyst. Aiuto le PMI italiane a misurare le performance di sostenibilità, costruire reporting ESG conformi a CSRD e D.Lgs. 30/2026 e leggere i dati per decidere." },
      { name: "keywords", content: "consulente ESG, reporting sostenibilità PMI, CSRD Italia, D.Lgs 30 2026 green claims, KPI sostenibilità, ESG reporting Italia, analisi materialità, Patrizia Parca, sustainability intelligence" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Patrizia Parca | Consulente ESG — sì sustainability intelligence" },
      { property: "og:description", content: "Consulenza ESG per PMI italiane: KPI misurabili, reporting CSRD, dashboard di sostenibilità e adeguamento normativo." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.sustainabilityintelligence.it/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "sì sustainability intelligence",
          description: "Consulenza ESG e reporting di sostenibilità per PMI italiane",
          url: "https://www.sustainabilityintelligence.it",
          founder: {
            "@type": "Person",
            name: "Patrizia Parca",
            jobTitle: "Consulente ESG e Data Analyst",
            sameAs: "https://www.linkedin.com/in/patriziaparca/",
          },
          areaServed: { "@type": "Country", name: "Italia" },
          serviceType: [
            "Consulenza ESG",
            "ESG Reporting",
            "CSRD compliance",
            "Data visualization sostenibilità",
            "Analisi di materialità",
          ],
          inLanguage: "it",
        }),
      },
    ],
  }),
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#hero" className={`flex items-baseline gap-2 ${className}`} aria-label="sì sustainability intelligence — home">
      <span className="font-display font-black text-teal text-2xl leading-none">sì</span>
      <span className="font-mono text-muted text-[0.6rem] uppercase tracking-[0.18em] hidden sm:inline">sustainability intelligence</span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#servizi", label: "Servizi" },
    { href: "#normativa", label: "Normativa" },
    { href: "#chi-sono", label: "Chi sono" },
    { href: "#contatti", label: "Contatti" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ backgroundColor: "rgba(11,11,16,0.88)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-mono uppercase text-[0.65rem] tracking-[0.18em] text-cream/80 hover:text-teal transition-colors">{l.label}</a>
          ))}
          <a href="#contatti" className="font-mono uppercase text-[0.65rem] tracking-[0.18em] border border-teal text-teal px-4 py-2 hover:bg-teal hover:text-bg transition-colors">Parliamone</a>
        </nav>
        <button className="md:hidden text-cream font-mono text-xs uppercase tracking-widest" onClick={() => setOpen((v) => !v)} aria-label="Apri menu">
          {open ? "Chiudi" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border-soft px-6 py-6 flex flex-col gap-5" style={{ backgroundColor: "var(--bg)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-mono uppercase text-xs tracking-[0.18em] text-cream/80">{l.label}</a>
          ))}
          <a href="#contatti" onClick={() => setOpen(false)} className="font-mono uppercase text-xs tracking-[0.18em] border border-teal text-teal px-4 py-3 inline-block w-fit">Parliamone</a>
        </div>
      )}
    </header>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1">
      <div className="font-display font-black text-teal text-5xl md:text-6xl leading-none">{value}</div>
      <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-muted leading-relaxed">{label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 radial-teal overflow-hidden">
      <img src={sketchLeaf} alt="" aria-hidden className="sketch sketch-dark absolute -top-10 -left-16 w-72 rotate-[-15deg] hidden md:block" width={768} height={768} />
      <img src={sketchChart} alt="" aria-hidden className="sketch sketch-dark absolute bottom-8 right-4 w-40 hidden lg:block" width={768} height={768} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12 lg:gap-16 items-center relative">
        <div className="lg:col-span-3 reveal">
          <div className="label-mono label-mono-teal flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal" /> CONSULENZA ESG PER PMI
          </div>
          <h1 className="mt-6 font-display font-black text-cream text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            Misurare la sostenibilità è l'unico modo per <em className="italic text-teal">dimostrarla</em>.
          </h1>
          <p className="mt-8 text-cream/80 max-w-2xl text-lg leading-relaxed">
            Patrizia Parca, data analyst specializzata in ESG e sostenibilità aziendale. Aiuto le PMI a costruire sistemi di misurazione reali: indicatori verificabili, dashboard leggibili, reporting conformi a CSRD e D.Lgs. 30/2026. Senza piattaforme da acquistare. Solo analisi, dati e metodo.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 border-t border-border-soft pt-10">
            <Stat value="4%" label="Del fatturato in sanzioni per green claims non documentati (D.Lgs. 30/2026)" />
            <Stat value="25%" label="Riduzione del rischio di default per PMI con buon profilo ESG (CRIF ESG Outlook 2025)" />
            <Stat value="2026" label="Anno dei primi report ESG obbligatori in Europa e in Cina" />
          </div>
        </div>
        <div className="lg:col-span-2 reveal">
          <div className="relative">
            <div className="absolute -inset-2 border border-teal/30 -z-0" />
            <img src={patriziaImg} alt="Patrizia Parca, consulente ESG e data analyst, fondatrice di sì sustainability intelligence" width={1024} height={1024} className="relative w-full aspect-[4/5] object-cover grayscale-[20%]" />
          </div>
          <div className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.2em]">
            <div className="text-cream">Patrizia Parca</div>
            <div className="text-muted mt-1">Data analyst · ESG reporting</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { n: "01", h: "KPI di sostenibilità misurabili nel tempo", p: "Definisco indicatori calibrati sulla tua impresa. Non copiati da framework che non considerano settore, dimensione e posizione nella filiera." },
  { n: "02", h: "ESG Reporting e adeguamento CSRD", p: "CSRD, D.Lgs. 30/2026 sui green claims, standard ESRS e GRI. Accompagno le PMI nell'adeguamento concreto, non in quello dichiarativo." },
  { n: "03", h: "Dashboard e data visualization per la sostenibilità", p: "Dashboard costruite per chi usa i dati per decidere, non per chi li ha prodotti. Leggibilità prima di estetica." },
  { n: "04", h: "Analisi di materialità ESG", p: "Identifico i rischi e le opportunità ESG rilevanti per l'impresa specifica. Non tutti i temi di sostenibilità pesano allo stesso modo su tutti i settori." },
  { n: "05", h: "Rendicontazione di sostenibilità", p: "Report costruiti su dati verificabili e serie storiche. Un bilancio di sostenibilità senza dati alle spalle è una brochure." },
  { n: "06", h: "Formazione interna su data literacy e ESG", p: "Percorsi per i team aziendali: come leggere un indicatore ESG, come raccogliere dati in modo strutturato, come usarli per decidere." },
];

function Servizi() {
  return (
    <section id="servizi" className="section-light py-24 lg:py-32 border-t border-border-soft relative overflow-hidden">
      <img src={sketchLeaf} alt="" aria-hidden className="sketch sketch-light absolute top-10 right-6 w-48 rotate-12 hidden md:block" width={768} height={768} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl reveal">
          <div className="label-mono label-mono-teal">● 01 / Servizi</div>
          <h2 className="mt-5 font-display font-black text-3xl sm:text-4xl lg:text-5xl">
            Consulenza ESG su misura per la tua <em className="italic">PMI</em>
          </h2>
          <p className="mt-6 text-ink/75 text-lg">
            Lavoro su sei aree, sempre con dati alla base. Nessun report parte dalla struttura narrativa: parte dalla raccolta e dalla verifica dei dati.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-px" style={{ background: "rgba(11,20,16,0.12)", border: "1px solid rgba(11,20,16,0.12)" }}>
          {services.map((s, i) => (
            <article key={s.n} className="card-corner p-8 lg:p-10 reveal" style={{ transitionDelay: `${i * 60}ms`, background: "var(--light-bg)" }}>
              <div className="flex items-start justify-between gap-6">
                <div className="font-mono text-xs tracking-[0.2em]" style={{ color: "var(--teal-deep)" }}>{s.n}</div>
                <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: "rgba(11,20,16,0.5)" }}>Service</div>
              </div>
              <h3 className="mt-6 font-display text-2xl lg:text-[1.7rem] leading-tight">{s.h}</h3>
              <p className="mt-5 leading-relaxed" style={{ color: "rgba(11,20,16,0.7)" }}>{s.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const norma = [
  {
    label: "EUROPA · CSRD E OMNIBUS PACKAGE",
    h: "L'Omnibus riduce il perimetro diretto. La filiera rimane esposta.",
    p: "Il pacchetto Omnibus ha alzato le soglie e ridotto gli obblighi diretti della CSRD. Il punto che molte PMI sottovalutano: le grandi aziende soggette alla direttiva devono raccogliere dati lungo tutta la supply chain. Chi non ha indicatori non ha risposta da dare ai propri clienti grandi.",
  },
  {
    label: "ITALIA · D.LGS. 30/2026 · GREEN CLAIMS",
    h: "Dal 2026 ogni dichiarazione ambientale deve essere documentata.",
    p: "\"Prodotto sostenibile\", \"carbon neutral\", \"rispettoso dell'ambiente\": dal 2026 queste affermazioni richiedono dati verificabili alla base. Sanzioni fino al 4% del fatturato annuo per chi comunica senza documentazione. Non è una questione di immagine. È di bilancio.",
  },
  {
    label: "CREDITO BANCARIO · CRIF ESG OUTLOOK 2025",
    h: "Le banche usano già i dati ESG per valutare il rischio di credito.",
    p: "Nel 2024 il 39% del credito alle PMI italiane è andato a imprese con buon profilo ESG, contro il 25% del 2023. A parità di bilancio, due aziende identiche possono avere un rischio di default che differisce fino al 70%. I dati vengono prima del finanziamento.",
  },
];

function Normativa() {
  return (
    <section id="normativa" className="py-24 lg:py-32 bg-bg2 border-t border-border-soft relative overflow-hidden">
      <img src={sketchBank} alt="" aria-hidden className="sketch sketch-dark absolute top-16 right-4 w-72 hidden lg:block" width={768} height={768} />
      <img src={sketchFactory} alt="" aria-hidden className="sketch sketch-dark absolute bottom-10 left-2 w-56 hidden lg:block" width={768} height={768} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 relative">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 reveal">
            <div className="label-mono label-mono-teal">● 02 / Normativa</div>
            <h2 className="mt-5 font-display font-black text-cream text-3xl sm:text-4xl lg:text-5xl">
              Cosa cambia per le PMI italiane tra il <em className="italic text-teal">2026 e il 2030</em>
            </h2>
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-px bg-border-soft border border-border-soft">
          {norma.map((c, i) => (
            <article key={i} className="card-corner bg-bg2 p-8 lg:p-10 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="label-mono label-mono-teal">{c.label}</div>
              <h3 className="mt-5 font-display text-cream text-2xl lg:text-3xl leading-tight">{c.h}</h3>
              <p className="mt-5 text-cream/70 leading-relaxed">{c.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChiSono() {
  return (
    <section id="chi-sono" className="section-light py-24 lg:py-32 border-t border-border-soft relative overflow-hidden">
      <img src={sketchBook} alt="" aria-hidden className="sketch sketch-light absolute top-12 right-10 w-44 -rotate-6 hidden md:block" width={768} height={768} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-14 items-start relative">
        <div className="lg:col-span-3 reveal">
          <div className="label-mono label-mono-teal">● 03 / Chi sono</div>
          <h2 className="mt-5 font-display font-black text-3xl sm:text-4xl lg:text-5xl">
            Patrizia Parca, data analyst e <em className="italic">consulente ESG</em>.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed" style={{ color: "rgba(11,20,16,0.8)" }}>
            <p>Lavoro sulla sostenibilità aziendale come analista: parto dai dati, costruisco gli indicatori, leggo i numeri prima di scrivere qualsiasi cosa.</p>
            <p>Prima di specializzarmi in ESG ho lavorato per quindici anni nel marketing e nella brand identity per PMI italiane. Quella formazione mi ha insegnato una cosa: la comunicazione regge solo se c'è sostanza sotto. Nella sostenibilità, quella sostanza sono i dati.</p>
            <p>Ho un percorso in economia, una specializzazione in data analysis e una pratica quotidiana su reporting ESG, normativa europea e analisi quantitativa applicata alla sostenibilità d'impresa. Sono la fondatrice di sì sustainability intelligence e l'autrice di Dati di Fatto, una guida all'analisi dei dati per le PMI.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {["[ESG REPORTING]", "[DATA ANALYSIS]", "[CSRD · D.LGS. 30/2026]"].map((t) => (
              <span key={t} className="font-mono text-[0.65rem] uppercase tracking-[0.18em] px-3 py-2" style={{ color: "var(--teal-deep)", border: "1px solid rgba(31,107,90,0.4)" }}>{t}</span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 reveal">
          <div className="relative">
            <div className="absolute -inset-2" style={{ border: "1px solid rgba(31,107,90,0.35)" }} />
            <img src={patriziaImg} alt="Ritratto di Patrizia Parca, fondatrice di sì sustainability intelligence" loading="lazy" width={1024} height={1024} className="relative w-full aspect-square object-cover" />
          </div>
          <div className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] space-y-1">
            <div style={{ color: "var(--ink)" }}>Patrizia Parca</div>
            <div style={{ color: "rgba(11,20,16,0.55)" }}>Data analyst · ESG reporting</div>
            <div style={{ color: "rgba(11,20,16,0.55)" }}>Roma, Italia</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const metodo = [
  { h: "Prima i dati, poi il report", p: "Nessun documento di sostenibilità parte dalla struttura narrativa. Parte dalla raccolta dati. Se i dati non esistono ancora, costruisco il processo per averli prima di scrivere qualsiasi cosa." },
  { h: "Indicatori reali, non proxy", p: "KPI calibrati sull'impresa specifica. Non copiati da framework generici che non considerano settore, dimensione o posizione nella filiera." },
  { h: "Dashboard per chi decide", p: "I dati devono essere leggibili da chi li usa per prendere decisioni, non solo da chi li ha prodotti. Costruisco visualizzazioni che funzionano anche quando la consulente non è in sala." },
];

function Metodo() {
  return (
    <section id="metodo" className="py-24 lg:py-32 bg-bg2 border-t border-border-soft relative overflow-hidden">
      <img src={sketchScale} alt="" aria-hidden className="sketch sketch-dark absolute top-10 right-8 w-56 hidden md:block" width={768} height={768} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl reveal">
          <div className="label-mono label-mono-teal">● 04 / Metodo</div>
          <h2 className="mt-5 font-display font-black text-cream text-3xl sm:text-4xl lg:text-5xl">
            I dati vengono prima delle <em className="italic text-teal">parole</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-border-soft border border-border-soft">
          {metodo.map((m, i) => (
            <div key={i} className="card-corner bg-bg2 p-8 lg:p-10 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="font-mono text-teal text-xs tracking-[0.2em]">0{i + 1}</div>
              <h3 className="mt-6 font-display text-cream text-2xl leading-tight">{m.h}</h3>
              <p className="mt-5 text-cream/70 leading-relaxed">{m.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contatti() {
  return (
    <section id="contatti" className="section-light py-32 lg:py-40 border-t border-border-soft relative overflow-hidden">
      <img src={sketchChart} alt="" aria-hidden className="sketch sketch-light absolute bottom-6 left-6 w-40 -rotate-3 hidden md:block" width={768} height={768} />
      <img src={sketchLeaf} alt="" aria-hidden className="sketch sketch-light absolute top-10 right-10 w-44 rotate-12 hidden md:block" width={768} height={768} />
      <div className="max-w-3xl mx-auto px-6 text-center reveal relative">
        <div className="label-mono label-mono-teal flex items-center justify-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--teal-deep)" }} /> PARLIAMONE
        </div>
        <h2 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl">
          Le lamentele non compaiono nei bilanci. <em className="italic"><span className="highlight-mark">I ritardi sì.</span></em>
        </h2>
        <p className="mt-8 text-lg leading-relaxed" style={{ color: "rgba(11,20,16,0.75)" }}>
          Se vuoi costruire un reporting ESG serio, con dati verificabili, indicatori che reggono nel tempo e un adeguamento normativo reale, scrivimi. Nessun preventivo standard: ogni PMI ha una situazione diversa.
        </p>
        <div className="mt-12 flex flex-col items-center gap-6">
          <a href="mailto:info@sustainabilityintelligence.it" className="inline-block font-mono uppercase text-xs tracking-[0.2em] px-8 py-4 transition-colors" style={{ background: "var(--ink)", color: "var(--light-bg)" }}>
            Scrivimi
          </a>
          <div className="font-mono text-xs uppercase tracking-[0.18em] space-y-1" style={{ color: "rgba(11,20,16,0.55)" }}>
            <div>info@sustainabilityintelligence.it</div>
            <div>Roma, Italia — disponibile anche da remoto</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border-soft py-14 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <Logo />
            <p className="mt-5 text-muted text-sm max-w-md leading-relaxed">
              Consulente ESG e reporting di sostenibilità per PMI italiane. Adeguamento CSRD, D.Lgs. 30/2026, KPI ESG, dashboard e analisi di materialità. Roma, Italia.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-6">
            {["Servizi", "Normativa", "Chi sono", "Metodo", "Contatti"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-cream/70 hover:text-teal transition-colors">{l}</a>
            ))}
          </nav>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted space-y-1 text-right">
            <div>Patrizia Parca · Data Analyst · ESG Reporting</div>
            <div>P.IVA [da inserire] · info@sustainabilityintelligence.it</div>
            <div>© 2026 sì sustainability intelligence</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-bg text-cream">
      <Nav />
      <main>
        <Hero />
        <Servizi />
        <Normativa />
        <ChiSono />
        <Metodo />
        <Contatti />
      </main>
      <Footer />
    </div>
  );
}
