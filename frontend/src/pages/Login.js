import { useState } from "react";
import API from "../api";

function Login({setIsLoggedIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const res = await API.post("/auth/login", {
                username, password
            });
            localStorage.setItem("token", res.data.token);
            setIsLoggedIn(true);
        } catch(err){
            setError("Invalid Credentials");
            console.error("Error during login:", err);
        }
    }

    return (
        <div style={{padding:"40px"}}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <br />
                <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    );
}

export default Login;       