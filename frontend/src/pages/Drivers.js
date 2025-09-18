function Drivers(){
    const drivers = [
        {id:1, name:"tony", license: "343435678"},
        {id:1, name:"peter", license: "37593539"},
        {id:1, name:"thor", license: "23893892"},
        {id:1, name:"banner", license: "23525233"}
    ]
    return (
        <div>
            <ul>
                {drivers.map(each_driver => (
                    <li key={each_driver.id}>
                        {each_driver.name} - {each_driver.license}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Drivers;