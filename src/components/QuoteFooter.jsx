import { useState } from 'react'

const quotes = [
  "Fear can hold you prisoner. Hope can set you free - Andy Dufresne, The Shawshank Redemption",
  "The things you own end up owning you - Tyler Durden, Fight Club",  "To infinity and beyond.",
  "Laugh, and the world laughs with you. Weep, and you weep alone - Oh Dae-su, Oldboy",
  "An idea is like a virus. Resilient. Highly contagious - Dom Cobb, Inception",
  "Are you watching closely - John Cutter, The Prestige",
  "Which would be worse: to live as a monster, or to die as a good man - Teddy Daniels, Shutter Island",
  "The greatest trick the Devil ever pulled was convincing the world he didn't exist - Verbal Kint, The Usual Suspects",
  "Were you rushing or dragging!? - Terence Fletcher, Whiplash",
  "Be it a rock or a grain of sand, in water they sink as the same - Oh Dae-su, Oldboy",
  "You will have your revenge, but you will never have peace - Woo-jin, Oldboy",
  "The night is darkest just before the dawn - Harvey Dent, The Dark Knight",
  "Problem solving is just controlled panic - Ryland Grace, Project Hail Mary",
  "That's a bingo - Hans Landa, Inglourious Basterds",
  "Sometimes the truth is the most dangerous thing of all - Martin Vail, Primal Fear",
  "Hope is not naïve. It's a choice - Superman",
  "Money is iron. It can be anything you want it to be - Ki-taek, Parasite",
]

const QuoteFooter = ({ absolute = false }) => {
  const [quote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  )

  return (
    <div className={absolute 
      ? "absolute bottom-7 left-0 right-0 px-6" 
      : "mt-auto pt-8"
    }>
      <p className="mono text-[9px] text-teal-400 tracking-wider text-center">
        {quote}
      </p>
    </div>
  )
}

export default QuoteFooter