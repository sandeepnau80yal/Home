import { SocialLinks } from '../components/SocialLinks'

const skills = ['Development', 'Cloud', 'DevOps', 'Linux']

const About = () => (
  <div className="page-shell content-shell">
    <header className="section-heading">
      <p className="section-kicker">01 / About</p>
      <h2>A little context.<br /><span>Built by doing.</span></h2>
      <p className="section-intro">React and Socket.io chat rooms, a Pygame raycaster, an EPUB reader, and a Minecraft server tuned for ten players.</p>
    </header>

    <div className="about-layout">
      <article className="surface-card about-story">
        <p className="eyebrow">The short version</p>
        <p className="about-lede">Hi, I’m Sandeep, a developer based in Gurgaon. AbyssChat uses React, Node, Express, and Socket.io for rooms that disappear when they’re empty. SayCaster is a Pygame raycaster built with custom vector math and fisheye correction.</p>
        <p>I also built OrynReader as a vanilla JavaScript EPUB reader, and set up a modded Minecraft server on AWS EC2 for ten concurrent players. I learn new tools by putting them to work in projects like these.</p>
        <p>The “80” in nau80yal is a nod to port 80 — a small reminder that the things I make are meant to connect ideas with people.</p>
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
          <p>Open to ideas, collaborations, and good conversations.</p>
          <SocialLinks />
        </div>
      </aside>
    </div>
  </div>
)

export default About
