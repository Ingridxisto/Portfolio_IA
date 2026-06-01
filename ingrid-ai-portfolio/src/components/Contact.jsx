import { motion } from "framer-motion"

function Contact() {

  return (

    <section 
        id="contato"
        className="py-32 px-6">

      <div className="max-w-4xl mx-auto">

        <motion.div

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

          className="
          bg-white/5
          border border-white/10
          backdrop-blur-lg
          rounded-3xl
          p-12
          text-center
          shadow-2xl
          "
        >

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Contato
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos construir algo incrível juntos.
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">

            Estou aberta para oportunidades em desenvolvimento backend,
            automação, APIs inteligentes e projetos com IA.

          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a

              href="mailto:ingridxisto@gmail.com"

              className="
              bg-cyan-400
              text-black
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
              "
            >

              Enviar Email

            </a>

            <a

              href="https://github.com/Ingridxisto"

              target="_blank"

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
              "
            >

              GitHub

            </a>

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default Contact
