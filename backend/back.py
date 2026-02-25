from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from schema_back import Singleform,Message,Teamform

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/")
def disp(data: Message):
    print(data.message)
    return {"message": data.message}

@app.post("/singleform")
def singleform(message : Singleform):
    print(message)
    return {"message" : "done!!"}

@app.post("/teamform")
def singleform(message : Teamform):
    print(message)
    return {"message" : "done!!"}

    