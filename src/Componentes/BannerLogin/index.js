import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./bannerLogin.module.css";
import { loginUser } from "../../Services/Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginBan() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !senha.trim()) {
            toast.warn("Por favor, preencha todos os campos", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored"
            });
            return;
        }

        const { error } = await loginUser(email, senha);

        if (error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 3000,
                theme: "colored"
            });
        } else {
            toast.success("Login realizado com sucesso!", {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
                onClose: () => navigate("/telaDeEntrada", { replace: true })
            });
        }
    };

    return (
        <div className={styles.backBan}>
            <form onSubmit={handleSubmit}noValidate>

                <div className={styles.inputsBan}>
                    <div className={styles.titBan}>
                        <p>Center User</p>
                    </div>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Usuário:"
                        className={styles.inputBan}
                    />
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Senha:"
                        className={styles.inputBan}
                    />
                    <button type="submit" className={styles.buttonBan}>Entrar</button>
                    <div className={styles.containerNewForgot}>
                        <p className={styles.forgotPass}>
                            Esqueceu sua senha?{" "}
                            <span className={styles.clickable} onClick={() => navigate("/recuperarSenha", { replace: true })}>
                                Clique aqui!
                            </span>
                        </p>
                        <p className={styles.newClient}>
                            Novo aqui?{" "}
                            <span className={styles.clickable} onClick={() => navigate("/cadastroUser", { replace: true })}>
                                Cadastre-se!
                            </span>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}