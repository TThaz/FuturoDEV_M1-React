import { createContext, useEffect, useState } from "react"
import useFetch from "../hooks/useFetch.jsx"

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({children}) => {
    
    const dados = useFetch("/dados.json");
    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {         //Esse useEffect serve para renderizar após o chamado do Fetch, caso os dados sejam alterados, ele executa a função
      if(!!dados) {
        setTrilhas(dados.trilhas)
      }
    }, [dados])

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas}}>
                {children}
        </TrilhasContext.Provider>
    )
}