import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Teknologjia from './components/Teknologjia'
import Kapaciteti from './components/Kapaciteti'
import PseNe from './components/PseNe'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'

const WA_NUMBER = '355698242023'
const WA_MSG = 'Pershendetje! Do doja te informohesha me tej rreth sherbimeve tuaja!'

function App() {
  const waUrl = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_MSG)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Teknologjia />
        <Kapaciteti />
        <PseNe />
        <Kontakt />
      </main>
      <Footer />

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          backgroundColor: '#22c55e',
          borderRadius: '9999px',
          boxShadow: '0 8px 24px rgba(34,197,94,0.4)',
          transition: 'transform 0.2s ease, background-color 0.2s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.12)'
          e.currentTarget.style.backgroundColor = '#16a34a'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.backgroundColor = '#22c55e'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          width="28"
          height="28"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.74 5.494 2.035 7.807L.057 31.079a.75.75 0 00.916.916l7.272-1.978A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.25a13.21 13.21 0 01-6.748-1.853l-.356-.214-4.998 1.359 1.359-4.998-.214-.356A13.21 13.21 0 012.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25zm7.388-9.987c-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.298-.018-.459.13-.607.134-.133.298-.347.447-.52.148-.173.197-.297.297-.496.099-.198.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01s-.521.074-.793.372c-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.075-.124-.273-.198-.571-.347z" />
        </svg>
      </a>
    </>
  )
}

export default App
