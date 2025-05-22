import React, { useState } from "react";
import { registerUser } from "../../Services/Auth";
import styles from "./cadastrouser.module.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CadastroUser = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!nome || !email || !senha || !confirmarSenha) {
      toast.error("Preencha todos os campos", { position: "top-center" });
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Por favor, insira um e-mail válido", { position: "top-center" });
      return;
    }

    if (senha.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres", { position: "top-center" });
      return;
    }

    if (senha !== confirmarSenha) {
      toast.error("As senhas não coincidem", { position: "top-center" });
      return;
    }

    const { user, error } = await registerUser(email, senha, nome);
  
    if (error) {
      toast.error(error, { position: "top-center" });
    } else {
      toast.success("Cadastro realizado com sucesso!", { 
        position: "top-center",
        autoClose: 2000,
        onClose: () => {
          setNome("");
          setEmail("");
          setSenha("");
          setConfirmarSenha("");
        }
      });
    }
  };

  return (
    <div className={styles.cadastroContainer}>
      <form noValidate className={styles.formWrapper} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Center User</h2>

        <input
          className={styles.inputField}
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          className={styles.inputField}
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className={styles.inputField}
          type="password"
          placeholder="Digite sua senha (mínimo 6 caracteres)"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <input
          className={styles.inputField}
          type="password"
          placeholder="Confirme sua senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />

        <button className={styles.buttonCadastro} type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroUser;