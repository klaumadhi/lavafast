import { useScrollAnimation } from '../hooks/useScrollAnimation'

const pillars = [
  {
    icon: '✅',
    title: 'Korrektësi',
    text: 'Prioriteti ynë është korrektësia me klientët tanë. Çdo porosi përfundon në kohë, pa justifikime.',
  },
  {
    icon: '⚙️',
    title: 'Teknologji',
    text: 'Teknologjia e fundit na mundëson efiçencë maksimale në të gjitha aspektet e procesit të lavanderisë.',
  },
  {
    icon: '🏭',
    title: 'Kapacitet',
    text: 'Kemi mundësinë të lajmë, thajmë, hekurosim dhe palosim 1.000 KG në orë — kapaciteti më i lartë në Shqipëri.',
  },
  {
    icon: '⭐',
    title: 'Standart i Lartë',
    text: 'Detergjentët premium dhe stafi profesional bëjnë të mundur një pastërti perfekte për çdo artikull.',
  },
]

export default function PseNe() {
  const ref = useScrollAnimation()

  return (
    <section id="pse-ne" className="py-24 bg-white" aria-labelledby="why-heading" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="animate-on-scroll">
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest block mb-3">— Pse LavaFast</span>
            <h2 id="why-heading" className="font-condensed font-black text-5xl lg:text-6xl text-ink leading-none mb-6">
              PSE DUHET TË<br /><span className="text-blue-600">JEMI ZGJEDHJA</span><br />JUAJ
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-8" />
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Profesionalizmi dhe eksperienca jonë janë bashkuar me një investim kolosal — 
              me të madhin sot në Shqipëri — dhe me teknologjinë e fundit.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Këto na mundësojnë që t'i qëndrojmë gjithmonë korrektë klientëve dhe t'i 
              përgjigjemi gjithmonë në kohë, edhe në periudhën e fluksit.
            </p>

            {/* Location badge */}
            <div className="mt-10 inline-flex items-center gap-3 border border-blue-100 bg-blue-50 px-5 py-4">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-condensed font-bold text-ink">Rruga Vëllazënimi 12</div>
                <div className="font-mono text-xs text-gray-400">Durrës 2000, Shqipëri</div>
              </div>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="animate-on-scroll group p-7 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">{p.icon}</div>
                <h3 className="font-condensed font-bold text-xl text-ink mb-2 uppercase tracking-wide">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="animate-on-scroll mt-20 bg-ink p-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { v: 'Investim Kolosal', s: 'Teknologji e blerë e re' },
              { v: 'Staf Profesional', s: 'I trajnuar dhe i kualifikuar' },
              { v: 'Shqipëri e Tërë', s: 'Shërbim kombëtar' },
            ].map((item) => (
              <div key={item.v} className="border-r border-white/10 last:border-0 px-4">
                <div className="font-condensed font-black text-2xl text-blue-400 mb-1">{item.v}</div>
                <div className="font-mono text-xs text-white/40 uppercase tracking-wider">{item.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
