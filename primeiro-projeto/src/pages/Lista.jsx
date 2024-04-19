import useFetch from "../hooks/useFetch"


function Lista() {
    return (
        useFetch("../data/dados.json")
    )
}

export default Lista;