from agents import Agent
from langgraph.graph import START,END,StateGraph,S
from langchain_core.messages import SystemMessage,AIMessage,HumanMessage
from langgraph.graph.message import TypedDict,Annotated,add_messages
from langchain_core.tools import tool,Tool
from langgraph.prebuilt import ToolNode
import os
import sys
 
class State(TypedDict):
    q1 : str
    q2 : str
    q3 : str
    q4 : str
    q5 : str
    problem_statement : str
    proposed_solution : str
    one_line_description : str
    founder_due_intelligence_module_score : int
    buisness_idea_score : int
    market_competition_score : int
    invest_revenue_score = int
    risk_failure_score : int

graph_builder = StateGraph(State)

def 



