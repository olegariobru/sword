import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaHome from './Componentes/PaginalInicial';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaHome/>}>
        
        </Route>
      </Routes>
    
    
    </BrowserRouter>

  );
}

export default App;
