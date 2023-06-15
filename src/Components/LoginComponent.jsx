import axios from "axios";
import React, { useState } from "react";

function LoginComponent(props) {
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    
    const changeInput = event =>{
        const {name, value} = event.target;
        setUser({...user,[name]:value});
    }

    const submitButton = (event) =>{
        event.preventDefault();
        axios.get('http://localhost:8080/users').then(response =>{
            response.data
        })
    }
}