import React, { useState, useEffect } from "react";
import API from "../api";

function Vehicles({ vehicles, setVehicles }) {
  const [name, setName] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 5;

  const fetchVehicles = async (currentPage = page) => {
        try {
            const res = await API.get(`/vehicles?page=${currentPage}&limit=${limit}`);
            setVehicles(res.data.data);
            setTotalPages(res.data.totalPages);    
        } catch (err) {
            console.error("Error fetching vehicles:", err);
        }
    }


  useEffect(() => {
    fetchVehicles(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleAddVehicle = async (e) => {
    e.preventDefault();
    try {
      await API.post("/vehicles", {
        name,
        vehicleNo,
        capacity,
        status,
      });
      fetchVehicles(page);;
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
      fetchVehicles(page); 
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
            {each_vehicle.name} | {each_vehicle.vehicleNo} | {each_vehicle.capacity} |{" "}
            {each_vehicle.status}
            <button onClick={() => handleDeleteVehicle(each_vehicle._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* Pagination Controls */}
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span>
          {" "}
          Page {page} of {totalPages}{" "}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>  
    </div>
  );
}

export default Vehicles;
