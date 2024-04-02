import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Search from './pages/Search'
import Oficces from './pages/Oficces'
import Advisors from './pages/Advisors'
import Contact from './pages/Contact'
import Layout from './components/Layout'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          path: '/'
        },
        {
          element: <Search />,
          path: '/buscar'
        },
        {
          element: <Oficces />,
          path: '/oficinas'
        },
        {
          element: <Advisors />,
          path: '/asesores'
        },
        {
          element: <Contact />,
          path: '/contacto'
        },
      ]
    },

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
