import { Link } from 'react-router-dom'

const Nav = ({ active }) => {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <nav className="flex items-center justify-between mb-20">
    {active === 'Home' 
    ? <span className="mono text-[15px] text-teal-400 tracking-widest lowercase">~home</span>
    : <Link to="/" className="mono text-[10px] text-white/30 hover:text-teal-400 tracking-widest uppercase transition-colors">← Home</Link>
    }  
    <div className="flex gap-5">
        {links.filter(l => l.label !== 'Home').map(link => (
          link.label === active
            ? <span key={link.label} className="mono text-[10px] text-teal-400 tracking-widest uppercase">{link.label}</span>
            : <Link key={link.label} to={link.to} className="mono text-[10px] text-white/25 hover:text-teal-400 tracking-widest uppercase transition-colors">{link.label}</Link>
        ))}
      </div>
    </nav>
  )
}

export default Nav