import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home';
import RootLayout from './Layouts/RootLayout';
import Products from './Pages/Products/Products';


function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/", Component: Home },
    ],
  },
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Products },
      { path: "/products", Component: Products },
    ],
  },
]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
