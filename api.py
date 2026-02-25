from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def index():
    return {"First Data" : "GET METHOD CALLED"}
    