import { motion } from "framer-motion"

function About() {

  const technologies = [
    "Python",
    "FastAPI",
    "React",
    "JavaScript",
    "MySQL",
    "Docker",
    "IA",
    "Automação"
  ]

  return (

    <section
      id="about"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Title */}

        <motion.div

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Sobre Mim
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Desenvolvedora Backend & IA
          </h2>

        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div

            initial={{ opacity: 0, x: -50 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.8 }}

            viewport={{ once: true }}
          >

            <div className="
            bg-white/5
            border border-white/10
            backdrop-blur-lg
            rounded-3xl
            p-10
            shadow-2xl
            ">

              <p className="
              text-zinc-300
              leading-relaxed
              text-lg
              mb-6
              ">

                Sou desenvolvedora Backend focada em
                Python, APIs REST, automação e
                Inteligência Artificial.

              </p>

              <p className="
              text-zinc-400
              leading-relaxed
              mb-6
              ">

                Atualmente desenvolvo projetos modernos
                utilizando FastAPI, React, bancos de dados,
                automações inteligentes e integração com IA.

              </p>

              <p className="
              text-zinc-400
              leading-relaxed
              ">

                Meu foco é transformar ideias em soluções
                funcionais, modernas e escaláveis,
                criando experiências tecnológicas
                intuitivas e eficientes.

              </p>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div

            initial={{ opacity: 0, x: 50 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.8 }}

            viewport={{ once: true }}
          >

            <div className="
            grid
            grid-cols-2
            gap-6
            ">

              {/* Card 1 */}

              <div className="
              bg-white/5
              border border-white/10
              backdrop-blur-lg
              rounded-3xl
              p-8
              text-center
              ">

                <h3 className="
                text-5xl
                font-bold
                text-cyan-400
                mb-3
                ">

                  10+

                </h3>

                <p className="text-zinc-400">
                  Projetos desenvolvidos
                </p>

              </div>

              {/* Card 2 */}

              <div className="
              bg-white/5
              border border-white/10
              backdrop-blur-lg
              rounded-3xl
              p-8
              text-center
              ">

                <h3 className="
                text-5xl
                font-bold
                text-cyan-400
                mb-3
                ">

                  Backend

                </h3>

                <p className="text-zinc-400">
                  APIs e automações
                </p>

              </div>

              {/* Card 3 */}

              <div className="
              bg-white/5
              border border-white/10
              backdrop-blur-lg
              rounded-3xl
              p-8
              text-center
              col-span-2
              ">

                <h3 className="
                text-2xl
                font-bold
                mb-6
                ">

                  Tecnologias

                </h3>

                <div className="
                flex
                flex-wrap
                justify-center
                gap-3
                ">

                  {technologies.map((tech, index) => (

                    <span

                      key={index}

                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-black/30
                      border border-white/10
                      text-cyan-300
                      text-sm
                      "
                    >

                      {tech}

                    </span>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )

}

export default About
