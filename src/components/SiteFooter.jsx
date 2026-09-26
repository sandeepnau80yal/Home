import { useState } from 'react'

const movieQuotes = [
  'Fear can hold you prisoner. Hope can set you free — Andy Dufresne, The Shawshank Redemption',
  'The things you own end up owning you — Tyler Durden, Fight Club',
  'To infinity and beyond. — Buzz Lightyear, Toy Story',
  'Laugh, and the world laughs with you. Weep, and you weep alone — Oh Dae-su, Oldboy',
  'An idea is like a virus. Resilient. Highly contagious — Dom Cobb, Inception',
  'Are you watching closely? — John Cutter, The Prestige',
  'Which would be worse: to live as a monster, or to die as a good man? — Teddy Daniels, Shutter Island',
  "The greatest trick the Devil ever pulled was convincing the world he didn't exist — Verbal Kint, The Usual Suspects",
  'Were you rushing or were you dragging? — Terence Fletcher, Whiplash',
  'Be it a rock or a grain of sand, in water they sink as the same — Oh Dae-su, Oldboy',
  'You will have your revenge, but you will never have peace — Woo-jin, Oldboy',
  'The night is darkest just before the dawn — Harvey Dent, The Dark Knight',
  'Problem solving is just controlled panic — Ryland Grace, Project Hail Mary',
  "That's a bingo! — Hans Landa, Inglourious Basterds",
  'Sometimes the truth is the most dangerous thing of all — Martin Vail, Primal Fear',
  "Hope is not naïve. It's a choice — Superman",
  'Money is iron. It can be anything you want it to be — Ki-taek, Parasite',
  'Has anything you’ve done made your life better? — Bob Sweeney, American History X',
  'Why you pursue something is as important as what you pursue. — Lou Bloom, Nightcrawler',
  'Revenge is never a straight line. It’s a forest. — Hattori Hanzo, Kill Bill',
  'How can you wake up from a nightmare if you are not asleep? — Trevor Reznik, The Machinist'
]

const SiteFooter = () => {
  const [quote] = useState(() => movieQuotes[Math.floor(Math.random() * movieQuotes.length)])

  return (
    <div className="site-footer__content">
      <p className="site-footer__quote mono">“{quote}”</p>
      <p className="site-footer__copyright mono">© {new Date().getFullYear()} Sandeep Nau80yal</p>
    </div>
  )
}

export default SiteFooter
