import { useState, useEffect } from "react";


function useFetch(url) {

    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {                               //o use Effect serve par anão permitir a criação de Loops Infinitos
        
        fetch(url)
            .then((response) => response.json()) // Pega a resposta da URL, transforma em JSON
            .then((data) => setTrilhas(data))   // Adiciona o dado na lista de trilhas
            .catch((error) => console.log(error))            // Confirmação de Erro
    }, [url])   //Essa variável faz o useEffect entender que pode ser alterado após a url for determinada novamente


    return trilhas;
}

export default useFetch;