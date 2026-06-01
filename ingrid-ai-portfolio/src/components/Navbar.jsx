function Navbar() {

  const navItems = [

    {
      name: "Sobre",
      href: "#sobre"
    },

    {
      name: "Skills",
      href: "#skills"
    },

    {
      name: "Projetos",
      href: "#projetos"
    },

    {
      name: "Contato",
      href: "#contato"
    }

  ]

  return (

    <header className="
    fixed
    top-0
    w-full
    z-50
    backdrop-blur-md
    bg-black/20
    border-b
    border-white/10
    ">

      <nav className="
      max-w-7xl
      mx-auto
      px-6
      py-4
      flex
      items-center
      justify-between
      ">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-cyan-400">
          Ingrid.dev
        </h1>

        {/* Menu */}

        <ul className="hidden md:flex gap-8 text-sm text-zinc-300">

          {navItems.map((item, index) => (

            <li key={index}>

              <a

                href={item.href}

                className="
                hover:text-cyan-400
                transition
                duration-300
                "

              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>

      </nav>

    </header>

  )
}

export default Navbar
