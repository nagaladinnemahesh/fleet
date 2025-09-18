import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Drivers from "./pages/Drivers";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App(){
  return(
    <BrowserRouter>
    <Navbar />
    <div style={{display: "flex"}}>
      <Sidebar />
      <div style={{flex: 1, padding:"40px"}}>
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
