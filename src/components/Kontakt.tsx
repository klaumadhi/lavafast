import { useState, FormEvent } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type FormState = {
  emri: string
  email: string
  telefon: string
  kompania: string
  mesazhi: string
}
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Kontakt() {
  const ref = useScrollAnimation()
  const [form, setForm] = useState<FormState>({ emri: '', email: '', telefon: '', kompania: '', mesazhi: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/xkoqvvpj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ emri: '', email: '', telefon: '', kompania: '', mesazhi: '' })
    } catch (_e: unknown){
      setStatus('error')
    }
  }

  const inputClass = 'w-full bg-white border border-gray-200 text-ink placeholder-gray-300 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'

  return (
    <section
      id="kontakt"
      className="relative py-24"
      aria-labelledby="contact-heading"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #f7f9fc 0%, #eef4fc 100%)' }}
    >
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* Left info */}
          <div className="animate-on-scroll">
            <span className="block mb-3 font-mono text-xs tracking-widest text-blue-600 uppercase">— Na Kontaktoni</span>
            <h2 id="contact-heading" className="mb-6 text-5xl font-black leading-none font-condensed lg:text-6xl text-ink">
              FILLONI<br /><span className="text-blue-600">BASHKËPUNIMIN</span>
            </h2>
            <div className="w-16 h-1 mb-8 bg-blue-600" />
            <p className="mb-10 text-lg leading-relaxed text-gray-500">
              Dërgoni një kërkesë dhe ekipi ynë do t'ju kontaktojë sa më shpejt 
              me një ofertë të personalizuar për biznesin tuaj.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                { icon: '📍', label: 'Adresa', value: 'Rruga Vëllazënimi 12, Durrës 2000, Shqipëri' },
                { icon: '📞', label: 'Telefon', value: '+355 69 824 2023' },
                { icon: '📧', label: 'Email', value: 'lavafastal@gmail.com' },
                { icon: '🕐', label: 'Orari', value: '24/7 — Operojmë pa ndërprerje' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 text-lg bg-blue-600 w-11 h-11">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-mono text-xs tracking-widest text-blue-600 uppercase">{c.label}</div>
                    <div className="font-body text-gray-700 font-medium mt-0.5">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clients we serve */}
            <div className="p-6 mt-10 bg-white border border-gray-100 shadow-sm">
              <div className="mb-3 font-mono text-xs tracking-widest text-gray-400 uppercase">Shërbejmë</div>
              <div className="flex flex-wrap gap-2">
                {['Hotele 5★', 'Hotele 4★', 'Hotele 3★', 'Restorante', 'Spa & Wellness', 'Klinika', 'Konvikte'].map((tag) => (
                  <span key={tag} className="px-3 py-1 font-mono text-xs text-blue-700 border border-blue-100 bg-blue-50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="p-10 bg-white shadow-2xl animate-on-scroll shadow-blue-100/60">
            {status === 'success' ? (
              <div className="py-16 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl bg-blue-600">✓</div>
                <h3 className="mb-2 text-2xl font-black font-condensed text-ink">Faleminderit!</h3>
                <p className="text-gray-500">Kërkesa juaj u dërgua. Do t'ju kontaktojmë së shpejti.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 font-bold tracking-wider text-blue-600 uppercase transition-colors font-condensed hover:text-blue-700">
                  Dërgoni Kërkesë Tjetër →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulari i kontaktit">
                <div className="text-2xl font-black tracking-wide uppercase font-condensed text-ink mb-7">
                  Kërkesë Bashkëpunimi
                </div>

                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="emri" className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-1.5">Emri & Mbiemri *</label>
                    <input id="emri" name="emri" type="text" required placeholder="Emri juaj" value={form.emri} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="kompania" className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-1.5">Kompania / Hoteli</label>
                    <input id="kompania" name="kompania" type="text" placeholder="Emri i biznesit" value={form.kompania} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-1.5">Email *</label>
                    <input id="email" name="email" type="email" required placeholder="email@kompania.al" value={form.email} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="telefon" className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-1.5">Telefon</label>
                    <input id="telefon" name="telefon" type="tel" placeholder="+355 ..." value={form.telefon} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="mesazhi" className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-1.5">Mesazhi / Kërkesa</label>
                  <textarea id="mesazhi" name="mesazhi" rows={5} placeholder="Përshkruani nevojat tuaja — lloji i hoteli, volumet, frekuenca..." value={form.mesazhi} onChange={handleChange} className={`${inputClass} resize-none`} />
                </div>

                {status === 'error' && (
                  <p className="mb-4 text-sm text-center text-red-500">Diçka shkoi gabim. Ju lutemi provoni sërisht ose na telefononi.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-condensed font-black uppercase tracking-widest py-4 text-lg transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed shadow-xl shadow-blue-200"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="w-4 h-4 border-2 rounded-full border-white/40 border-t-white animate-spin" />
                      Duke dërguar...
                    </span>
                  ) : 'Dërgoni Kërkesën →'}
                </button>

                <p className="mt-4 font-mono text-xs text-center text-gray-300">
                  Përgjigjemi brenda 24 orëve
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
