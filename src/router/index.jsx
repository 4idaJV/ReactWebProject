import { createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home/Home1.jsx'
import Perfil from '../pages/Perfil/Perfil.jsx'
import Root from '../layouts/mainLayout.jsx'
import SignForm from '../pages/SignUp/SignUp.jsx'
import LogIn from '../pages/LogIn/LogIn.jsx'
import CrearTablas from '../pages/CrearTablas/CrearTablas.jsx'
import Recetas from '../pages/Recetas/Recetas.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'
import CrearReceta from '../pages/CrearReceta/CrearReceta.jsx'
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
          path: '/Perfil',
          element: <Perfil />
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
          element: <CrearTablas />
        },
        {
          path: '/recetas',
          element: <Recetas />
        },
        {
          path: '/CrearReceta',
          element: <CrearReceta />
        },

      ]
    }
  ])
  
  export default router
  