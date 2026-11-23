import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div id="home" className="portfolio">
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Skills />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
