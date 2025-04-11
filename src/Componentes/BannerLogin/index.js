import styles from "./bannerLogin.module.css";

export default function LoginBan(){
    return(
        <div className={styles.backBan}>
            <div className={styles.titBan}>
                <a> Center User</a>
            </div>

            <form>
            <div className={styles.inputsBan}>
                <label htmlFor="email">E-mail ou usuário:</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Digite seu e-mail ou usuário:"
                />    
                
                <label htmlFor="email">Senha:</label>
                <input
                    type="password"
                    id="senha"
                    placeholder="Digite sua senha:"
                />

                <button type="submit" className={styles.buttonBan}>Entrar</button>    

            </div> 
            </form>
                
        </div>
    )
}