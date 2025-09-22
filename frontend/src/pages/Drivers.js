import React, {useEffect, useState} from "react";
import API from "../api";

function Drivers({drivers, setDrivers}){
    const [name, setName] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    const [contact, setContact] = useState("");
    const [availability, setAvailability] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const limit = 5;
    
    const fetchDrivers = async (currentPage = page) => {
        try {
            const res = await API.get(`/drivers?page=${currentPage}&limit=${limit}`);
            setDrivers(res.data.data);
            setTotalPages(res.data.totalPages);    
        } catch (err) {
            console.error("Error fetching drivers:", err);
        }
    }

    useEffect(() => {
    fetchDrivers(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

    // console.log({ name, licenseNo, contact, availability });


    const handleAddDriver = async (e) => {
        e.preventDefault();
        try{
            await API.post("/drivers", {
                name, licenseNo, contact, availability
            });
            fetchDrivers(page);
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
            fetchDrivers(page);
        } catch(err){
            console.error("Error deleting driver:", err);
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
            {each_driver.name} | {each_driver.licenseNo} | {each_driver.contact} |{" "}
            {each_driver.availability}
            <button onClick={() => handleDeleteDriver(each_driver._id)}>
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
    )
}

export default Drivers;