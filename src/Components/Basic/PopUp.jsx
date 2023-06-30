import React from 'react';
import './PopUp.css'

const Popup = ({ mostrar, fecharPopup }) => {
  if (!mostrar) {
    return null; // Retorna nulo se não for para exibir o pop-up
  }

  return (
    <div className="popup">
      <div className="conteudo">
        <h3>Credenciais Inválidas</h3>
        <p>As credenciais fornecidas são inválidas. Por favor, tente novamente.</p>
        <button onClick={fecharPopup}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
