import React, {useEffect , useState} from 'react'
import axios from 'axios'


const TableCliente = () => {

    const [users , setUsers] = useState({documents:[]})
    useEffect(() =>{
        const fetchUsersList = async () => {
            const {data} = await axios(
                "http://localhost:8080/cliente"
            );
            setUsers({documents:data});
            console.log(data);
        };
        fetchUsersList();
    }, [setUsers]);

    return (
        <div>
           <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Telefono</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
        {users.documents &&
        users.documents.map((item) =>(
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.apellido}</td>
            <td>{item.telefono}</td> 
            <td><button className="btn btn-primary" >Editar</button> {"   "} 
              <button className="btn btn-danger">Eliminar</button></td>       
        </tr>
        ))
        }    
  </tbody>
</table> 
        </div>
    )
}

export default TableCliente
