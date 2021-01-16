import './App.css';
import { useState } from 'react';
import ClientTable from './component/ClientTable'
import FormSearch from './component/FormSearch'

function App() {
  const [clients, setClients] = useState([{id:Math.random()+1000 ,name:'Dialloe',firstName:'Djibril',tel:'7759983456',address:'Zone de captage'},
  {id:Math.random()+1000 ,name:'Dialloe',firstName:'Djibril',tel:'7759983456',address:'Zone de captage'},
  {id:Math.random()+1000,name:'Dialloe',firstName:'Djibril',tel:'7759983456',address:'Zone de captage'},
  {id:Math.random()+1000 ,name:'Dialloe',firstName:'Djibril',tel:'7759983456',address:'Zone de captage'},
  {id:Math.random()+1000 ,name:'Dialloe',firstName:'Djibril',tel:'7759983456',address:'Zone de captage'}
])

  const handleDelete=id=>{
    const updateClients=[...clients]
    const index=updateClients.findIndex(cli=>cli.id===id)
    updateClients.splice(index,1)
    setClients(updateClients)
  }
  const handleOnChange=(value)=>{
   const updateClients =[...clients];
   // la logique
  }
  return (
    <div className="App">
      
       <h1>Liste des clients</h1>
      <FormSearch onChange={handleOnChange}/>
      <ClientTable clients={clients} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
