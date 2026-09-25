const projects = [
  {
    id: 'abyss-chat',
    label: '01',
    name: 'AbyssChat',
    stack: 'MERN / REAL-TIME',
    description: 'Ephemeral chat rooms that vanish when empty. No backend persistence — privacy by design.',
    tags: ['React', 'Node.js', 'Express', 'Socket.io'],
    github: 'https://github.com/sandeepnau80yal/AbyssChat',
    live: 'https://abyss.nau80yal.in/',
  },
  {
    id: 'mc-ec2',
    label: '02',
    name: 'Minecraft EC2',
    stack: 'AWS / EC2',
    description: 'A self-hosted Minecraft server on AWS, configured for ten concurrent players with mods and server tuning.',
    tags: ['AWS', 'Linux', 'EC2', 'DevOps'],
    github: '',
  },
  {
    id: 'saycaster',
    label: '03',
    name: 'SayCaster',
    stack: 'PYTHON / PYGAME',
    description: 'A pseudo-3D raycasting engine built with custom vector math, trigonometric rendering, and fisheye correction.',
    tags: ['Python', 'PyGame', 'Vector Math'],
    github: 'https://github.com/sandeepnau80yal/SayCaster',
  },
  {
    id: 'oryn-reader',
    label: '04',
    name: 'OrynReader',
    stack: 'JAVASCRIPT / EPUB',
    description: 'A lightweight EPUB reader built in vanilla JavaScript, with a React + Pretext rebuild in progress.',
    tags: ['JavaScript', 'epub.js', 'React'],
    github: 'https://github.com/sandeepnau80yal/OrynReader',
    live: 'https://orynreader.nau80yal.in/',
  },
]

const ProjectPreview = ({ projectId }) => {
  if (projectId === 'abyss-chat') {
    return (
      <div className="project-preview preview-chat" role="img" aria-label="Concept preview of the AbyssChat room interface">
        <div className="preview-window-bar"><i /><i /><i /><span>abyss / room-08</span></div>
        <div className="chat-preview-body"><div className="chat-rail"><b /><b /><b /><b /></div><div className="chat-messages"><span className="chat-line chat-line--short" /><span className="chat-line" /><span className="chat-line chat-line--right" /><span className="chat-line chat-line--short" /><span className="chat-input" /></div></div>
      </div>
    )
  }

  if (projectId === 'mc-ec2') {
    return (
      <div className="project-preview preview-cloud" role="img" aria-label="Concept diagram of a Minecraft server running on an EC2 instance">
        <span className="cloud-node cloud-node--client">PLAYERS <b>10</b></span><span className="cloud-connector" />
        <span className="cloud-node cloud-node--server"><i>◆</i><b>EC2 INSTANCE</b><small>MINECRAFT · MODDED</small></span>
        <span className="cloud-region">AWS / EC2</span>
      </div>
    )
  }

  if (projectId === 'saycaster') {
    return (
      <div className="project-preview preview-raycast" role="img" aria-label="Stylized raycast corridor preview for SayCaster">
        <svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs><linearGradient id="ray-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#10231e" /><stop offset="1" stopColor="#050807" /></linearGradient><linearGradient id="ray-glow" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#10231e" /><stop offset=".5" stopColor="#2bd0a9" stopOpacity=".5" /><stop offset="1" stopColor="#10231e" /></linearGradient></defs>
          <rect width="480" height="180" fill="url(#ray-bg)" /><path d="M0 0h480v45H0z" fill="#0a1512" /><path d="M0 45 180 82v98H0zm480 0L300 82v98h180z" fill="#0a1713" stroke="#1b6e5b" strokeOpacity=".65" /><path d="M180 82h120v98H180z" fill="url(#ray-glow)" stroke="#51e8c5" strokeOpacity=".65" /><path d="M0 180 180 82m300 98L300 82M0 135h480M0 105h480M0 83h480" stroke="#35b998" strokeOpacity=".35" /><path d="M60 0v180m60-180v180m300-180v180m-60-180v180" stroke="#35b998" strokeOpacity=".2" />
        </svg>
        <span className="raycast-label">SAYCASTER <i>— LEVEL 01</i></span>
      </div>
    )
  }

  return (
    <div className="project-preview preview-reader" role="img" aria-label="Concept preview of the OrynReader ebook interface">
      <div className="reader-sidebar"><b>ORYN</b><span /><span /><span /><span /></div>
      <div className="reader-page"><small>CHAPTER 04</small><b>Stories live<br />between the lines.</b><i /><i /><i /><i /><i /></div>
      <span className="reader-page-number">042</span>
    </div>
  )
}

const ProjectCard = ({ project }) => (
  <article className="project-card">
    <div className="project-card__meta"><span className="project-number">PROJECT / {project.label}</span><span className="project-stack">{project.stack}</span></div>
    <h3>{project.name}</h3>
    <p className="project-description">{project.description}</p>
    <ProjectPreview projectId={project.id} />
    <div className="project-card__footer">
      <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="project-links">
        {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live site ↗</a>}
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Source ↗</a>}
        {project.id === 'mc-ec2' && (
          <details className="project-details">
            <summary>Server notes <span aria-hidden="true">＋</span></summary>
            <p>Self-hosted on AWS EC2 and configured for ten concurrent players, with mods and server tuning.</p>
          </details>
        )}
      </div>
    </div>
  </article>
)

const Projects = () => (
  <div className="page-shell content-shell projects-shell">
    <header className="section-heading section-heading--row">
      <div><p className="section-kicker">02 / Selected work</p><h2>Ideas,<br /><span>made real.</span></h2></div>
      <p className="section-intro">A few things I’ve built, learned from, and continue to improve.</p>
    </header>
    <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
  </div>
)

export default Projects
