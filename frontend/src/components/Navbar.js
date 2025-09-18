function Navbar(){
    return(
        <div className="navbar">
            <header style={{display: "flex", justifyContent: "space-around"}}>
                <h1>Fleet</h1>
                <div><button>Logout</button></div>
            </header>
        </div>
    )
}

export default Navbar;