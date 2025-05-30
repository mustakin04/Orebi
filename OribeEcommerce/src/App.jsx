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
]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
