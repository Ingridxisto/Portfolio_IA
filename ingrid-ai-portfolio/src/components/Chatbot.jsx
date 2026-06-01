import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { motion } from "framer-motion"

function Chatbot() {

  const [message, setMessage] = useState("")

  const [messages, setMessages] = useState(() => {

    const savedMessages = localStorage.getItem("chat_messages")

    return savedMessages
      ? JSON.parse(savedMessages)
      : []

  })

  const [loading, setLoading] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const messagesEndRef = useRef(null)

  // Auto scroll

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    })

  }, [messages, loading])

  // Save messages

  useEffect(() => {

    localStorage.setItem(
      "chat_messages",
      JSON.stringify(messages)
    )

  }, [messages])

  // Clear chat

  const clearChat = () => {

    setMessages([])

    localStorage.removeItem("chat_messages")

  }

  // Send message

  const sendMessage = async () => {

    if (!message) return

    const userMessage = {
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    }

    setMessages((prev) => [
      ...prev,
      userMessage
    ])

    setLoading(true)

    try {

      const API_URL = "https://portfolio-ia-ydrf.onrender.com"

      const res = await axios.get(
        `${API_URL}/chat?message=${encodeURIComponent(message)}`
      )

      const botMessage = {
        sender: "bot",
        text: res.data.response,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      }

      setMessages((prev) => [
        ...prev,
        botMessage
      ])

    } catch (error) {

      const errorMessage = {
        sender: "bot",
        text: "Erro ao conectar com a IA.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      }

      setMessages((prev) => [
        ...prev,
        errorMessage
      ])

    }

    setLoading(false)

    setMessage("")

  }

  return (

    <>

      {/* Chat Window */}

      {isOpen && (

        <motion.section

          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95
          }}

          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}

          transition={{
            duration: 0.3
          }}

          className="
          fixed
          bottom-28
          right-4 md:right-6
          z-50
          w-[90vw]
          max-w-lg
          "

        >

          <div className="
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          rounded-3xl
          overflow-hidden
          shadow-2xl
          ">

            {/* Header */}

            <div className="
            border-b
            border-white/10
            p-6
            bg-black/20
            flex
            items-center
            justify-between
            ">

              <div>

                <p className="
                text-cyan-400
                uppercase
                tracking-widest
                text-sm
                ">

                  SAEBYEOK AI

                </p>

                <h2 className="text-2xl font-bold mt-1">

                  Sua assistente inteligente

                </h2>

              </div>

              <div className="flex items-center gap-3">

                <button

                  onClick={clearChat}

                  className="
                  text-sm
                  text-zinc-400
                  hover:text-white
                  transition
                  "

                >

                  Limpar

                </button>

                <button

                  onClick={() => setIsOpen(false)}

                  className="
                  w-10
                  h-10
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  transition
                  "

                >

                  ✕

                </button>

              </div>

            </div>

            {/* Messages */}

            <div className="
            h-[280px]
            overflow-y-auto
            p-6
            space-y-4
            bg-gradient-to-b
            from-black/10
            to-black/30
            ">

              {messages.length === 0 && (

                <div className="
                text-zinc-500
                leading-relaxed
                ">

                  Pergunte algo sobre:
                  Python, IA, automação,
                  backend ou projetos 😄

                </div>

              )}

              {messages.map((msg, index) => (

                <motion.div

                  key={index}

                  initial={{
                    opacity: 0,
                    y: 20
                  }}

                  animate={{
                    opacity: 1,
                    y: 0
                  }}

                  transition={{
                    duration: 0.3
                  }}

                  className={`
                  max-w-[85%]
                  p-4
                  rounded-2xl
                  leading-relaxed
                  ${msg.sender === "user"
                    ? "ml-auto bg-cyan-400 text-black"
                    : "bg-black/30 border border-white/10 text-zinc-300"
                  }
                  `}
                >

                  <div className="flex items-start gap-3">

                    {msg.sender === "bot" && (

                      <div className="
                      w-10
                      h-10
                      rounded-full
                      bg-cyan-400
                      flex
                      items-center
                      justify-center
                      text-black
                      font-bold
                      shrink-0
                      ">

                        SB

                      </div>

                    )}

                    <div>

                      {msg.text}

                      <p className="
                      text-xs
                      text-zinc-500
                      mt-2
                      ">

                        {msg.time}

                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

              <div ref={messagesEndRef} />

              {/* Loading */}

              {loading && (

                <motion.div

                  initial={{
                    opacity: 0
                  }}

                  animate={{
                    opacity: 1
                  }}

                  className="
                  max-w-[85%]
                  p-4
                  rounded-2xl
                  bg-black/30
                  border border-white/10
                  text-zinc-400
                  animate-pulse
                  "

                >

                  <div className="flex items-center gap-3">

                    <div className="
                    w-10
                    h-10
                    rounded-full
                    bg-cyan-400
                    flex
                    items-center
                    justify-center
                    text-black
                    font-bold
                    ">

                      SB

                    </div>

                    <div>

                      IA digitando...

                    </div>

                  </div>

                </motion.div>

              )}

            </div>

            {/* Input */}

            <div className="
            border-t
            border-white/10
            p-6
            flex
            gap-4
            ">

              <input

                type="text"

                placeholder="Digite sua pergunta..."

                value={message}

                onChange={(e) => setMessage(e.target.value)}

                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage()
                  }
                }}

                className="
                flex-1
                bg-black/30
                border border-white/10
                focus:border-cyan-400
                rounded-2xl
                px-6
                py-4
                outline-none
                text-white
                transition
                "

              />

              <button

                onClick={sendMessage}

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

                Enviar

              </button>

            </div>

          </div>

        </motion.section>

      )}

      {/* Floating Button */}

      <button

        onClick={() => setIsOpen(!isOpen)}

        className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-cyan-400
        text-black
        font-bold
        shadow-2xl
        hover:scale-110
        transition
        "

      >

        SB

      </button>

    </>

  )

}

export default Chatbot