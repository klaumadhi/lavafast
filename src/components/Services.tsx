import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    icon: '🫧',
    title: 'Larje Profesionale',
    desc: 'Lavatriçe industriale me kapacitet 50 KG secila. Procese të optimizuara për çdo lloj tekstili hoteli — çarçafë, peshqirë, uniforme.',
    detail: '4 × Washer Extractors 50 KG',
  },
  {
    icon: '💨',
    title: 'Tharje Industriale',
    desc: 'Tharëse të mëdha industriale me kapacitet 50 KG secila, që garantojnë tharje të plotë dhe higjienike.',
    detail: '4 × Tumble Dryers 50 KG',
  },
  {
    icon: '🏨',
    title: 'Hekurosje Flatwork',
    desc: 'Makinë hekurosjeje flatwork 3300mm — ideale për çarçafë, mbulesat e tavolinave dhe tekstile të mëdha hotelerie.',
    detail: 'Flatwork Ironer 3300mm',
  },
  {
    icon: '📦',
    title: 'Palosje Automatike',
    desc: 'Makinë palosëse 3300mm e lidhur direkt me hekurosësen. Rezultat perfekt dhe uniform për çdo produkt tekstil.',
    detail: 'Folder Machine 3300mm',
  },
  {
    icon: '🚗',
    title: 'Transportim & Logjistikë',
    desc: 'Grumbullim dhe kthim i brendshëm i tekstileve për hotelet partnerë. Orare të rregullta dhe të besueshme.',
    detail: 'Shërbim në të gjithë Shqipërinë',
  },
  {
    icon: '🧴',
    title: 'Detergjentet Premium',
    desc: 'Përdorim vetëm detergjente profesionale të certifikuara që garantojnë pastërti maksimale dhe ruajtje të fibrave.',
    detail: 'Produkte të Certifikuara',
  },
]

export default function Services() {
  const ref = useScrollAnimation()

  return (
    <section id="sherbimet" className="py-24 bg-white" aria-labelledby="services-heading" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <div className="animate-on-scroll">
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest block mb-3">— Shërbimet Tona</span>
            <h2 id="services-heading" className="font-condensed font-black text-5xl lg:text-6xl text-ink leading-none">
              ÇFARË<br /><span className="text-blue-600">OFROJMË</span>
            </h2>
          </div>
          <p className="animate-on-scroll text-gray-500 text-lg leading-relaxed lg:text-right">
            Nga larjen deri tek palosja — çdo hap i procesit është i automatizuar 
            dhe i kontrolluar me precizion maksimal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="animate-on-scroll bg-white p-8 group hover:bg-blue-600 transition-all duration-500 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">{s.icon}</div>
              <h3 className="font-condensed font-bold text-xl text-ink group-hover:text-white mb-2 transition-colors duration-300">{s.title}</h3>
              <p className="text-gray-500 group-hover:text-blue-100 text-sm leading-relaxed mb-4 transition-colors duration-300">{s.desc}</p>
              <div className="font-mono text-xs text-blue-600 group-hover:text-blue-200 uppercase tracking-wider transition-colors duration-300">
                ↳ {s.detail}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
