import axios from "axios";
import React, { useState } from "react";
import './LoginComponent.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputsCadastro from "./InputsCadastro";


function LoginComponent(props) {
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    const [login, setLogin] = useState(true)
    

    const changeInput = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        setLogin(true)
    }

    const submitButton = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8080/users').then(response => {
            console.log(response.data)
            response.data.map(obj => {
                if (obj.name == user.name && obj.password == user.password) {
                    setLogin(true)
                    console.log('ok')
                } else {
                    setLogin(false)
                }
            })
            console.log(user)
        })
    }
    return (
        <div className="centro">
            <div className="login-container">
                <h1>Login</h1>
                <label>
                    Name:
                    <input required
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={changeInput} />
                </label>
                <label>
                    Password:
                    <input required
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={changeInput}
                    />
                </label>
                {!login && (
                    <div className="error-popup">
                        <div className="error-popup-content">
                            <p>
                                Credenciais inválidas! Tente novamente...
                            </p>
                            <button onClick={() => setLogin(true)}>Fechar</button>
                        </div>
                    </div>
                )}
                <button type="button" onClick={submitButton}>Entrar</button>
                
            </div>
        </div>
    )
}

export default LoginComponent;