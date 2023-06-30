import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link className='link' to={'/Produtos'}>Produtos</Link>

                </li>
                <li>
                    <Link className='link' to={'/'}>Pedidos</Link>

                </li>
                <li>
                    <Link className='link' to={'/'}>Sair</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;