function Dashboard({vehicles, drivers}){
    return (
        <div>
            <h1>Dashboard Overview</h1>
            <p>No of Drivers: {drivers.length}</p>
            <p>No of Vehicles: {vehicles.length}</p>
        </div>
    )
}

export default Dashboard;