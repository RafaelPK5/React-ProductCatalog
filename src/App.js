import './style.css'
// import Pb from './Components/BaseComponents/PrimaryButton'
// import Cadastro from './Components/InputsCadastro'
// import NavBar from './Components/BaseComponents/NavBar'
import ProCad from './Components/BaseComponents/ProCad'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import InputsCadastro from './Components/InputsCadastro'
import { useState } from 'react'
import LoginComponent from './Components/LoginComponent'
function App() {
  const [login, setLogin] = useState(true);
  const stateLogin = () => {
    setLogin(false);
  }
  
  return (
    <div className="App">
      <ProCad />
      <LoginComponent />
    </div>
  );
}

export default App;
