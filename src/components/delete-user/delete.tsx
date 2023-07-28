import { useContext, useState , useEffect} from "react";
import { UserContext } from "../../contexts/userContext";


function Delete() {

  const {  handleDelete } = useContext(UserContext);

  return (
    <div>
        delete
        <button onClick={() =>{handleDelete()}} >deletar</button> 
        
    </div>
  );
}

  export default Delete;
  