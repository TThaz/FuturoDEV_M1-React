import styles from "./styles.module.css"
import { Link } from "react-router-dom"

function PaginaHome() {
    return (
        <div>

            <div className={styles.bgImage}>
                <div className={styles.content1}>
                    <p className={styles.mainTitle}>
                    Que tal aproveitar um tempo com a natureza?
                    </p>
                    <span className={styles.mainText}>
                    Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. 
                    Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!
                    </span>
                    <Link to="/lista-trilhas">
                        <button className={styles.button}>Explorar Trilhas</button>
                    </Link>
                </div>

            </div>

            <div className={styles.content2}>
                <p className={styles.descriptionTitle}>
                    Explore trilhas incríveis
                </p>
                <span className={styles.descriptionText}>
                    O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. 
                    Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. 
                    Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.
                </span>
                <div className={styles.centerButton}>
                    <Link to="/lista-trilhas">
                        <button className={styles.button}>Explorar Trilhas</button>
                    </Link>
                </div>
            </div>

            <div className={styles.content3}>
                
                <div className={styles.contentText3}>
                    <p className={styles.contentDescription3}>
                    Compartilhe fotos, dicas e localização das suas trilhas favoritas
                    </p>
                    <Link to="/cadastro-trilhas">
                        <button className={styles.button}>Cadastrar Nova Trilha</button>
                    </Link>
                </div>

                <div className={styles.contentImage3}>
                    <img src="https://images.pexels.com/photos/18001925/pexels-photo-18001925/free-photo-of-small-forest.jpeg" alt="imagem-trilha-sideContent"/>
                </div>
            </div>

        </div>
    )
}

export default PaginaHome;