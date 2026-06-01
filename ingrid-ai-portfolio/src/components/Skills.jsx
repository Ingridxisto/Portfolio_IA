import { motion } from "framer-motion"

function Skills() {

  const skillCategories = [

    {
      title: "Backend",
      skills: [
        "Python",
        "FastAPI",
        "Flask",
        "Django",
        "Spring Boot",
        "REST APIs"
      ]
    },

    {
      title: "Inteligência Artificial",
      skills: [
        "OpenAI API",
        "LLMs",
        "Chatbots",
        "Prompt Engineering",
        "IA Generativa",
        "AI Agents"
      ]
    },

    {
      title: "Automação",
      skills: [
        "Selenium",
        "Web Scraping",
        "ETL",
        "Python Automation",
        "APIs",
        "Integração de Sistemas"
      ]
    },

    {
      title: "APIs & Arquitetura",
      skills: [
        "FastAPI",
        "CRUD",
        "JWT Auth",
        "Postman",
        "Arquitetura em Camadas",
        "POO"
      ]
    },

    {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "TailwindCSS",
        "HTML",
        "CSS"
      ]
    },

    {
      title: "Banco de Dados",
      skills: [
        "MySQL",
        "PostgreSQL",
        "SQLite"
      ]
    },

    {
      title: "Ferramentas",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "VS Code"
      ]
    }

  ]

  return (

    <section 
        id="skills"
        className="py-32 px-6">

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
            Tecnologias
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & Stack
          </h2>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}

              className="
              bg-white/5
              border border-white/10
              backdrop-blur-lg
              rounded-3xl
              p-8
              hover:border-cyan-400/50
              hover:-translate-y-2
              transition
              duration-300
              shadow-xl
              "
            >

              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, skillIndex) => (

                  <span
                    key={skillIndex}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-black/30
                    border
                    border-white/10
                    text-sm
                    text-zinc-300
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Skills
