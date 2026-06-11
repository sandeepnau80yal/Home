import { SocialLinks } from "../components/SocialLinks"
import CornerBrackets from "../components/CornerBrackets"
import QuoteFooter from '../components/QuoteFooter'
import Nav from '../components/Nav'

function StatusBar() {
  return (
    <p className="mono absolute top-7 left-1/2 -translate-x-1/2 text-[10px] text-teal-400/50 tracking-widest uppercase whitespace-nowrap">
      <span className="inline-block w-[5px] h-[5px] rounded-full bg-teal-400 mr-2 pulse align-middle"></span>
      initializing<span className="blink">_</span>
    </p>
  )
}


function HeroContent() {
  return (
    <div className="text-center flex flex-col items-center">
      <p className="mono text-[30px] text-teal-400/70 tracking-[.3em] uppercase mb-4">Welcome to my abode</p>
      <div className="w-10 h-px bg-teal-400/40 my-6"></div>
      <p className="mono text-[11px] text-white/25 tracking-[.2em] uppercase mb-8"> Tech ain't tech if it ain't fun. </p>
      <SocialLinks />
    </div>
  )
}


const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen relative grid-bg flex flex-col px-6 py-16">
      <CornerBrackets />
      <StatusBar />
      <Nav active="Home" />
      <div className="flex-1 flex flex-col items-center justify-center">
        <HeroContent />
      </div>
      <QuoteFooter absolute />
    </div>
  )
}

export default Home
