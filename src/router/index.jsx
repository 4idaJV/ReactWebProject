import { createBrowserRouter,redirect} from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About.jsx'
import Root from '../layouts/mainLayout.jsx'
import SignForm from '../pages/SignUp/SignUp.jsx'
import LogIn from '../pages/LogIn/LogIn.jsx'
import CrearTablas from '../pages/CrearTablas/CrearTablas.jsx'
import Recetas from '../pages/Recetas/Recetas.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'
const token = localStorage.getItem("token")


const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement:<NotFound/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/signup',
          element: <SignForm />
        },
        {
          path: '/login',
          element: <LogIn />
        },
        {
          path: '/CrearTablas',
          //  loader: () => {
          //    if(!token){
          //     return redirect("/login")
          //   } else {
          //     return redirect("/CrearTablas")
          //   }
          //},
          element: <CrearTablas />
        },
        {
          path: '/recetas',
          element: <Recetas />
        },

      ]
    }
  ])
  
  export default router
  