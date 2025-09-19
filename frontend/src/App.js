import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Drivers from "./pages/Drivers";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App(){
  const [drivers, setDrivers] = useState(() => {
    const saved = localStorage.getItem("drivers")
    return saved ? JSON.parse(saved) : [];
  });
  const [vehicles, setVehicles] = useState(() => {
    const saved = localStorage.getItem("vehicles")
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(() => {
    localStorage.setItem("drivers", JSON.stringify(drivers))
  }, [drivers]);

  useEffect(() => {
    localStorage.setItem("vehicles", JSON.stringify(vehicles))
  }, [vehicles])

  return(
    <BrowserRouter>
    <Navbar />
    <div style={{display: "flex"}}>
      <Sidebar />
      <div style={{flex: 1, padding:"40px"}}>
        <Routes>
        <Route path="/dashboard" element={<Dashboard drivers={drivers} vehicles={vehicles} />} />
        <Route path="/vehicles" element={<Vehicles vehicles={vehicles} setVehicles={setVehicles} />} />
        <Route path="/drivers" element={<Drivers drivers={drivers} setDrivers={setDrivers} />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
