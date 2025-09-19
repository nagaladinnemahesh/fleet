import React, { useState, useEffect } from "react";
import axios from "axios";

function Vehicles({ vehicles, setVehicles }) {
  const [name, setName] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vehicles")
      .then((res) => setVehicles(res.data))
      .catch((err) => {
        console.error(err);
      });
  });

  const handleAddVehicle = async () => {
    const newVehicle = { name, vehicleNo, capacity, status };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/vehicles",
        newVehicle
      );
      setVehicles([...vehicles, res.data]);
      setName("");
      setVehicleNo("");
      setCapacity("");
      setStatus("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteVehicle = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/vehicles/${id}`);
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
          type="tex"
          placeholder="Status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
      </form>
      <button onClick={handleAddVehicle}>Add Vehicle</button>
      <ul>
        {vehicles.map((eachVehicle) => (
          <li key={eachVehicle._id}>
            {eachVehicle.name} | {eachVehicle.vehicleNo} |{" "}
            {eachVehicle.capacity} |{eachVehicle.status}
            <button onClick={() => handleDeleteVehicle(eachVehicle._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehicles;
