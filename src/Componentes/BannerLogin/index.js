import { useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import styles from "./bannerLogin.module.css";
import { loginUser } from "../../Services/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginBan() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !senha.trim()) {
            toast.warn("Por favor, preencha todos os campos");
            return;
        }

        const result = await loginUser(email, senha);

        if (result.error) {
            toast.error("Email ou senha incorretos");
        } else {
            navigate("/telaDeEntrada", {replace:true});
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
                    <button type="submit" className={styles.buttonBan}>Entrar</button>
                    <div className={styles.containerNewForgot}>
                        <p className={styles.forgotPass}> Esqueceu sua senha? {""}<span className={styles.clickable} onClick={() => navigate ("/recuperarSenha", {replace: true})}>Clique aqui!</span></p>
                        <p className={styles.newClient}>Novo aqui? {""}<span className={styles.clickable} onClick={() => navigate ("/cadastroUser", {replace: true})}>Cadastre-se!</span></p>
                    </div>
                
                </div>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
}
