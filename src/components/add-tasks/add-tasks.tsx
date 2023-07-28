import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../contexts/taskContext";

import {
    Container,
    Urgent,
    Important,
    Secondary,
    ButtonIcon,
    ContainerDropdomUrgent,
    ContainerDropdomImportant,
    ContainerDropdomSecondary,
    StylesDropdom,
    ButtonCreate,
    ButtonLogin,
    Space
} from './add-tasks-styles'
import Adiçao from "../../assets/Adiçao.png"



function AddTasks() {
  const { handleCreateTask  } = useContext(TaskContext);
  const [title, setTitle] = useState("");  
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const [isFieldsFilled, setIsFieldsFilled] = useState(false);

  const checkFields = () => {
    if (title && title.trim() !== "" && description && description.trim() !== "") {
      setIsFieldsFilled(true);
    } else {
      setIsFieldsFilled(false);
    }
  };
  

  useEffect(() => {
    checkFields();
  }, [title, description]);
  

  const [isOpenUrgent, setIsOpenUrgent] = useState(false);
  const [isOpenImportant, setIsOpenImportant] = useState(false);
  const [isOpenSecondary, setIsOpenSecondary] = useState(false);
  const dropdownRefUrgent = useRef<HTMLDivElement>(null);
  const dropdownRefImportant = useRef<HTMLDivElement>(null);
  const dropdownRefSecondary = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefUrgent.current &&
        !dropdownRefUrgent.current.contains(event.target as Node) 
        // dropdownRefImportant.current &&
        // !dropdownRefImportant.current.contains(event.target as Node) &&
        // dropdownRefSecondary.current &&
        // !dropdownRefSecondary.current.contains(event.target as Node)
      ) {
        setIsOpenUrgent(false);
        setIsOpenImportant(false);
        setIsOpenSecondary(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
        <Urgent  onClick={() => setIsOpenUrgent(!isOpenUrgent)} >
            <ButtonIcon alt="adicionar" src={Adiçao}/>
        </Urgent>
        {/* <Important  onClick={() => setIsOpenImportant(!isOpenImportant)} > 
            <ButtonIcon alt="adicionar" src={Adiçao}/>

        </Important>
        <Secondary  onClick={() => setIsOpenSecondary(!isOpenSecondary)} > 
            <ButtonIcon alt="adicionar" src={Adiçao}/>
        </Secondary> */}

        <StylesDropdom>
          <ContainerDropdomUrgent  isOpenUrgent={isOpenUrgent} ref={dropdownRefUrgent} >
            <input  className="input"  type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
            <input  className="input"  type="text" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} />
            <Space>
              <ButtonCreate onClick={() =>{handleCreateTask(title,description)}} disabled={!isFieldsFilled} >Criar</ButtonCreate>
            </Space>

          </ContainerDropdomUrgent>
{/* 
          <ContainerDropdomImportant  isOpenImportant={isOpenImportant} ref={dropdownRefImportant} >
            tasks inportantes
          </ContainerDropdomImportant>

          <ContainerDropdomSecondary isOpenSecondary={isOpenSecondary} ref={dropdownRefSecondary} >
            tasks secundarias
          </ContainerDropdomSecondary> */}

        </StylesDropdom>
       

    </Container>
  );
}

  export default AddTasks;
  