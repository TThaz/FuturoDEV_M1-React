import styles from "./styles.module.css"

// Nome da trilha: campo de texto;

// Duração estimada: campo numérico;

// Trajeto: campo numérico;

// Cidade:  campo de texto;

// Estado:  campo de texto;

// Nome completo usuário:  campo de texto;

// Dificuldade:  campo de select.

// Tipo de trilha:  campo de select;

// URL imagem da trilha:  campo de texto;

function PaginaCadastro() {
    return (
        <div className="container">
            <h1>Cadastro de nova trilha</h1>

            <form action="" className={styles.form}>
                <div className={styles.formOptions}>
                    <label htmlFor="name">Nome da Trilha</label>
                    <input type="text" name="name"/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="duracao">Duração estimada (Min)</label>
                    <input type="number"  name="duracao"/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="trajeto">Trajeto (Km)</label>
                    <input type="number"  name="trajeto"/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text"  name="cidade"/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="estado">Estado</label>
                    <input type="text"  name="estado"/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="username">Nome completo do usuário</label>
                    <input type="text"  name="username"/>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="">Dificuldade</label>
                    <select type="select" name="dificuldade">
                        <option value="">Escolha uma dificuldade</option>
                        <option value="facil">Fácil</option>
                        <option value="intermediario">Intermediário</option>
                        <option value="dificil">Dificil</option>
                    </select>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="tipo">Tipo de Trilha</label>
                    <select name="tipo">
                    <option value="">Escolha uma tipo de trilha</option>
                        <option value="trekking">Trekking</option>
                        <option value="caminhada">Caminhada</option>
                    </select>
                </div>

                <div className={styles.formOptions}>
                    <label htmlFor="imagem-trilha">Imagem da Trilha</label>
                    <input type="text"  name="imagem-trilha"/>
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