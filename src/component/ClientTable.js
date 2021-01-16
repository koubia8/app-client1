import ClientRow from './ClientRow'

const ClientTable=({clients,onDelete})=>{
    console.log(clients)
    const rows= clients.map((cli) => (<ClientRow key={cli.id}
        id={cli.id}
        name={cli.name}
        firstName={cli.firstName}
        tel={cli.tel}
        address={cli.address}
        onDelete={onDelete}
    />));
   
    return(
        <>
         <table>
             <thead>
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>FIRSTNAME</th>
                <th>TELEPHONE</th>
                <th>ADRESS</th>
                </tr>
                </thead>
            <tbody>
            {rows}
            </tbody>
          
         </table>
        </>
    )
}

export default ClientTable