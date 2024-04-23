import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import PaginaCadastro from "../pages/PaginaCadastro.jsx";
import PaginaHome from "../pages/PaginaHome/PaginaHome.jsx";
import PaginaLista from "../pages/PaginaLista/PaginaLista.jsx";

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
                element: <PaginaHome />
            },
            {
                path: "/cadastro-trilhas",
                element: <PaginaCadastro />
            },
            {
                path: "/lista-trilhas",
                element: <PaginaLista />
            }
        ]
    }
])

// EXPORTO ESSA LISTA ATRAVÉS DE UMA VARIÁVEL
export default routes;