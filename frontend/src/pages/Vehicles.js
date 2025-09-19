import React, { useState } from "react";

function Vehicles({vehicles, setVehicles}) {
  const [vehicleName, setVehicleName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState("");

  const handleAddVehicle = () => {
    const newVehicle = {
      id: Date.now(),
      vehicleName: vehicleName,
      capacity: capacity,
      status: status,
    };

    setVehicles([...vehicles, newVehicle]);
    setVehicleName("");
    setCapacity("");
    setStatus("");
  };

  const handleDeleteVehicle = (id) => {
    const updated = vehicles.filter((v) => v.id !== id);
    setVehicles(updated);
  };

  return (
    <div>
      <h1>Vehicles</h1>
      <form>
        <input
          type="text"
          placeholder="Vehicle Name"
          value={vehicleName}
          onChange={(event) => setVehicleName(event.target.value)}
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
          <li key={eachVehicle.id}>
            {eachVehicle.vehicleName} | {eachVehicle.capacity} |{" "}
            {eachVehicle.status}
            <button onClick={() => handleDeleteVehicle(eachVehicle.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehicles;
