import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}) {
    return (
        <div className="card_container">
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
            <img width={200} src={dadosTrilha.urlImage} alt="imagem trilha" />
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
        urlImagem: PropTypes.string.isRequired
    })
} 

export default CardTrilha;