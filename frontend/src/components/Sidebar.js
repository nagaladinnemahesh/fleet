import { Link } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
// import Drivers from "../pages/Drivers";
// import Vehicles from "../pages/Vehicles";
// import Reports from "../pages/Reports";

function Sidebar(){
    return (
        <div className="sidebar" style={{display: "flex", flexDirection: "column"}}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/drivers">Drivers</Link>
            <Link to="/vehicles">Vehicles</Link>
            <Link to="/reports">Reports</Link>
        </div>
    )
}

export default Sidebar;