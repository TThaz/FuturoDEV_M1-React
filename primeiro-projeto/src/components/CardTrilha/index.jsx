import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}) {
    return (
        <div className="lista_cards">
            <div className="card_container">
                <img className="card_imagem" width={200} src={dadosTrilha.urlImage} alt="imagemTrilha" />
                <div className="card_display">
                    <h1>{dadosTrilha.nomeTrilha}</h1>
                    <div className="card_dados">
                        <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
                        <span>{dadosTrilha.duracao} Minutos / {dadosTrilha.trajeto} Km</span>
                        <span>{dadosTrilha.dificuldade}</span>
                        <span>{dadosTrilha.tipo}</span>
                        <span>{dadosTrilha.nomeUsuario}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

 CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.string.isRequired,
        trajeto: PropTypes.string.isRequired,
        dificuldade: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
        nomeUsuario: PropTypes.string.isRequired,
        urlImage: PropTypes.string.isRequired
    })
} 

export default CardTrilha;