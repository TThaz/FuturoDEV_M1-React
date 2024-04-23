import { createContext, useEffect, useState } from "react"
import useFetch from "../hooks/useFetch.jsx"

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({children}) => {
    
    const dados = useFetch("/dados.json");
    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {         //Esse useEffect serve para renderizar após o chamado do Fetch, caso os dados sejam alterados, ele executa a função
      if(!!dados) {
        setTrilhas(dados.trilhas);
      }
    }, [dados])

    function addTrail(trailData) {
      setTrilhas(t => [...t, trailData])
    }

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas, addTrail}}>
                {children}
        </TrilhasContext.Provider>
    )
}