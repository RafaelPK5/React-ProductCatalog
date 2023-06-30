import { useState } from 'react';
import './App.css';
import Login from './Components/Layouts/Login'
import Cadastro from './Components/Layouts/Cadastro';
import Navbar from './Components/Basic/Navbar'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Cadastrar' element={<Cadastro/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
