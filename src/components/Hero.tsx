import { useEffect, useState } from 'react'

const stats = [
  { value: '1.000', unit: 'KG/orë', label: 'Kapacitet' },
  { value: 'Nr.1', unit: '', label: 'Në Shqipëri' },
  { value: '24/7', unit: '', label: 'Disponibil' },
  { value: '100%', unit: '', label: 'Korrektësi' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden"
      aria-label="Faqja kryesore"
      style={{ background: 'linear-gradient(135deg, #060e2a 0%, #0a1535 50%, #0f2060 100%)' }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(26,111,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,212,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute rounded-full pointer-events-none top-1/3 left-1/4 w-96 h-96 bg-blue-700/20 blur-3xl" />
      <div className="absolute w-64 h-64 rounded-full pointer-events-none bottom-1/4 right-1/4 bg-blue-500/10 blur-3xl" />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 grid items-center w-full gap-12 px-6 pb-16 mx-auto max-w-7xl pt-28 lg:grid-cols-2">

        {/* LEFT: Text */}
        <div>
          {/* Tag */}
          <div className={`inline-flex items-center gap-2 border border-blue-500/40 text-blue-400 font-mono text-xs px-4 py-2 mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Durrës, Shqipëri · Teknologji e Fundit
          </div>

          {/* Headline */}
          <h1 className={`font-condensed font-black text-white leading-none mb-6 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block text-6xl tracking-tight lg:text-8xl">LAVANDERI</span>
            <span className="block text-6xl tracking-tight text-blue-500 lg:text-8xl">PËR HOTELE</span>
            <span className="block text-6xl tracking-tight lg:text-8xl text-stroke-blue">& RESTORANTE</span>
          </h1>

          <p className={`text-white/60 text-lg leading-relaxed max-w-lg mb-10 font-body transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            LavaFast është lavanderia me e madhe në Shqipëri me teknologjinë e fjalës së fundit. 
            Ofrojmë shërbim lavanderie për hotelet dhe restorantet në të gjithë Shqipërinë.
          </p>

          {/* CTA */}
          <div className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="#kontakt"
              className="px-8 py-4 text-lg font-bold tracking-wider text-white uppercase transition-all duration-200 bg-blue-600 shadow-2xl hover:bg-blue-500 font-condensed hover:-translate-y-1 shadow-blue-900/50"
            >
              Kerkoni Ofertë →
            </a>
            <a
              href="#teknologjia"
              className="px-8 py-4 text-lg font-bold tracking-wider uppercase transition-all duration-200 border border-white/20 hover:border-blue-400 text-white/70 hover:text-blue-300 font-condensed hover:-translate-y-1"
            >
              Teknologjia Jonë
            </a>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((s) => (
              <div key={s.label} className="pl-4 border-l-2 border-blue-600">
                <div className="text-3xl font-black leading-none text-white font-condensed">
                  {s.value}
                  <span className="ml-1 text-xl text-blue-400">{s.unit}</span>
                </div>
                <div className="mt-1 font-mono text-xs tracking-wider uppercase text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Washing machine image */}
        <div className={`relative flex items-center justify-center transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
          {/* Ring decoration */}
          <div className="absolute border rounded-full w-80 h-80 border-blue-600/20 animate-spin-slow" />
          <div className="absolute w-64 h-64 border rounded-full border-blue-500/10" />

          {/* Machine image */}
          <div className="relative z-10 animate-float">
            <img
              src="/images/washer.png"
              alt="Lavatrice industriale LavaFast 50KG"
              className="object-contain w-full max-w-sm machine-glow"
              width={500}
              height={500}
            />
          </div>

          {/* Floating info card */}
          <div className="absolute left-0 px-5 py-4 border shadow-2xl bottom-1 lg:bottom-5 bg-ink/90 border-blue-800/60 backdrop-blur-sm">
            <div className="mb-1 font-mono text-xs tracking-widest text-blue-400 uppercase">Lavatrice</div>
            <div className="text-xl font-bold text-white font-condensed">4 × 50 KG</div>
            <div className="font-mono text-xs text-white/40 mt-0.5">Washer Extractors</div>
          </div>

          {/* Top floating badge */}
          <div className="absolute right-0 px-4 py-3 bg-blue-600 shadow-xl top-4">
            <div className="text-2xl font-black leading-none text-white font-condensed">Nr. 1</div>
            <div className="font-mono text-xs tracking-wide text-blue-200 uppercase">Shqipëri</div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,20 L1440,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
