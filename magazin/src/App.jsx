import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import All from './pages/All/All'
import Nothing from './pages/Nothing/Nothing'
import Layout from './pages/Layout/Layout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "All",
          element: <All />
        },
        {
          path: "*",
          element: <Nothing />
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}
export default App