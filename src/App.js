import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaHome from './Componentes/PaginalInicial';
import CadastroUser from './Componentes/cadastroUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} position="top-right" />
      <Routes>
        <Route path="/" element={<PaginaHome/>}/>
        <Route path="/cadastroUser" element={<CadastroUser />}/>
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
