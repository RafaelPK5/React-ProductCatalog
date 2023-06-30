import React, { useState } from "react";
import './Cadastro.css'
import Popup from "../Basic/PopUp";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Cadastro() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const [mostrarPopup, setMostrarPopup] = useState(false);
    const handleClick = () => {
        setMostrarPopup(true);
    };

    const fecharPopup = () => {
        setMostrarPopup(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post('http://localhost:8080/users', formData).then(response =>{
        //     console.log(response)
        // })
        console.log(formData);
        navigate('/')
    };

    return (
        <form className="form-cadastro" onSubmit={handleSubmit}>
            <div className="caixa">
                <h1 id="P">ProCad</h1>
                <h1>Cadastre-se</h1>
            </div>
            <label>
                Nome:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Telefone:
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Senha:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </label>
            {mostrarPopup && (
                <Popup mostrar={mostrarPopup} fecharPopup={fecharPopup} />)
            }
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default Cadastro;
