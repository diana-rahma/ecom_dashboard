import React, { useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function signUp(){
        let item={name,password,email};
        console.warn(name,password,email);
        fetch("localhost:8000/api/register") 
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Halaman Register</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" />
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
            <br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
            <br />
            <button onClick={signUp()} className="btn-primary">Sign Up</button>
        </div>
    )
}

export default Register 