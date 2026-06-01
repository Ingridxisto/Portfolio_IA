import { motion } from "framer-motion"

// imagens
import portfolioImg from "../assets/projects/portfolio-ia.png"
import apiClientesImg from "../assets/projects/API-Gerenciamento-clientes.png"
import estoqueImg from "../assets/projects/controle-estoque.png"
import iotImg from "../assets/projects/DashboardIoT.jpg"
import painelImg from "../assets/projects/painel-monitoramento-tempo.png"
import chatbotImg from "../assets/projects/chatbot.png"

function Projects() {

  const projects = [

    // 1 PORTFOLIO

    {
      title: "Developer Portfolio",

      description:
        "Portfólio moderno desenvolvido em React com animações, IA integrada e design futurista.",

      tech: ["React", "Tailwind", "Framer Motion"],

      github: "https://github.com/Ingridxisto/ingrid-ai-portfolio",

      image: portfolioImg
    },

    // 2 API FASTAPI

    {
      title: "Health Risk API",

      description:
        "API REST desenvolvida com FastAPI para gerenciamento de clientes e cálculo inteligente de risco de saúde.",

      tech: ["Python", "FastAPI", "API REST"],

      github: "https://github.com/Ingridxisto/API-de-Gerenciamento-de-Clientes",

      image: apiClientesImg
    },

    // 3 ESTOQUE

    {
      title: "Smart Stock System",

      description:
        "Sistema de gerenciamento de estoque com autenticação, controle de produtos e automação operacional.",

      tech: ["Python", "MySQL", "Tkinter"],

      github: "https://github.com/Ingridxisto/Controle-de-Estoque",

      image: estoqueImg
    },

    // 4 IOT

    {
      title: "IoT Data Pipeline",

      description:
        "Pipeline de dados com IoT e Docker para monitoramento inteligente e processamento automatizado.",

      tech: ["Docker", "Python", "IoT"],

      github: "https://github.com/Ingridxisto/Pipeline-de-Dados-com-IoT-e-Docker",

      image: iotImg
    },

    // 5 DASHBOARD

    {
      title: "Weather Monitoring Dashboard",

      description:
        "Dashboard de monitoramento climático com coleta automática de temperatura e umidade.",

      tech: ["Python", "Dashboard", "Automação"],

      github: "https://github.com/Ingridxisto/painel-monitoramento-tempo",

      image: painelImg
    },

    // 6 CHATBOT

    {
      title: "AI Travel Chatbot",

      description:
        "Chatbot inteligente desenvolvido no Blip para recomendação de destinos, hotéis e experiências personalizadas.",

      tech: ["Python", "IA", "Blip", "Chatbot"],

      github: "https://github.com/Ingridxisto/chatbot-atendimento-automatico",

      image: chatbotImg
    }

  ]

  return (

    <section
      id="projetos"
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
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}

              viewport={{ once: true }}

              className="
              bg-white/5
              border border-white/10
              backdrop-blur-lg
              rounded-3xl
              overflow-hidden
              hover:-translate-y-3
              hover:border-cyan-400/40
              transition
              duration-300
              shadow-xl
              "
            >

              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="
                h-52
                w-full
                object-cover
                border-b
                border-white/10
                "
              />

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech, techIndex) => (

                    <span
                      key={techIndex}

                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-black/30
                      border border-white/10
                      text-sm
                      text-cyan-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Button */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"

                  className="
                  inline-block
                  bg-cyan-400
                  text-black
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  transition
                  "
                >

                  Ver Projeto

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Projects
