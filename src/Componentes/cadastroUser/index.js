import React, { useState } from "react";
import { registerUser } from "../../Services/Auth";
import styles from "./cadastrouser.module.css";
import { toast } from "react-toastify";

const CadastroUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !senha) {
      toast.error("Preencha todos os campos.");
      return;
    }
  
    const { user, error } = await registerUser(email, senha, name);
  
    if (error) {
      if (error.includes("auth/email-already-in-use")) {
        toast.error("E-mail já cadastrado.");
      } else if (error.includes("auth/invalid-email")) {
        toast.error("E-mail inválido.");
      } else {
        toast.error("Erro ao cadastrar: " + error);
      }
    } else {
      console.log("Entrou no else: cadastro com sucesso");
      toast.success("Usuário cadastrado com sucesso!");
      setName("");
      setEmail("");
      setSenha("");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
