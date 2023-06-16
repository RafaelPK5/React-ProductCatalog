import React, { useState } from "react";
import "../BaseComponents/NavBar.css"
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (<nav>
        <ul>
            <li><Link to="/cadastro-usuarios">Cadastro de Usuários</Link></li>
            <li><Link to="/cadastro-produtos">Cadastro de Produtos</Link></li>
            <li><Link to="/visualizacao-produtos">Visualização de Produtos</Link></li>
            <li><Link to="/visualizacao-pedidos">Visualização de Pedidos</Link></li>
            <li><Link to="/sair">Sair</Link></li>
        </ul>
    </nav>)
}
export default NavBar;