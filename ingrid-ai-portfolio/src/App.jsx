import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CursorGlow from "./components/CursorGlow"
import ParticlesBackground from "./components/ParticlesBackground"
import Chatbot from "./components/Chatbot"

function App() {
  return (
    <div className="
    relative
    overflow-x-hidden
    text-white
    bg-[#020617]
    min-h-screen
    ">

      <ParticlesBackground />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Chatbot />

      <Footer />

      <CursorGlow />

    </div>
  )
}

export default App
