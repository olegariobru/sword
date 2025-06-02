import React, { useState, useEffect } from "react";
import { registerUser } from "../../Services/Auth";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./cadastrouser.module.css";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import 'react-toastify/dist/ReactToastify.css';

const CadastroUser = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [visivelSenha, setVisivelSenha] = useState(false);
  const [visivelConfirmar, setVisivelConfirmar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation

    useEffect(() => {
      if (!location.state?.fromLogin) {
        navigate("/", { replace: true });
      }
    }, [location, navigate]);

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

    const { error } = await registerUser(email, senha, nome);

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
          navigate("/LoginBan");
        }
      });
    }
  };

  return (
    <div className={styles.cadastroContainer}>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.inputsBanCad}>
          <div className={styles.titbanCad}>
            <p className={styles.title}>Center User</p>
          </div>

          <input
            className={styles.inputField}
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            
          />

          <input
            className={styles.inputField}
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />

          
          <div className={styles.inputWrapper}>
            <input
              className={styles.inputField}
              type={visivelSenha ? "text" : "password"}
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              
            />
            <span
              className={styles.iconePass}
              onClick={() => setVisivelSenha(!visivelSenha)}
              title={visivelSenha ? "Ocultar senha" : "Mostrar senha"}
            >
              {visivelSenha ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
            </div>

            <div className={styles.legPassword}>
                <p className={styles.legPassCreate}>(Mínimo 6 caracteres, 1 Maiuscula, 1 minuscula, 1 especial e 1 número)</p>
            </div>

          
          <div className={styles.inputWrapper}>
            <input
              className={styles.inputField}
              type={visivelConfirmar ? "text" : "password"}
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              
            />
            <span
              className={styles.iconePass}
              onClick={() => setVisivelConfirmar(!visivelConfirmar)}
              title={visivelConfirmar ? "Ocultar senha" : "Mostrar senha"}
            >
              {visivelConfirmar ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
          </div>

          <button className={styles.buttonCadastro} type="submit">
            Cadastrar
          </button>

          <div className={styles.containerNewForgotCad}>
            <p className={styles.newClientCad}>
              Já tem conta?{" "}
              <span
                className={styles.clickableCad}
                onClick={() => navigate("/LoginBan")}
              >
                Clique aqui!
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CadastroUser;
