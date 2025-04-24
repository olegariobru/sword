import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./bannerLogin.module.css";
import { loginUser } from "../../Services/Auth";

export default function LoginBan() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !senha.trim()) {
            setErro("Por favor, preencha todos os campos");
            return;
        }

        const result = await loginUser(email, senha);

        if (result.error) {
            setErro("Email ou senha incorretos");
        } else {
            navigate("/telaDeEntrada");
        }
    };

    return (
        <div className={styles.backBan}>

            <form onSubmit={handleSubmit}>
                <div className={styles.inputsBan}>
                    <div className={styles.titBan}>
                        <a>Center User</a>
                    </div>
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Usuário:"
                    />

                   
                    <input
                        type="password"
                        id="senha"
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Senha:"
                    />

                    {erro && <p className={styles.erroMSG}>{erro}</p>}

                    <button type="submit" className={styles.buttonBan}>Entrar</button>
                </div>
            </form>
        </div>
    );
}
