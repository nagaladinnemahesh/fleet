import React from "react";

function Navbar({setIsLoggedIn}){
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false); // trigger re-render and shows login
    }
    return(
        <div className="navbar">
            <header style={{display: "flex", justifyContent: "space-around"}}>
                <h1>Fleet</h1>
                <div><button onClick={handleLogout}>Logout</button></div>
            </header>
        </div>
    )
}

export default Navbar;