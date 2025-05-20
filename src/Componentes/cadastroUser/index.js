import React, { useState } from "react";
import { registerUser } from "../../Services/Auth";
import styles from "./cadastrouser.module.css";

const CadastroUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, error } = await registerUser(email, senha, name);
    if (error) {
      setStatus(`Erro: ${error}`);
    } else {
      setStatus("Usuário cadastrado com sucesso!");
      setName("");
      setEmail("");
      setSenha("");
    }
  };

  return (
    <div className={styles.cadastroContainer}>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Center User</h2>

        <label className={styles.label}>Usuário:</label>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className={styles.label}>E-mail:</label>
        <input
          className={styles.inputField}
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className={styles.label}>Senha:</label>
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

        <div className={styles.linkSection}>
          Esqueceu sua senha? <a href="#">Clique aqui!</a><br />
          Novo aqui? <a href="#">Cadastre-se!</a>
        </div>

        {status && <p className={styles.statusMsg}>{status}</p>}
      </form>
    </div>
  );
};

export default CadastroUser
