function Footer() {

  return (

    <footer className="border-t border-white/10 py-10 px-6">

      <div className="
      max-w-7xl
      mx-auto
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-6
      ">

        {/* Left */}

        <div>

          <h2 className="text-2xl font-bold text-cyan-400">
            Ingrid.dev
          </h2>

          <p className="text-zinc-500 mt-2">
            Backend • IA • Automação
          </p>

        </div>

        {/* Right */}

        <div className="flex gap-6 text-zinc-400">

          <a
            href="https://github.com/Ingridxisto"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ingridxisto/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ingridxisto@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>

        </div>

      </div>

      {/* Bottom */}

      <div className="text-center text-zinc-600 mt-10 text-sm">

        © 2026 Ingrid Xisto. All rights reserved.

      </div>

    </footer>

  )
}

export default Footer
