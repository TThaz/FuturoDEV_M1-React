import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Lista from "../pages/Lista";

// CRIO UMA LISTA DE ROTAS PARA ACESSAR AS PÁGINAS
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
            //path - determina o caminho em URL
                path: "/",
            //element - Componente a ser acessado através do caminho
                element: <Home />
            },
            {
                path: "/cadastro-trilhas",
                element: <Cadastro />
            },
            {
                path: "/lista-trilhas",
                element: <Lista />
            }
        ]
    }
])

// EXPORTO ESSA LISTA ATRAVÉS DE UMA VARIÁVEL
export default routes;