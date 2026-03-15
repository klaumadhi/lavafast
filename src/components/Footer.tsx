export default function Footer() {
  return (
    <footer className="pt-16 pb-8 text-white bg-ink" aria-label="Footer">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid gap-12 mb-12 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/images/logo.png" alt="LavaFast" className="object-contain w-auto h-10 mb-5 brightness-0 invert" />
            <p className="max-w-sm mb-6 text-sm leading-relaxed text-white/50">
              Lavanderia industriale më e madhe në Shqipëri. Shërbim profesional 
              lavanderie për hotelet dhe restorantet me teknologjinë e fundit.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Operojmë 24/7 — Disponibël gjithmonë
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-5 font-mono text-xs tracking-widest uppercase text-white/30">Navigimi</h3>
            <ul className="space-y-3">
              {[
                ['Kreu', '#hero'],
                ['Shërbimet', '#sherbimet'],
                ['Teknologjia', '#teknologjia'],
                ['Kapaciteti', '#kapaciteti'],
                ['Pse Ne', '#pse-ne'],
                ['Kontakt', '#kontakt'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm transition-colors text-white/50 hover:text-blue-400">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-mono text-xs tracking-widest uppercase text-white/30">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-mono text-xs text-white/30 mb-0.5">Adresa</div>
                <div className="text-sm text-white/60">Rruga Vëllazënimi 12<br />Durrës 2000, Shqipëri</div>
              </li>
              <li>
                <div className="font-mono text-xs text-white/30 mb-0.5">Telefon</div>
                <a href="tel:+355000000000" className="text-sm transition-colors text-white/60 hover:text-blue-400">+355 69 824 2023</a>
              </li>
              <li>
                <div className="font-mono text-xs text-white/30 mb-0.5">Email</div>
                <a href="mailto:info@lavafast.al" className="text-sm transition-colors text-white/60 hover:text-blue-400">info@lavafast.al</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-white/10 sm:flex-row">
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} LavaFast. Të gjitha të drejtat e rezervuara.
          </p>
          <p className="font-mono text-xs text-white/20">
            Lavanderia Industriale Nr.1 në Shqipëri · Durrës
          </p>
        </div>
      </div>
    </footer>
  )
}
