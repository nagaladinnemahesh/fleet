import React, {useState, useEffect} from "react";
import axios from "axios";

function Drivers({drivers, setDrivers}){
    const [name, setName] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    const [contact, setContact] = useState("");
    const [availability, setAvailability] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/drivers")
        .then(res => setDrivers(res.data))
        .catch(err => {
            console.error(err)
        })
    })

    const handleAddDriver = async () => {
        const newDriver = {name, licenseNo, contact, availability};
        try{
            const res = await axios.post("http://localhost:5000/api/drivers", newDriver);
            setDrivers([...drivers, res.data])
            setName("");
            setLicenseNo("");
            setContact("");
            setAvailability("");
        } catch(err){
            console.error(err)
        }
    }

    const handleDeleteDriver = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/api/drivers/${id}`);
            setDrivers(drivers.filter(d => d._id !== id));
        } catch(err){
            console.error(err)
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
                    <li key={each_driver.id}>
                        {each_driver.name} | {each_driver.licenseNo} | {each_driver.contact} | {each_driver.availability}
                        <button onClick={() => handleDeleteDriver(each_driver._id)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Drivers;