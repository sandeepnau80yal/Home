import { useEffect, useRef, useState } from 'react'

const sections = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
]

const Nav = () => {
  const [active, setActive] = useState('home')
  const programmaticScrollRef = useRef(false)

  useEffect(() => {
    let frame = 0
    let settleTimer

    const findActiveSection = () => {
      const activationLine = Math.min(window.innerHeight * 0.3, 180)
      const currentSection = [...sections].reverse().find(({ id }) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= activationLine
      })

      if (currentSection) setActive(currentSection.id)
    }

    const finishScroll = () => {
      programmaticScrollRef.current = false
      findActiveSection()
    }

    const handleScroll = () => {
      if (!programmaticScrollRef.current) {
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(findActiveSection)
      }

      window.clearTimeout(settleTimer)
      settleTimer = window.setTimeout(finishScroll, 160)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('scrollend', finishScroll)
    findActiveSection()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scrollend', finishScroll)
      window.clearTimeout(settleTimer)
      cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToSection = (id) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    programmaticScrollRef.current = !reduceMotion
    setActive(id)

    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })

    if (reduceMotion) {
      window.setTimeout(() => {
        programmaticScrollRef.current = false
      }, 0)
    }
  }

  return (
    <>
      <nav aria-label="Section navigation" className="site-nav">
        <div className="site-nav__ribbon" role="group" aria-label="Portfolio sections">
          {sections.map(({ name, id }) => {
            const isActive = active === id

            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={isActive ? 'location' : undefined}
                className={`site-nav__link${isActive ? ' is-active' : ''}`}
              >
                {name}
              </button>
            )
          })}
        </div>
      </nav>
      <div className="scroll-bottom-fade" aria-hidden="true" />
    </>
  )
}

export default Nav
