import CardTrilha from "../../components/CardTrilha";
import useFetch  from "../../hooks/useFetch"
import styles from "./style.module.css";
import { useState, useEffect } from "react"

function PaginaLista() {

    const dados = useFetch("/dados.json");
    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {         //Esse useEffect serve para renderizar após o chamado do Fetch, caso os dados sejam alterados, ele executa a função
      if(!!dados) {
        setTrilhas(dados.trilhas)
      }
    }, [dados])





    return (
        <div>
                <div className={styles.rectangle}><div className={styles.rectangleOverlay}></div></div>
                <p className={styles.mainTitle}>Explore trilhas incríveis</p>
                <div>
                    {Array.isArray(trilhas) &&
                      trilhas.map((trilha, index) => (
                        <CardTrilha dadosTrilha={trilha} key={index} />
                      ))
                    }
                </div>
        </div>
    )
}

export default PaginaLista;