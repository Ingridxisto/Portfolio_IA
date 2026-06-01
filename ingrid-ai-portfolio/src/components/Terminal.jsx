import { useEffect, useState } from "react"

function Terminal() {

  const lines = [

    "whoami",
    "Ingrid Xisto",

    "stack",
    "Python • FastAPI • React • IA",

    "speciality",
    "Automação • APIs • Machine Learning",

    "status",
    "Disponível para oportunidades 🚀"

  ]

  const [displayedLines, setDisplayedLines] = useState([])

  useEffect(() => {

    let index = 0

    const interval = setInterval(() => {

      setDisplayedLines((prev) => [
        ...prev,
        lines[index]
      ])

      index++

      if (index >= lines.length) {
        clearInterval(interval)
      }

    }, 700)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="px-6 py-20">

      <div className="
      max-w-4xl
      mx-auto
      bg-black
      border border-cyan-400/20
      rounded-3xl
      overflow-hidden
      shadow-2xl
      ">

        {/* Header */}

        <div className="
        flex
        items-center
        gap-3
        px-6
        py-4
        border-b
        border-white/10
        bg-zinc-950
        ">

          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <span className="text-zinc-500 text-sm ml-4">
            terminal
          </span>

        </div>

        {/* Content */}

        <div className="
        p-8
        font-mono
        text-sm
        md:text-base
        min-h-[320px]
        space-y-4
        ">

          {displayedLines.map((line, index) => (

            <div
              key={index}
              className={index % 2 === 0
                ? "text-cyan-400"
                : "text-white"
              }
            >

              {index % 2 === 0
                ? `> ${line}`
                : line
              }

            </div>

          ))}

          <div className="animate-pulse text-cyan-400">
            █
          </div>

        </div>

      </div>

    </section>

  )

}

export default Terminal
