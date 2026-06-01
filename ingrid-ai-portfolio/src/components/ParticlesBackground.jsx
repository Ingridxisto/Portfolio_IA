import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div
      className="
      absolute
      inset-0
      -z-10
      "
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },

          fpsLimit: 60,

          particles: {
            color: {
              value: "#22d3ee",
            },

            links: {
              color: "#22d3ee",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1,
            },

            number: {
              value: 35,
            },

            opacity: {
              value: 0.15,
            },

            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
          },
        }}
      />
    </div>
  )
}

export default ParticlesBackground
