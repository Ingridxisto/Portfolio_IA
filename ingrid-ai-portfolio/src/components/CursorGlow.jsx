import { useEffect, useState } from "react"

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      })

    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  return (

    <div

      className="
      fixed
      w-[400px]
      h-[400px]
      rounded-full
      pointer-events-none
      z-0
      blur-3xl
      opacity-20
      bg-cyan-400
      transition-all
      duration-100
      "

      style={{
        left: position.x - 200,
        top: position.y - 200
      }}

    />

  )
}

export default CursorGlow
