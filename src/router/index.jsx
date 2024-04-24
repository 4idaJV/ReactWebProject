import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About.jsx'
import Root from '../layouts/mainLayout.jsx'
import SignForm from '../pages/SignUp/SignUp.jsx'
import LogIn from '../pages/LogIn/LogIn.jsx'
import CrearTablas from '../pages/CrearTablas/CrearTablas.jsx'
 

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
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
          element: <CrearTablas />
        },
      ]
    }
  ])
  
  export default router
  