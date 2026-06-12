import CornerBrackets from '../components/CornerBrackets'
import QuoteFooter from '../components/QuoteFooter'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav className="flex items-center justify-between mb-20">
    <Link to="/" className="mono text-[10px] text-white/30 hover:text-teal-400 tracking-widest uppercase transition-colors">← Home</Link>
    <div className="flex gap-5">
      <Link to="/about" className="mono text-[10px] text-white/25 hover:text-teal-400 tracking-widest uppercase transition-colors">About</Link>
      <span className="mono text-[10px] text-teal-400 tracking-widest uppercase">Projects</span>
      <Link to="/contact" className="mono text-[10px] text-white/25 hover:text-teal-400 tracking-widest uppercase transition-colors">Contact</Link>
    </div>
  </nav>
)

const projects = [
  {
    id: 'abyss-chat',
    label: '01',
    name: 'AbyssChat',
    stack: 'MERN Stack',
    description: 'Ephemeral chat rooms that vanish when empty. No backend persistence — privacy by design.',
    tags: ['React', 'Node', 'Socket.io',],
    github: 'https://github.com/sandeepnau80yal/AbyssChat',
    live:"https://abyss.nau80yal.in/"
  },
  {
    id: 'mc-ec2',
    label: '02',
    name: 'Minecraft EC2',
    stack: 'AWS EC2',
    description: 'Self-hosted Minecraft server on AWS EC2. Configured for 10 concurrent players with mods and server tuning.',
    tags: ['AWS', 'Linux', 'DevOps'],
    github:"",
  },
  {
    id: 'saycaster',
    label: '03',
    name: 'SayCaster',
    stack: 'Python / PyGame',
    description: 'Pseudo-3D raycasting engine. Custom vector math, trig-based rendering and fisheye correction — no DDA.',
    tags: ['Python', 'PyGame', 'Math'],
    github: 'https://github.com/sandeepnau80yal/SayCaster',
  },
  {
    id: 'oryn-reader',
    label: '04',
    name: 'OrynReader',
    stack: 'HTML / CSS / JS',
    description: 'Epub reader built vanilla. React + Pretext rebuild in progress.',
    tags: ['JavaScript', 'epub.js'],
    github: 'https://github.com/sandeepnau80yal/OrynReader',
    live:"https://orynreader.nau80yal.in/"
  },
]
const ProjectCard = ({ project }) => (
  <div className="relative border border-white/8 p-6 hover:border-teal-400/30 transition-all group">
    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-teal-400/20 group-hover:border-teal-400/60 transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-teal-400/20 group-hover:border-teal-400/60 transition-colors"></div>

    <div className="flex items-start justify-between mb-4">
      <span className="mono text-[10px] text-teal-400/40 tracking-widest">
        {project.label}
      </span>
      <span className="mono text-[10px] text-white/20 tracking-wider">
        {project.stack}
      </span>
    </div>

    <h2 className="font-bold text-xl tracking-tight mb-3 group-hover:text-teal-400 transition-colors">
      {project.name}
    </h2>

    <p className="text-white/40 text-[13px] leading-relaxed mb-5">
      {project.description}
    </p>

    <div className="flex items-center justify-between">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="mono text-[9px] text-teal-400/50 border border-teal-400/15 px-2 py-1 tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.live || project.github) && (
        <div className="flex items-center gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[10px] text-white/25 hover:text-teal-400 tracking-widest uppercase transition-colors"
            >
              Live →
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[10px] text-white/25 hover:text-teal-400 tracking-widest uppercase transition-colors"
            >
              GitHub →
            </a>
          )}
        </div>
      )}
    </div>
  </div>
)

const Projects = () => (
  <div className="bg-black text-white min-h-screen relative grid-bg flex flex-col px-6 py-16">
    <CornerBrackets />
    <Nav />
    <main className="max-w-2xl mx-auto w-full flex-1">
      <p className="mono text-[10px] text-teal-400/60 tracking-[.3em] uppercase mb-4">// projects</p>
      <h1 className="font-bold text-4xl tracking-tight mb-3">
        Things I've <span className="text-teal-400">built.</span>
      </h1>
      <div className="w-8 h-px bg-teal-400/40 mb-12"></div>

      <div className="flex flex-col gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
    <div>
        <QuoteFooter/>
    </div>
  </div>
)

export default Projects
