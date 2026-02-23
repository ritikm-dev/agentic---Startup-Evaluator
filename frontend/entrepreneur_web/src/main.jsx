import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Team from './Team.jsx'
import Question from './Question.jsx'
import Startup_deatils from './Startup_details.jsx'
import Problem from './Problem.jsx'
import Single from './Single.jsx'
const route = createBrowserRouter([
  {
    path :"/team",
    element: <Team/>
  },
  {
    path :"/single",
    element : <Single/>
  },
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/question",
    element : <Question/>
  },
  {
    path : "/startupdetails",
    element : <Startup_deatils/>
  },
  {
    path : "/problem",
    element : <Problem/>
  }
])
createRoot(document.getElementById('root')).render(

    <RouterProvider router = {route}/>

)
