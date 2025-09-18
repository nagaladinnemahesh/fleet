function Vehicles(){
    const vehicles = [
        {id: 1, name: "Truck 1", capacity: 40, status: "Active"},
        {id: 2, name: "Van 1", capacity: 5, status: "Inactive"},
        {id: 3, name: "Truck 2", capacity: 30, status: "In Service"},
        {id: 4, name: "Van 2", capacity: 20, status: "Active"}
    ]
    return(
        <div>
            <h2>Vehicles</h2>
            <ul>
                {vehicles.map(each_vehicle => (
                    <li key={each_vehicle.id}>
                        {each_vehicle.name} - {each_vehicle.capacity+" Tons"} - {each_vehicle.status} 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Vehicles;