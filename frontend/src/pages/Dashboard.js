function Dashboard({vehicles, drivers}){
    return (
        <div>
            <h1>Dashboard Overview</h1>
            <p>No of Drivers: {drivers?.length ?? 0}</p>
            <p>No of Vehicles: {vehicles?.length ?? 0}</p>
        </div>
    )
}

export default Dashboard;