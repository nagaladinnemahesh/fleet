import React, { useState, useEffect } from "react";
// import axios from "axios";
import API from "../api";

function Vehicles({ vehicles, setVehicles }) {
  const [name, setName] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchVehicles = async () => {
      const res = await API.get("/vehicles");
      setVehicles(res.data.data);
    };
    fetchVehicles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddVehicle = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/vehicles", {
        name,
        vehicleNo,
        capacity,
        status,
      });
      setVehicles([...vehicles, res.data]);
      setName("");
      setVehicleNo("");
      setCapacity("");
      setStatus("");
    } catch (err) {
      console.error("Error adding vehicle:", err);
    }
  };

  const handleDeleteVehicle = async (id) => {
    try {
      await API.delete(`/vehicles/${id}`);
      setVehicles(vehicles.filter((v) => v._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Vehicles</h1>
      <form>
        <input
          type="text"
          placeholder="Vehicle Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Vehicle No"
          value={vehicleNo}
          onChange={(event) => setVehicleNo(event.target.value)}
        />
        <input
          type="text"
          placeholder="Capacity"
          value={capacity}
          onChange={(event) => setCapacity(event.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
      </form>
      <button onClick={handleAddVehicle}>Add Vehicle</button>
      <ul>
        {vehicles.map((each_vehicle) => (
          <li key={each_vehicle._id}>
            {each_vehicle.name} | {each_vehicle.vehicleNo} |{" "}
            {each_vehicle.capacity} | {each_vehicle.status}
            <button onClick={() => handleDeleteVehicle(each_vehicle._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehicles;
