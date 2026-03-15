import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
  { value: '1.000', unit: 'KG/Orë', label: 'Kapacitet Total', desc: 'Mundësia jonë për të larë, tharë, hekurosur dhe palosur' },
  { value: '3.300', unit: 'mm', label: 'Gjerësi Flatwork', desc: 'Gjerësia e makinës hekurosjeje dhe palosëses' },
  { value: '4 + 4', unit: 'Makineri', label: 'Lavëse + Tharëse', desc: '4 lavatriçe dhe 4 tharëse prej 50 KG secila' },
  { value: '24/7', unit: '', label: 'Disponibël', desc: 'Operojmë pa ndërprerje për të përmbushur kërkesat tuaja' },
]

export default function Kapaciteti() {
  const ref = useScrollAnimation()

  return (
    <section
      id="kapaciteti"
      className="relative py-24 overflow-hidden"
      aria-labelledby="capacity-heading"
      ref={ref}
      style={{ background: 'linear-gradient(135deg, #060e2a 0%, #0a1840 100%)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Blue glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center animate-on-scroll">
          <span className="block mb-3 font-mono text-xs tracking-widest text-blue-400 uppercase">— Kapaciteti & Fuqia</span>
          <h2 id="capacity-heading" className="text-5xl font-black leading-none text-white font-condensed lg:text-7xl">
            KAPACITET<br /><span className="text-blue-500">MAKSIMAL</span>
          </h2>
        </div>

        {/* Big number highlight */}
        <div className="inline-block mb-16 text-center lg:block animate-on-scroll">
          <div className="relative inline-block">
            <div className="font-condensed font-black text-[120px] lg:text-[120px] leading-none text-stroke-blue select-none">
              1.000
            </div>
            <div className="absolute right-0 pl-4 text-left translate-x-full bottom-4 lg:block">
              <div className="text-2xl font-bold text-blue-400 font-condensed">KG / ORË</div>
              <div className="text-sm font-body text-white/50">Larim, Tharje,<br />Hekurosje & Palosje</div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-white/5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="p-8 text-center transition-colors duration-300 animate-on-scroll bg-white/3 hover:bg-blue-900/40"
              style={{ transitionDelay: `${i * 100}ms`, backgroundColor: 'rgba(255,255,255,0.03)' }}
            >
              <div className="mb-1 text-5xl font-black text-white font-condensed">
                {s.value}
                <span className="ml-1 text-2xl text-blue-400">{s.unit}</span>
              </div>
              <div className="mb-2 font-bold tracking-wider text-blue-400 uppercase font-condensed">{s.label}</div>
              <div className="text-xs leading-relaxed font-body text-white/40">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Equipment summary */}
        <div className="hidden p-8 mt-12 border animate-on-scroll border-blue-800/50 md:block">
          <div className="mb-6 font-mono text-xs tracking-widest text-center text-blue-500 uppercase">Inventari i Plotë i Makinerive</div>
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🫧', qty: '4×', name: 'Washer Extractors', sub: '50 KG secila' },
              { icon: '💨', qty: '4×', name: 'Tumble Dryers', sub: '50 KG secila' },
              { icon: '🏨', qty: '1×', name: 'Flatwork Ironer', sub: '3300mm' },
              { icon: '📦', qty: '1×', name: 'Folding Machine', sub: '3300mm' },
            ].map((item) => (
              <div key={item.name} className="p-5 transition-colors duration-300 border border-blue-800/30 hover:border-blue-500">
                <div className="mb-2 text-3xl">{item.icon}</div>
                <div className="text-2xl font-black text-blue-400 font-condensed">{item.qty}</div>
                <div className="text-sm font-bold text-white uppercase font-condensed">{item.name}</div>
                <div className="mt-1 font-mono text-xs text-white/30">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
