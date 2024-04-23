import "./App.css"
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./contexts/TrilhasContext";

function App() {
  return (
    <TrilhasContextProvider>
      <Header />
      <Outlet />
    </TrilhasContextProvider>
  )
}

export default App;