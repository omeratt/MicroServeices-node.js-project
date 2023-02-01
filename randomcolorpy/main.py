import fastapi
import random
from fastapi.middleware.cors import CORSMiddleware


app = fastapi.FastAPI()
origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def get_random_color():
    color = "#{:06x}".format(random.randint(0, 0xFFFFFF))
    return {"color": color}