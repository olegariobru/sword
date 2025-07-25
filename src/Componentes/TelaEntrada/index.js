import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./telaentrada.module.css";
import { MdOutlinePostAdd } from "react-icons/md";

export default function TelaDeEntrada() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuAtivo, setMenuAtivo] = useState(false);

  useEffect(() => {
    if (!location.state?.fromLogin) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  return (
  <div>
    <div className={styles.headerCab}>
     <button
        className={`${styles.navBurger} ${menuAtivo ? styles.navBurgerAtivo : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.sideMenu} ${menuAtivo ? styles.ativo : ""}`}>
        <nav>
          <a href="#">Home</a>
          <a href="#">Perfil</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
        </nav>
      </div>

      
      <div className={styles.mainContent}>
        <h1>CenterUser</h1>
      </div>
    </div>
    
    <div className={styles.newPost}>
      <button className={styles.btnPost}><MdOutlinePostAdd size={20} style={{ marginRight: "8px" }} />New post</button>


    </div>
  </div>
  );
}
