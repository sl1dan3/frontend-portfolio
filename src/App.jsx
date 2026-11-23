import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div id="home" className="portfolio">
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
      </main>
    </div>
  )
}

export default App
