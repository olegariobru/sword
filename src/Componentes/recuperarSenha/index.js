import styles from "./recuperarSenha.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { forgotPassword } from "../../Services/Auth"; 
import { useNavigate } from "react-router-dom";

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Insira seu e-mail", { position: "top-center" });
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Por favor, insira um e-mail válido", { position: "top-center" });
      return;
    }

    const { success, error } = await forgotPassword(email); 
    if (success) {
      toast.success("E-mail de recuperação enviado com sucesso!", { position: "top-center" });
      setEmail("");
    } else {
      toast.error(error, { position: "top-center" });
    }
  };

  const voltarLogin = () => {
    navigate("/loginBan");
  }

  return (
    <div className={styles.forgotBan}>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.forgotInputBan}>
          <div className={styles.forgotTitBan}>
            <p>Center User</p>
          </div>
          <div className={styles.forgotSubTit}>
            <p>Esqueceu sua senha? Digite o e-mail cadastrado abaixo</p>
          </div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail:"
            className={styles.inputEmail}
          />
          <button type="submit" className={styles.buttonBan2}>Enviar</button>
            <p onClick={voltarLogin} className={styles.backlogon}>Voltar a tela de login</p>
        </div>
      </form>
    </div>
  );
};

export default RecuperarSenha;
