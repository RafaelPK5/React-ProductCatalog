import React, { useState } from "react";
import axios from 'axios'
import Popup from "../Basic/PopUp";
import './Login.css'
import { Link } from "react-router-dom";

function Login(mostrarlogin) {
    if (!mostrarlogin) return null;

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [mostrarPopup, setMostrarPopup] = useState(false);

    const handleClick = () => {
        setMostrarPopup(true);
    };

    const fecharPopup = () => {
        setMostrarPopup(false);
    };

    const changeInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        setMostrarPopup(false)
    }

    const enviarReq = (e) => {
        axios.get('http://localhost:8080/users').then(response => {
            console.log(response.data[0])
            if (response.data[0].email == user.email && response.data[0].password == user.password) {
                localStorage.setItem("email", user.email)
                localStorage.setItem("name", response.data[0].name)

            } else {
                handleClick();
            }

        }).catch(error => handleClick())
    }
    return (
        <div className="login">
            <div className="caixa">
                <h1 id="P">ProCad</h1>
                <h1>Login</h1>
            </div>
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={changeInput}
                    required
                />
            </label>
            <label>
                Password:
                <input
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={changeInput}
                    required
                />
            </label>
            {mostrarPopup && (
                <Popup mostrar={mostrarPopup} fecharPopup={fecharPopup} />)
            }
            <input type="button" value="Submit" onClick={enviarReq} />
            <Link className="link-button" to={'/Cadastrar'}>Cadastre-se</Link>
        </div>

    )
}

export default Login;