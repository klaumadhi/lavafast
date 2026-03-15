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
      <div className="px-6 mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div className="animate-on-scroll">
            <span className="block mb-3 font-mono text-xs tracking-widest text-blue-600 uppercase">— Pse LavaFast</span>
            <h2 id="why-heading" className="mb-6 text-5xl font-black leading-none font-condensed lg:text-6xl text-ink">
              PSE DUHET TË<br /><span className="text-blue-600">JEMI ZGJEDHJA</span><br />JUAJ
            </h2>
            <div className="w-16 h-1 mb-8 bg-blue-600" />
            <p className="mb-8 text-lg leading-relaxed text-gray-500">
              Profesionalizmi dhe eksperienca jonë janë bashkuar me një investim kolosal — 
              me të madhin sot në Shqipëri — dhe me teknologjinë e fundit.
            </p>
            <p className="leading-relaxed text-gray-500">
              Këto na mundësojnë që t'i qëndrojmë gjithmonë korrektë klientëve dhe t'i 
              përgjigjemi gjithmonë në kohë, edhe në periudhën e fluksit.
            </p>

              {/* Google Maps Embed */}
            <div className="w-full mt-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📍</span>
                <span className="font-bold font-condensed text-ink">Rruga Vellazerimi 12, Durrës 2001</span>
              </div>
              <div className="relative w-full h-56 overflow-hidden border border-blue-100 shadow-md">
                <iframe
                  title="LavaFast Location — Durrës, Shqipëri"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d204!2d19.4726472!3d41.331555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzUzLjYiTiAxOcKwMjgnMjEuNiJF!5e1!3m2!1sen!2sal!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Overlay link to open in Google Maps */}
                <a
                  href="https://www.google.com/maps/place/8FJF%2BH4G,+Rruga+Vellazerimi,+Durr%C3%ABs,+Albania/@41.3313464,19.4722679,364m/data=!3m1!1e3!4m15!1m8!3m7!1s0x134fd97c5fbbbcc7:0x77f377eae6cd81ee!2sDurr%C3%ABs,+Albania!3b1!8m2!3d41.3245904!4d19.4564686!16zL20vMDFuMmdy!3m5!1s0x134fda02a5672acf:0x4e476cd3e41b69aa!8m2!3d41.3314541!4d19.4728791!16s%2Fg%2F11l5dclqp0?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs px-3 py-1.5 transition-colors duration-200 shadow-lg"
                >
                  Hap në Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="transition-all border border-gray-100 animate-on-scroll group p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110 w-fit">{p.icon}</div>
                <h3 className="mb-2 text-xl font-bold tracking-wide uppercase font-condensed text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="p-8 mt-20 animate-on-scroll bg-ink">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { v: 'Investim Kolosal', s: 'Teknologji e blerë e re' },
              { v: 'Staf Profesional', s: 'I trajnuar dhe i kualifikuar' },
              { v: 'Shqipëri e Tërë', s: 'Shërbim kombëtar' },
            ].map((item) => (
              <div key={item.v} className="px-4 border-r border-white/10 last:border-0">
                <div className="mb-1 text-2xl font-black text-blue-400 font-condensed">{item.v}</div>
                <div className="font-mono text-xs tracking-wider uppercase text-white/40">{item.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
