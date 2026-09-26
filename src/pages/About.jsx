import { SocialLinks } from '../components/SocialLinks'

const skills = ['Development', 'Cloud', 'DevOps', 'Linux']

const About = () => (
  <div className="page-shell content-shell">
    <header className="section-heading">
      <p className="section-kicker">01 / About</p>
      <h2>$whoami<br /><span>Built by doing.</span></h2>
      <p className="section-intro">React and Socket.io chat rooms, a Pygame raycaster, an EPUB reader, and a Minecraft server tuned for ten players.</p>
    </header>

    <div className="about-layout">
      <article className="surface-card about-story">
        <p className="about-lede">Hi, I’m Sandeep, a developer based in Gurgaon-NCR. I build robust systems and enjoy understanding how things work under the hood. From secure real-time communication with AbyssChat to a raycasting engine built from scratch with SayCaster, I like turning ideas into working systems.</p>
        <p>I’ve also built OrynReader, worked with AWS infrastructure, and experimented across different areas of software development. I learn new technologies by putting them to work in projects, not just reading about them.</p>
        <br/>
        <p>The “80” in nau80yal is a nod to the legacy port 80 — a small reminder that the things I make are meant to connect ideas with people.</p>
        <blockquote>“Jack of all trades, master of none, still better than master of one.”</blockquote>
      </article>

      <aside className="about-sidebar">
        <div className="surface-card about-facts">
          <p className="eyebrow">What I work with</p>
          <div className="skill-list">
            {skills.map((skill, index) => <span className="skill-chip" key={skill}><span>0{index + 1}</span>{skill}</span>)}
          </div>
          <a className="about-resume-link" href="/Sandeep%20Nautiyal%20-%20Resume.pdf" download="Sandeep-Nautiyal-Resume.pdf">Download résumé <span aria-hidden="true">↓</span></a>
        </div>
        <div className="surface-card about-connect">
          <p className="eyebrow">On the internet</p>
          <br/>
          <p>Open to ideas, collaborations, and good conversations.</p>
          <br/>
          <SocialLinks />
        </div>
      </aside>
    </div>
  </div>
)

export default About
