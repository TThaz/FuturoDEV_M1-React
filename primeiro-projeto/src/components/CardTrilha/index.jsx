import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}) {
    return (
        <div className="card_container">
            <img className="card_imagem" width={200} src={dadosTrilha.urlImage} alt="imagem trilha" />
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
    )
}

 CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
        nomeUsuario: PropTypes.string.isRequired,
        urlImage: PropTypes.string.isRequired
    })
} 

export default CardTrilha;