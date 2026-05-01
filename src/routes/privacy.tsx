import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Informativa Privacy | sì sustainability intelligence" },
      { name: "description", content: "Informativa sul trattamento dei dati personali ai sensi del Reg. UE 2016/679 (GDPR) per il sito sì sustainability intelligence di Patrizia Parca." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg text-cream">
      <header className="border-b border-border-soft">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2" aria-label="Torna alla home">
            <span className="font-display font-black text-teal text-2xl leading-none">sì</span>
            <span className="font-mono text-muted text-[0.6rem] uppercase tracking-[0.18em] hidden sm:inline">sustainability intelligence</span>
          </Link>
          <Link to="/" className="font-mono uppercase text-[0.65rem] tracking-[0.18em] text-cream/80 hover:text-teal transition-colors">← Home</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <div className="label-mono label-mono-teal">● INFORMATIVA PRIVACY</div>
        <h1 className="mt-5 font-display font-black text-4xl sm:text-5xl">Privacy Policy</h1>
        <p className="mt-6 text-cream/60 text-sm font-mono uppercase tracking-[0.15em]">Ultimo aggiornamento: maggio 2026</p>

        <div className="mt-12 space-y-8 text-cream/80 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-cream mb-3">1. Titolare del trattamento</h2>
            <p>Titolare del trattamento dei dati è <strong>Patrizia Parca</strong>, P.IVA 14729701004, contattabile all'indirizzo <a href="mailto:info@sustainabilityintelligence.it" className="text-teal underline">info@sustainabilityintelligence.it</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-cream mb-3">2. Dati raccolti</h2>
            <p>Il sito raccoglie i dati personali che l'utente fornisce volontariamente:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Indirizzo email (per richieste di contatto e iscrizione alla greenletter)</li>
              <li>Nome e altri dati eventualmente forniti tramite email</li>
              <li>Dati di navigazione anonimi (eventuali cookie tecnici)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-cream mb-3">3. Finalità del trattamento</h2>
            <p>I dati sono trattati esclusivamente per:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Rispondere alle richieste di informazioni e contatto</li>
              <li>Inviare la greenletter mensile (previo consenso esplicito)</li>
              <li>Adempimenti di legge e contabili</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-cream mb-3">4. Greenletter e consenso</h2>
            <p>L'iscrizione alla greenletter, gestita tramite la piattaforma Substack, è volontaria e basata sul consenso dell'utente. È possibile disiscriversi in qualsiasi momento utilizzando il link presente in fondo a ogni email. Per ulteriori informazioni si rimanda alla <a href="https://substack.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal underline">privacy policy di Substack</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-cream mb-3">5. Base giuridica</h2>
            <p>Il trattamento dei dati avviene sulla base del consenso dell'interessato (art. 6, par. 1, lett. a del GDPR) e, ove applicabile, per l'esecuzione di misure precontrattuali (art. 6, par. 1, lett. b).</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-cream mb-3">6. Conservazione dei dati</h2>
            <p>I dati sono conservati per il tempo strettamente necessario alle finalità per le quali sono stati raccolti, e comunque non oltre il momento in cui l'utente ne richiede la cancellazione.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-cream mb-3">7. Diritti dell'interessato</h2>
            <p>L'utente può esercitare in qualsiasi momento i diritti previsti dagli artt. 15-22 del GDPR: accesso, rettifica, cancellazione, limitazione, portabilità, opposizione e revoca del consenso. Per esercitare tali diritti scrivere a <a href="mailto:info@sustainabilityintelligence.it" className="text-teal underline">info@sustainabilityintelligence.it</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-cream mb-3">8. Reclami</h2>
            <p>L'interessato ha diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-teal underline">www.garanteprivacy.it</a>).</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border-soft">
          <Link to="/" className="font-mono uppercase text-xs tracking-[0.2em] text-teal hover:underline">← Torna alla home</Link>
        </div>
      </main>
    </div>
  );
}