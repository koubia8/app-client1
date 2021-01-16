const ClientRow=({id,name,firstName,tel,address,onDelete})=>{
   
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{firstName}</td>
            <td>{tel}</td>
            <td>{address}</td>
           <td >
               <button onClick={()=>onDelete(id)}>Del</button>
           </td>
        </tr>
    )
}

export default ClientRow;