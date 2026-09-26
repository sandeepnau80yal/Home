import { SocialLinks } from '../components/SocialLinks'

const Home = () => (
  <div className="page-shell home-shell">
    <div className="home-meta">
      <span className="eyebrow"><span className="status-dot" /> Developer</span>
      <span className="home-location">Gurgaon</span>
    </div>

    <div className="hero-grid">
      <div className="hero-copy-block">
        <p className="section-kicker">MERN - C++ - Python - AWS/GCP </p>
        <h1 className="hero-title">
          I build things<br />
          <span className="hero-title__second-line">for the open web.</span>
        </h1>
        <p className="hero-description">
          Hey, I’m Sandeep. I’ve built ephemeral chat rooms, a raycasting engine in Pygame, an EPUB reader, and a modded Minecraft server on AWS.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
          <a className="button button-quiet" href="#about">A little about me <span aria-hidden="true">↓</span></a>
          <a className="button button-quiet" href="/Sandeep%20Nautiyal%20-%20Resume.pdf" download="Sandeep-Nautiyal-Resume.pdf">Resume <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-socials">
          <span className="eyebrow">Find me elsewhere</span>
          <SocialLinks />
        </div>
      </div>

      <aside className="hero-aside" aria-label="Developer focus">
        <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
        <div className="focus-card">
          <div className="profile-avatar">
            <img src="/Profile.jpg" alt="Sandeep Nau80yal" />
          </div>
          <div className="focus-card__bottom">
            <div><span className="eyebrow">Currently exploring</span><p>Cloud infrastructure<br /> Developer tools<br/> &amp; AI Integration</p></div>
          </div>
        </div>
        <p className="hero-aside-note"><span className="status-dot" /> To be honest, I juggle with a lot of technologies and stacks at once ;) </p>
      </aside>
    </div>

    <div className="home-bottomline"><span className="bottomline-rule" /><span>Scroll to explore</span><span className="bottomline-rule" /></div>
  </div>
)

export default Home
