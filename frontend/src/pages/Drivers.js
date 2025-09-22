import React, {useEffect, useState} from "react";
// import axios from "axios";
import API from "../api";

function Drivers({drivers, setDrivers}){
    const [name, setName] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    const [contact, setContact] = useState("");
    const [availability, setAvailability] = useState("");

    useEffect(() => {
    const fetchDrivers = async () => {
      const res = await API.get("/drivers");
      setDrivers(res.data.data);
    };
    fetchDrivers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const handleAddDriver = async (e) => {
        e.preventDefault();
        try{
            const res = await API.post("/drivers", {
                name, licenseNo, contact, availability
            });
            setDrivers([...drivers, res.data])
            setName("");
            setLicenseNo("");
            setContact("");
            setAvailability("");
        } catch(err){
            console.error("Error adding driver:", err);
        }
    }

    const handleDeleteDriver = async (id) => {
        try{
            await API.delete(`/drivers/${id}`);
            setDrivers(drivers.filter((d) => d._id !== id));
        } catch(err){
            console.error("Error deleting vehicle:", err);
        }
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Driver Name" value={name} onChange={(event) => setName(event.target.value)} />
                <input type="text" placeholder="License No" value={licenseNo} onChange={(event) => setLicenseNo(event.target.value)} />
                <input type="number" placeholder="Contact No" value={contact} onChange={(event) => setContact(event.target.value)} />
                <input type="text" placeholder="Availability" value={availability} onChange={(event) => setAvailability(event.target.value)} />
            </form>
            <button onClick={handleAddDriver}>Add Driver</button>
            <ul>
                {drivers.map((each_driver) => (
                    <li key={each_driver._id}>
                        {each_driver.name} | {each_driver.licenseNo} | {each_driver.contact} | {each_driver.availability}
                        <button onClick={() => handleDeleteDriver(each_driver._id)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Drivers;