import { useContext, useState , useEffect} from "react";
import { TaskContext } from "../../contexts/taskContext";


function CreateTask() {

  const { handleCreateTask , tasks} = useContext(TaskContext);

  const [title, setTitle] = useState("");  
  const [description, setDescription] = useState("")


  return (
    <div>
        task create
        <input type="email" value={title} placeholder="titulo" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={description} placeholder="descriçao" onChange={(e) => setDescription(e.target.value)} />
        <button onClick={() =>{handleCreateTask(title,description)}} >adicionar task</button>
        <span> {tasks.title} </span>
    </div>
  );
}

  export default CreateTask;
  