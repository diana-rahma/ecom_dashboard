import Header from "./Header";
import {useHistory} from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Login() {
    const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem("user-info")) {
            history.push("/AddProducts")
        }
    }, []);
    return (
        <div>
            <Header/>
            <h1>Halaman Login</h1>
        </div> 
    );
}

export default Login;