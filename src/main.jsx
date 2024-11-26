import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Users from './Users.jsx'
const router = createBrowserRouter([
  {
  path:'/',
  element:<Root/>
 },
 {
  path:'/users',
  element:<Users/>,
  loader:() => fetch(`http://localhost:4000/users`)
 }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
