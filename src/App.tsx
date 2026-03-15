import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Teknologjia from './components/Teknologjia'
import Kapaciteti from './components/Kapaciteti'
import PseNe from './components/PseNe'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'

function App() {
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
    </>
  )
}

export default App
