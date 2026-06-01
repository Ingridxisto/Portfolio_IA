import Terminal from "./Terminal"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

function Hero() {

  return (

    <section
      id="sobre"
      className="
      relative
      flex
      items-center
      justify-center
      px-6
      overflow-hidden
      pt-32
      pb-20
      "
    >

      {/* Glow Background */}

      <div className="glow top-0 left-0"></div>

      <div className="glow glow-purple bottom-0 right-0"></div>

      {/* Content */}

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ duration: 1 }}

        className="
        text-center
        relative
        z-10
        max-w-6xl
        mx-auto
        "
      >

        {/* Small Title */}

        <p className="
        text-cyan-400
        text-lg
        mb-4
        tracking-widest
        uppercase
        ">

          Backend & AI Developer

        </p>

        {/* Main Title */}

        <h1 className="
        text-5xl
        md:text-7xl
        font-bold
        leading-tight
        mb-6
        max-w-5xl
        mx-auto
        ">

          Construindo soluções inteligentes com{" "}

          <span className="text-cyan-400">

            Python

          </span>,

          automação e IA.

        </h1>

        {/* Animated Text */}

        <div className="
        text-zinc-400
        max-w-2xl
        mx-auto
        text-lg
        leading-relaxed
        ">

          <TypeAnimation

            sequence={[

              "Desenvolvedora Backend especializada em Python.",
              2000,

              "Criando automações inteligentes.",
              2000,

              "Construindo APIs modernas e soluções com IA.",
              2000,

              "Transformando processos manuais em sistemas inteligentes.",
              2000,

            ]}

            wrapper="span"

            speed={50}

            repeat={Infinity}

          />

        </div>

        {/* Buttons */}

        <div className="
        mt-10
        flex
        flex-col
        sm:flex-row
        gap-4
        justify-center
        ">

          {/* Projects */}

          <a

            href="#projetos"

            className="
            bg-cyan-400
            text-black
            px-8
            py-4
            rounded-2xl
            font-semibold
            hover:scale-105
            transition
            duration-300
            shadow-lg
            shadow-cyan-500/20
            "
          >

            Ver Projetos

          </a>

          {/* GitHub */}

          <a

            href="https://github.com/Ingridxisto"

            target="_blank"

            rel="noopener noreferrer"

            className="
            border
            border-cyan-400
            text-cyan-400
            px-8
            py-4
            rounded-2xl
            font-semibold
            hover:bg-cyan-400
            hover:text-black
            transition
            duration-300
            "
          >

            GitHub

          </a>

          {/* CV */}

          <a

            href="/curriculo.pdf"

            download

            className="
            border
            border-white/20
            text-white
            px-8
            py-4
            rounded-2xl
            font-semibold
            hover:bg-white
            hover:text-black
            transition
            duration-300
            "
          >

            Download CV

          </a>

        </div>

        {/* Terminal */}

        <Terminal />

      </motion.div>

    </section>

  )

}

export default Hero
