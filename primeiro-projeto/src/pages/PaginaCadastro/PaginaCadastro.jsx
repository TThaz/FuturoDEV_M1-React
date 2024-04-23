import styles from "./styles.module.css"
import  { useForm } from "react-hook-form"

function PaginaCadastro() {

    const { register } = useForm();

    return (
        <div className="container">
            <h1>Cadastro de nova trilha</h1>

            <form action="" className={styles.form}>

                <div className={styles.formOptions}>
                    <label htmlFor="name">Nome da Trilha</label>
                    <input type="text" 
                    {...register("name", {
                        required: "Este campo é obrigatório",
                        maxLength: {value: 100, message: "Esse campo permite no máximo 100 caracteres"}
                    })
                    }/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="duracao">Duração estimada (Min)</label>
                    <input type="number"  
                    {...register("duracao", {
                        required: "Este campo é obrigatório"
                    })
                    }/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="trajeto">Trajeto (Km)</label>
                    <input type="number"  
                    {...register("trajeto", {
                        required: "Este campo é obrigatório"})
                    }/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text"  
                    {...register("cidade", {
                        required: "Este campo é obrigatório",
                        maxLength: {value: 60, message: "Esse campo permite no máximo 60 caracteres"}
                    })
                    }/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="estado">Estado</label>
                    <input type="text"  
                    {...register("estado", {
                        required: "Este campo é obrigatório",
                        maxLength: {value: 2, message: "Esse campo permite no máximo 2 caracteres"}
                    })
                    }/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="username">Nome completo do usuário</label>
                    <input type="text"  
                    {...register("username", {
                        required: "Este campo é obrigatório",
                        maxLength: {value: 60, message: "Esse campo permite no máximo 60 caracteres"}
                    })
                    }/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="dificuldade">Dificuldade</label>
                    <select type="select" 
                    {...register("dificuldade", {
                        required: "Este campo é obrigatório"
                    })
                    }>
                        <option value="">Escolha uma dificuldade</option>
                        <option value="facil">Fácil</option>
                        <option value="intermediario">Intermediário</option>
                        <option value="dificil">Dificil</option>
                    </select>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="tipo">Tipo de Trilha</label>
                    <select 
                    {...register("tipo", {
                        required: "Este campo é obrigatório"
                    })
                    }>
                        <option value="">Escolha uma tipo de trilha</option>
                        <option value="trekking">Trekking</option>
                        <option value="caminhada">Caminhada</option>
                    </select>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="imagem-trilha">Imagem da Trilha</label>
                    <input type="text"  
                    {...register("imagem-trilha", {
                        required: "Este campo é obrigatório",
                        maxLength: {value: 300, message: "Esse campo permite no máximo 300 caracteres"}
                    })
                    }/>
                </div>
                <div className={styles.formButtons}>
                    <button>Cadastrar</button>
                    <button>Voltar</button>
                </div>
        </form>
        </div>
    )
}

export default PaginaCadastro;