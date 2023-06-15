import React, { useEffect, useState } from "react";
import axios from 'axios'
import Req from '../../ReqUser'



function PrimaryButton(props) {
    const [user, setUser] = useState([])
    async function getUsers(){
        await Req.get('/users').then(obj => {
            console.log(obj.data)
            setUser(obj.data)
        })
    }
    useEffect(()=> {
        getUsers();
        console.log(user)
    }, [])
    return (
        <div className="map">
            <h1>ok</h1>
            {user.map(e => {
                return (<div key={e.id}>
                        <h1>{e.name}</h1>
                    </div>)
            })}
        </div>
    )
}


export default PrimaryButton;