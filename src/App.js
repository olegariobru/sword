import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaHome from './Componentes/PaginalInicial';
import CadastroUser from './Componentes/cadastroUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginBan from './Componentes/BannerLogin';
import TelaDeEntrada from './Componentes/TelaEntrada';
import RecuperarSenha from './Componentes/recuperarSenha';
import { LoadingScreen } from './Componentes/Loading'; // atualizado
import PrivateRoute from './Services/PrivateRoutes';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true); // inicia o fadeOut
    }, 1500); // depois de 1,5s começa o fadeOut

    const timer2 = setTimeout(() => {
      setLoading(false); // remove o loading após o fadeOut
    }, 2000); // fadeOut dura 0.5s

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
          <Route path="/" element={<PaginaHome />} />
          <Route path="/loginBan" element={<PrivateRoute><LoginBan /></PrivateRoute>} />
          <Route path="/telaDeEntrada" element={<PrivateRoute><TelaDeEntrada/></PrivateRoute>} />
          <Route path="/cadastroUser" element={<CadastroUser />} />
          <Route path="/recuperarSenha" element={<PrivateRoute><RecuperarSenha /></PrivateRoute>} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
