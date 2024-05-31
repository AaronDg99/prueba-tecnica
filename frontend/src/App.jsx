
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Cultivos from './components/Cultivos';
import CultivosForm from './components/CultivosForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to= "/login"/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/cultivos' element={<Cultivos />} />
        <Route path='/cultivos/edit' element={<CultivosForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
