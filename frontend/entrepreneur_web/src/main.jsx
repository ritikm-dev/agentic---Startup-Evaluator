import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Team from './Team.jsx'
import Question from './Question.jsx'
const route = createBrowserRouter([
  {
    path :"/team",
    element: <Team/>
  },
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/question",
    element : <Question/>
  }
])
createRoot(document.getElementById('root')).render(

    <RouterProvider router = {route}/>

)
