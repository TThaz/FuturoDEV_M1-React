import "./App.css"
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  
    // const dados = useFetch("/dados.json");
    // const [trilhas, setTrilhas] = useState([]);

    // useEffect(() => {         //Esse useEffect serve para renderizar após o chamado do Fetch, caso os dados sejam alterados, ele executa a função
    //   if(!!dados) {
    //     setTrilhas(dados.trilha)
    //   }
    // }, [dados])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;