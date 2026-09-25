import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import SiteFooter from './components/SiteFooter'

const App = () => {
  return (
    <main className="relative">
      <Nav />

      <section id="home" className="section-scroll-target">
        <Home />
      </section>

      <section id="about" className="section-scroll-target">
        <About />
      </section>

      <section id="projects" className="section-scroll-target">
        <Projects />
      </section>

      <section id="contact" className="section-scroll-target">
        <Contact />
      </section>

      <footer className="site-footer">
        <SiteFooter />
      </footer>
    </main>
  )
}

export default App
