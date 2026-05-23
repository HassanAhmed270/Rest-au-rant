import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Order from '../pages/Order'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'menu', element: <Menu /> },
      { path: 'order', element: <Order /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

export default router
