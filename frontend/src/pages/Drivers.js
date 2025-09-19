import React, {useState} from "react";

function Drivers({drivers, setDrivers}){
    const [driverName, setDriverName] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    const [contact, setContact] = useState("");
    const [availability, setAvailability] = useState("");

    const handleAddDriver = () => {
        const newDriver = {
            id: Date.now(),
            driverName: driverName,
            licenseNo: licenseNo,
            contact: contact,
            availability: availability
        }

        setDrivers([...drivers, newDriver])
        setDriverName("");
        setLicenseNo("");
        setContact("");
        setAvailability("");
    }

    const handleDeleteDriver = (id) => {
        const updated = drivers.filter((each_driver) => each_driver.id !== id)
        setDrivers(updated)
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Driver Name" value={driverName} onChange={(event) => setDriverName(event.target.value)} />
                <input type="text" placeholder="License No" value={licenseNo} onChange={(event) => setLicenseNo(event.target.value)} />
                <input type="number" placeholder="Contact No" value={contact} onChange={(event) => setContact(event.target.value)} />
                <input type="text" placeholder="Availability" value={availability} onChange={(event) => setAvailability(event.target.value)} />
            </form>
            <button onClick={handleAddDriver}>Add Driver</button>
            <ul>
                {drivers.map((each_driver) => (
                    <li key={each_driver.id}>
                        {each_driver.driverName} | {each_driver.licenseNo} | {each_driver.contact} | {each_driver.availability}
                        <button onClick={() => handleDeleteDriver(each_driver.id)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Drivers;