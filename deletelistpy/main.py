import fastapi
import uvicorn
import aiohttp
from typing import Dict
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

async def check_response_status(res: aiohttp.ClientResponse) -> Dict:
    print("Checking response status",res.status)
    if res.status == 200:        
        return await res.json()
    else:
        raise Exception(f"The HTTP status of the response: {res.status}")



@app.get("/")
async def stam():
    return {"hello": "woshorlasdasddsss"}

@app.delete("/{id}")
async def delete_list(id: str):
    async with aiohttp.ClientSession() as session:
        async with session.delete(f"https://62c6bbd02b03e73a58d57240.mockapi.io/lists/{id}") as res:
            response = await check_response_status(res)
    return response

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8007)