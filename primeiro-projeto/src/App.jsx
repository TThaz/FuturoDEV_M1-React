import CardTrilha from "./components/CardTrilha"
import listaTrilhas from "./pages/Lista"
import useFetch from "./hooks/useFetch"
import "./App.css"
import { useState, useEffect } from "react";

function App() {
  
    const dados = useFetch("/dados.json");
    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {         //Esse useEffect serve para renderizar após o chamado do Fetch, caso os dados sejam alterados, ele executa a função
      if(!!dados) {
        setTrilhas(dados.trilha)
      }
    }, [dados])

  return (
    <div className="container">
      {!!trilhas &&
        trilhas.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index}/>
          ))}
    </div>
  )
}

export default App;