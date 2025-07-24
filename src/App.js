import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaHome from './Componentes/PaginalInicial';
import CadastroUser from './Componentes/cadastroUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginBan from './Componentes/BannerLogin';
import TelaDeEntrada from './Componentes/TelaEntrada';
import RecuperarSenha from './Componentes/recuperarSenha';
import { LoadingScreen } from './Componentes/Loading';
import PrivateRoute from './Services/PrivateRoutes';
import PublicRoute from './Services/PublicRoutes'; // ⬅️ importado

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} position="top-right" />
      {loading ? (
        <LoadingScreen fadeOut={fadeOut} />
      ) : (
        <Routes>
       <Route path="/" element={
          
            <PaginaHome />
          
        } />


          {/* ⛔ Acesso restrito para logados */}
          <Route
            path="/loginBan"
            element={
              <PublicRoute>
                <LoginBan />
              </PublicRoute>
            }
          />
          <Route
            path="/cadastroUser"
            element={
              <PublicRoute>
                <CadastroUser />
              </PublicRoute>
            }
          />
          <Route
            path="/recuperarSenha"
            element={
              <PublicRoute>
                <RecuperarSenha />
              </PublicRoute>
            }
          />

          {/* ✅ Apenas para usuários autenticados */}
          <Route
            path="/telaDeEntrada"
            element={
              <PrivateRoute>
                <TelaDeEntrada />
              </PrivateRoute>
            }
          />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
