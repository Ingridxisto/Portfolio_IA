from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Backend IA funcionando 🚀"
    }


@app.get("/chat")
def chat(message: str):

    msg = message.lower()

    # Sobre Ingrid

    if "quem é ingrid" in msg:

        response = """
        Ingrid Xisto é desenvolvedora backend
        focada em Python, automação,
        APIs inteligentes e IA.
        """

    elif "python" in msg:

        response = """
        Python é a principal stack backend da Ingrid.
        Ela utiliza Python para APIs, automação,
        scraping, IA e sistemas web.
        """

    elif "react" in msg:

        response = """
        Ingrid utiliza React para criar interfaces
        modernas, responsivas e interativas.
        """

    elif "ia" in msg or "inteligência artificial" in msg:

        response = """
        Ingrid está estudando IA Generativa,
        automações inteligentes e integração
        de APIs modernas.
        """

    elif "automação" in msg:

        response = """
        Ingrid possui experiência com automação
        utilizando Selenium, scraping e Python.
        """

    elif "backend" in msg:

        response = """
        Ingrid tem foco em backend com Python,
        FastAPI, APIs RESTful e integração de sistemas.
        """

    elif "projetos" in msg:

        response = """
        Ingrid desenvolveu projetos envolvendo:
        - APIs REST
        - Chatbots
        - Automação
        - Sistemas web
        - IA
        """

    elif "contato" in msg:

        response = """
        Você pode entrar em contato pelo GitHub
        ou LinkedIn disponíveis no portfolio.
        """

    else:

        response = """
        Posso responder sobre:
        Python, IA, backend,
        automação, projetos e React 😄
        """

    return {
        "response": response
    }
