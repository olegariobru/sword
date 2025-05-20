import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../src/Services/PrivateRoutes';
import PaginaHome from './Componentes/PaginalInicial';
import TelaDeEntrada from './Componentes/TelaEntrada';
import CadastroUser from './Componentes/cadastroUser';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaHome/>}/>
        <Route path="/cadastroUser" element={<CadastroUser />} />

       
        <Route 
          path="/TelaDeEntrada"
          element=
          {<PrivateRoute>
            <TelaDeEntrada/>
          </PrivateRoute>
          }/>
      </Routes>
    
    
    </BrowserRouter>

  );
}

export default App;
