import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Importa o Provider e as rotas dos arquivos configurados na pasta router
import { RouterProvider  } from 'react-router-dom'
import routes from "./router/routes.jsx"

// SEMANA 12 ROUTER CONFIG

// Passado de maneira desestruturada, pois é grande a biblioteca react router dom
// import {createBrowserRouter, RouterProvider} from "react-router-dom"

// PÁGINAS CONFIGURADAS
// import Home from "./pages/Home.jsx"
// import Cadastro from "./pages/Cadastro.jsx"
// import Lista from "./pages/Lista.jsx"

// const routers = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/cadastro",
//     element: <Cadastro />
//   },
//   {
//     path: "/lista",
//     element:  <Lista />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  // Provider pega a variável para utilizar, apangando o React.StrictMode antes
  <RouterProvider router={routes} />
)
