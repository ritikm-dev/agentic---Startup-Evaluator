from pydantic import BaseModel



class Message(BaseModel):
    message: str



class Singleform(BaseModel):
    department : str
    name : str
    one_line_idea : str



class Teamform(BaseModel):
    name : list
    department : list
    team_size : int
    one_line_idea : str
    role : list
    team_name : str