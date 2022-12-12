import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Logout = () => {
    const navigate = useNavigate();

    const getData = async () => {
        // debugger;
        try {
            console.log("try block");
            const Options = {
                url: "http://localhost:5000/logouts",
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }
            axios(Options).then((res) => {
                console.log("axios then block");
                navigate('/login')
                if (res.status !== 200) {
                    const error = new Error(res.error);
                    throw error;
                }
            }).catch((err) => {
                console.log(err);
            })
        } catch (error) {
            console.log("catch block with login navigate");
            navigate.push('/login')

        }

    }

    useEffect(() => {
        // debugger;
        getData();
    })

    return (
        <div>Logout</div>
    )
}

export default Logout