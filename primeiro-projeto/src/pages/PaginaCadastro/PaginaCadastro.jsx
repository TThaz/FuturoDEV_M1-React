import styles from "./styles.module.css"
import { useForm } from "react-hook-form"
import { TrilhasContext }  from "../../contexts/TrilhasContext"
import { useContext } from "react";
import { useNavigate } from "react-router-dom"

function PaginaCadastro() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const { addTrail } = useContext(TrilhasContext)
    const navigate = useNavigate();


    function sendForm(formValue) {
        addTrail(formValue);

        navigate("/lista-trilhas");
    }

    return (
        <div className="container">
            <h1>Cadastro de nova trilha</h1>

            <form className={styles.form} onSubmit={handleSubmit(sendForm)}>

                <div className={styles.formOptions}>
                    <label htmlFor="nomeTrilha">Nome da Trilha</label>
                    <input type="text" 
                    {...register("nomeTrilha", {
                        required: "Nome da trilha não preenchido",
                        maxLength: {value: 100, message: "Esse campo permite no máximo 100 caracteres"}
                    })
                    }/>
                </div>
                {errors?.nomeTrilha && <p>{errors.nomeTrilha?.message}</p>}

                <div className={styles.formOptions}>
                    <label htmlFor="duracao">Duração estimada (Min)</label>
                    <input type="number"  
                    {...register("duracao", {
                        required: "Este campo é obrigatório"
                    })
                    }/>
                </div>
                {errors?.duracao && <p>{errors.duracao?.message}</p>}

                <div className={styles.formOptions}>
                    <label htmlFor="trajeto">Trajeto (Km)</label>
                    <input type="number"  
                    {...register("trajeto", {
                        required: "Este campo é obrigatório"})
                    }/>
                </div>
                {errors?.trajeto && <p>{errors.trajeto?.message}</p>}

                <div className={styles.formOptions}>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text"  
                    {...register("cidade", {
                        required: "Este campo é obrigatório",
                        maxLength: {value: 60, message: "Esse campo permite no máximo 60 caracteres"}
                    })
                    }/>
                </div>
                {errors?.cidade && <p>{errors.cidade?.message}</p>}

                <div className={styles.formOptions}>
                    <label htmlFor="estado">Estado</label>
                    <input type="text"  
                    {...register("estado", {
                        required: "Este campo é obrigatório",
                        maxLength: {value: 2, message: "Esse campo permite no máximo 2 caracteres"}
                    })
                    }/>
                </div>
                {errors?.estado && <p>{errors.estado?.message}</p>}

                <div className={styles.formOptions}>
                    <label htmlFor="nomeUsuario">Nome completo do usuário</label>
                    <input type="text"  
                    {...register("nomeUsuario", {
                        required: "Este campo é obrigatório",
                        maxLength: {value: 60, message: "Esse campo permite no máximo 60 caracteres"}
                    })
                    }/>
                </div>
                {errors?.nomeUsuario && <p>{errors.nomeUsuario?.message}</p>}

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
                {errors?.dificuldade && <p>{errors.dificuldade?.message}</p>}

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
                {errors?.tipo && <p>{errors.tipo?.message}</p>}

                <div className={styles.formOptions}>
                    <label htmlFor="urlImage">Imagem da Trilha</label>
                    <input type="text"  
                    {...register("urlImage", {
                        required: "Este campo é obrigatório",
                        maxLength: {value: 300, message: "Esse campo permite no máximo 300 caracteres"}
                    })
                    }/>
                </div>
                {errors?.urlImage && <p>{errors.urlImage?.message}</p>}

                <div className={styles.formButtons}>
                    <button type="submit">Cadastrar</button>
                    <button>Voltar</button>
                </div>
            </form>
        </div>
    )
}

export default PaginaCadastro;