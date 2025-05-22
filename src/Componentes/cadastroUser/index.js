import React, { useState } from "react";
import { registerUser } from "../../Services/Auth";
import styles from "./cadastrouser.module.css";
import { toast } from "react-toastify";

const CadastroUser = () => {
  const [nome, setNome] = useState(""); 
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validações básicas
    if (!email.includes('@') || !email.includes('.')) {
      toast.error('E-mail inválido');
      return;
    }
  
    if (senha.length < 6) {
      toast.error('Senha deve ter no mínimo 6 caracteres');
      return;
    }
  
    const { error } = await registerUser(email, senha, nome);
    
    if (error) {
      toast.error(`Erro: ${error}`);

    } else {
      console.log("passou")
      toast.success('Cadastro realizado!');
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
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button className={styles.buttonCadastro} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default CadastroUser;