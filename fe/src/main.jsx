import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './index.css'
import { ProductList } from './components/ProductList.jsx'
import { AddProduct } from './components/AddProduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList></ProductList>
  },
  {
    path: "/add",
    element: <AddProduct></AddProduct>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
