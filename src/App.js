import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../src/Services/PrivateRoutes';
import PaginaHome from './Componentes/PaginalInicial';
import TelaDeEntrada from './Componentes/TelaEntrada';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaHome/>}/>
       
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
