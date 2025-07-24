import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./telaentrada.module.css";

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
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </div>



      
      <div className={styles.mainContent}>
        <h1>CenterUser</h1>
      </div>
    </div>
  );
}
