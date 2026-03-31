import { useScrollAnimation } from '../hooks/useScrollAnimation'

const machines = [
  {
    id: 'washer',
    img: '/images/washer.png',
    label: 'Washer Extractor',
    name: 'Lavatriçe Industriale',
    qty: '',
    capacity: '50 KG / secila',
    desc: 'Lavatriçe industriale me kapacitet 50 KG, me sistem ekstraksioni të avancuar që largon lagështinë maksimale para tharjes.',
    specs: ['Kapacitet: 50 KG', 'G-faktor i lartë', 'Program i programueshëm', 'Konsum i ulët energjie'],
  },
  {
    id: 'dryer',
    img: '/images/dryer.jpg',
    label: 'Tumble Dryer',
    name: 'Tharëse Industriale',
    qty: '',
    capacity: '50 KG / secila',
    desc: 'Tharëse të mëdha industriale me teknologji moderne të kontrollit të temperaturës për rezultate perfekte pa dëmtuar tekstilet.',
    specs: ['Kapacitet: 50 KG', 'Kontroll temperaturi', 'Timer dixhital', 'Energji-efikase'],
  },
  {
    id: 'iron',
    img: '/images/iron.jpg',
    label: 'Flatwork Ironer',
    name: 'Hekurosëse Flatwork',
    qty: '',
    capacity: '3300 mm gjerësi',
    desc: 'Hekurosëse industriale flatwork me gjerësi 3300mm — e lidhur direkt me makinën palosëse. Ideal për çarçafë dhe tekstile hotelerie.',
    specs: ['Gjerësi: 3300mm', 'Shpejtësi e rregullueshme', 'Sistem automatik', 'E lidhur me folder'],
  },
  {
    id: 'folder',
    img: '/images/folder.jpg',
    label: 'Folding Machine',
    name: 'Makinë Palosëse',
    qty: '',
    capacity: '3300 mm gjerësi',
    desc: 'Makinë palosëse automatike 3300mm e lidhur në linjë me hekurosësen — prodhon çarçafë të palosura në mënyrë perfekte.',
    specs: ['Gjerësi: 3300mm', 'Palosje automatike', 'Linjë me Ironer', 'Output i lartë'],
  },
]

export default function Teknologjia() {
  const ref = useScrollAnimation()

  return (
    <section
      id="teknologjia"
      className="py-24 diagonal-cut-reverse"
      style={{ background: 'linear-gradient(180deg, #f7f9fc 0%, #eef4fc 100%)' }}
      aria-labelledby="tech-heading"
      ref={ref}
    >
      <div className="px-6 mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center animate-on-scroll">
          <span className="block mb-3 font-mono text-xs tracking-widest text-blue-600 uppercase">— Makineritë Tona</span>
          <h2 id="tech-heading" className="mb-4 text-5xl font-black leading-none font-condensed lg:text-6xl text-ink">
            TEKNOLOGJIA<br /><span className="text-blue-600">E FUNDIT</span>
          </h2>
          <p className="text-lg text-gray-500">
            Investim kolosal në makineritë më të avancuara industriale — 
            e vetmja lavanderi në Shqipëri me këtë nivel teknologjie.
          </p>
        </div>

        {/* Machines */}
        <div className="space-y-6">
          {machines.map((m, i) => (
            <div
              key={m.id}
              className={`animate-on-scroll grid lg:grid-cols-2 gap-0 bg-white shadow-xl shadow-blue-100/50 overflow-hidden ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image side */}
              <div className="relative bg-gradient-to-br from-blue-950 to-blue-800 flex items-center justify-center p-12 min-h-64 lg:[direction:ltr]">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <img
                  src={m.img}
                  alt={m.name}
                  className="relative z-10 object-contain w-auto max-h-52 machine-glow"
                />
                <div className="absolute font-mono text-xs tracking-widest text-blue-400 uppercase top-4 left-4">{m.label}</div>
                <div className="absolute text-right bottom-4 right-4">
                  <div className="text-3xl font-black leading-none text-white font-condensed">{m.qty}</div>
                  <div className="font-mono text-xs text-blue-300">{m.capacity}</div>
                </div>
              </div>

              {/* Text side */}
              <div className="p-10 lg:[direction:ltr] flex flex-col justify-center">
                <h3 className="mb-2 text-3xl font-black font-condensed text-ink">{m.name}</h3>
                <p className="mb-6 leading-relaxed text-gray-500">{m.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {m.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
