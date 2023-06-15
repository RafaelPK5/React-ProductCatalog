import axios from "axios";
import React, { useState } from "react";
import "./InputsCadastro.css";

function InputsCadastro(props) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        setIsEmailValid(true)
        setPasswordValid(true)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validaEmail(form.email)) {
            if (validaPassword(form.password)) {
                console.log('Email válido', form.email)
                axios
                    .post('http://localhost:8080/users', form)
                    .then(response => {
                        console.log("Dados enviados com sucesso!!", response.data);
                    })
                    .catch(error => {
                        console.error("Erro ao enviar dados!", error);
                    });
            } else { setPasswordValid(false) }
        } else {
            console.log("Email não válido!", form.email)
            setIsEmailValid(false);
        }
    };

    const validaEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validaPassword = (password) => {
        if (password.lenght < 8){
            setPasswordValid(false)
        }
    }
    return (
        <form className="inputs-cadastro" onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>
            <label>
                Name:
                <input required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </label>
            {!isEmailValid && (
                <div className="error-popup">
                    <div className="error-popup-content">
                        <p>
                            O email informado é inválido. Por favor, verifique novamente.
                        </p>
                        <button onClick={() => setIsEmailValid(true)}>Fechar</button>
                    </div>
                </div>
            )}
            <br />
            <label>
                Phone:
                <input required
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Password:
                <input required
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
            </label>
            {!passwordValid && (
                <div className="error-popup">
                    <div className="error-popup-content">
                        <p>
                           Senha muito curta! Por favor digite-a novamente!
                        </p>
                        <button onClick={() => setPasswordValid(true)}>Fechar</button>
                    </div>
                </div>
            )}
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default InputsCadastro;
