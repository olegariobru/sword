// src/Componentes/index.js
import React from "react";
import styles from "./loading.module.css";

export const LoadingScreen = ({ fadeOut }) => (
  <div
    className={`${styles.loadingContainer} ${
      fadeOut ? styles.fadeOut : ""
    }`}
  >
    <div className={styles.spinner}></div>
    <p>Carregando...</p>
  </div>
);
