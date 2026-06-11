import { SocialLinks } from '../components/SocialLinks'
import CornerBrackets from '../components/CornerBrackets'
import QuoteFooter from '../components/QuoteFooter'
import Nav from '../components/Nav'


const SkillTag = ({ name }) => {
  return (
    <span className="mono text-[10px] text-teal-400/60 border border-teal-400/15 px-3 py-1 tracking-wider">
      {name}
    </span>
  )
}

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen relative grid-bg flex flex-col px-6 py-16">
      <CornerBrackets />
      <Nav active="About"/>
      <main className="max-w-xl mx-auto w-full flex-1">
        <p className="mono text-[10px] text-teal-400/60 tracking-[.3em] uppercase mb-4">// about</p>
        <h1 className="font-bold text-4xl tracking-tight mb-8">
          Hello <span className="text-teal-400">;)</span>
        </h1>
        <h2 className="font-bold text-2xl tracking-tight mb-8">
          Sandeep here <span className="text-teal-400">!!</span>
        </h2>
        <div className="w-8 h-px bg-teal-400/40 mb-8"></div>
        <p className="text-white/55 text-[15px] leading-relaxed mb-5">
          Hi — I'm Sandeep, a developer based in Gurgaon. Tinkering with many technologies at 
          once and learning along the way, be it Automating Pipelines, gliding with cloud, creating game
          engines from scratch
        </p>
        <p className="text-white/55 text-[15px] leading-relaxed mb-5">
          Wondering about the 80 in "nau80yal"? It's a little nod to port 80. I believe my hands craft the 
          ideas i have through the codes just like the port 80 connects the web servers to the client ;)
        </p>
        <p className="text-white/55 text-[15px] leading-relaxed mb-5">
          I am still way off from being the best but i ain't stopping anytime sooner,
          and challenges are what i'm up for!!!
        </p>
        <p className="text-white/55 text-[15px] leading-relaxed mb-5">
          As the saying goes like 
        </p>
        <p className="text-white text-[15px] leading-relaxed mb-5">
          <b><i>"Jack of all trades, master of none, still better than master of one!"</i></b>
        </p>
        <div className="flex flex-wrap gap-2 mb-12">
          <SkillTag name="Development" />
          <SkillTag name="Cloud" />
          <SkillTag name="DevOps" />
          <SkillTag name="Linux" />
        </div>
        <SocialLinks />
      </main>
      <QuoteFooter />
    </div>
  )
}

export default About