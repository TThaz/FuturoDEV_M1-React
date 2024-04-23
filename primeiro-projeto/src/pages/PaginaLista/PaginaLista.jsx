import CardTrilha from "../../components/CardTrilha";
import styles from "./styles.module.css";
import { TrilhasContext } from "../../contexts/TrilhasContext";
import { useContext } from "react";

function PaginaLista() {

  const {trilhas} = useContext(TrilhasContext)

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