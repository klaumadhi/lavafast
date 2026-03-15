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
      className="py-24 relative overflow-hidden"
      aria-labelledby="capacity-heading"
      ref={ref}
      style={{ background: 'linear-gradient(135deg, #060e2a 0%, #0a1840 100%)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Blue glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block mb-3">— Kapaciteti & Fuqia</span>
          <h2 id="capacity-heading" className="font-condensed font-black text-5xl lg:text-7xl text-white leading-none">
            KAPACITET<br /><span className="text-blue-500">MAKSIMAL</span>
          </h2>
        </div>

        {/* Big number highlight */}
        <div className="animate-on-scroll text-center mb-16">
          <div className="inline-block relative">
            <div className="font-condensed font-black text-[120px] lg:text-[180px] leading-none text-stroke-blue select-none">
              1.000
            </div>
            <div className="absolute bottom-4 right-0 translate-x-full pl-4 text-left hidden lg:block">
              <div className="font-condensed font-bold text-blue-400 text-2xl">KG / ORË</div>
              <div className="font-body text-white/50 text-sm">Larim, Tharje,<br />Hekurosje & Palosje</div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="animate-on-scroll bg-white/3 p-8 text-center hover:bg-blue-900/40 transition-colors duration-300"
              style={{ transitionDelay: `${i * 100}ms`, backgroundColor: 'rgba(255,255,255,0.03)' }}
            >
              <div className="font-condensed font-black text-5xl text-white mb-1">
                {s.value}
                <span className="text-blue-400 text-2xl ml-1">{s.unit}</span>
              </div>
              <div className="font-condensed font-bold text-blue-400 uppercase tracking-wider mb-2">{s.label}</div>
              <div className="font-body text-white/40 text-xs leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Equipment summary */}
        <div className="animate-on-scroll mt-12 border border-blue-800/50 p-8">
          <div className="font-mono text-xs text-blue-500 uppercase tracking-widest mb-6 text-center">Inventari i Plotë i Makinerive</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🫧', qty: '4×', name: 'Washer Extractors', sub: '50 KG secila' },
              { icon: '💨', qty: '4×', name: 'Tumble Dryers', sub: '50 KG secila' },
              { icon: '🏨', qty: '1×', name: 'Flatwork Ironer', sub: '3300mm' },
              { icon: '📦', qty: '1×', name: 'Folding Machine', sub: '3300mm' },
            ].map((item) => (
              <div key={item.name} className="border border-blue-800/30 p-5 hover:border-blue-500 transition-colors duration-300">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-condensed font-black text-blue-400 text-2xl">{item.qty}</div>
                <div className="font-condensed font-bold text-white text-sm uppercase">{item.name}</div>
                <div className="font-mono text-xs text-white/30 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
