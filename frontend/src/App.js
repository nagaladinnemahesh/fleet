import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Drivers from "./pages/Drivers";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    axios
      .get("http://localhost:5000/api/drivers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setDrivers(res.data.data))
      .catch((err) => console.error(err));
  }, [token]);

  useEffect(() => {
    if (!token) return;
    axios
      .get("http://localhost:5000/api/vehicles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setVehicles(res.data.data))
      .catch((err) => console.error(err));
  }, [token]);

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "40px" }}>
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard drivers={drivers} vehicles={vehicles} />}
            />
            <Route
              path="/vehicles"
              element={
                <Vehicles vehicles={vehicles} setVehicles={setVehicles} />
              }
            />
            <Route
              path="/drivers"
              element={<Drivers drivers={drivers} setDrivers={setDrivers} />}
            />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
