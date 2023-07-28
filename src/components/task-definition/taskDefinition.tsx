import React, { useContext, useEffect, useRef, useState } from "react";
import { TaskContext } from "../../contexts/taskContext";

import {
  Container,
  ContainerTasks,
  TaskItem,
  TaskTitle,
  TaskDescription,
  StylesDropdom,
  ContainerDropdomTasks,
  ButtonTasks,
  ButtonStyled,
  ContainerDropdomUpdate,
  Space,


} from './taskDefinition-styled';

const DefinitionTask = () => {
  const { tasks, getTasks, handleDelete , handleUpdateTask} = useContext(TaskContext);

  const [title, setTitle] = useState("");  
  const [description, setDescription] = useState("");

  useEffect(() => {
    getTasks();
  }, []);

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
  

  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [isOpenDropdomTasks, setIsOpenDropdomTasks] = useState(false);
  const dropdomRefTasks = useRef<HTMLDivElement>(null);
  const dropdownRefUpdate = useRef<HTMLDivElement>(null);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdomRefTasks.current &&
        !dropdomRefTasks.current.contains(event.target as Node) &&
        dropdownRefUpdate.current &&
        !dropdownRefUpdate.current.contains(event.target as Node)
      ) {
        setIsOpenDropdomTasks(false);
        setIsOpenUpdate(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const saveDadosClick = (task: any) => {
    setSelectedTask(task);
    setIsOpenDropdomTasks(!isOpenDropdomTasks);
  };


  return (
    <Container>
      <ContainerTasks>
        {tasks.map((task: any) => (
          <TaskItem key={task.tasks_id} onClick={() => saveDadosClick(task)}>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskDescription>{task.description}</TaskDescription>
          </TaskItem>
        ))}
      </ContainerTasks>
      <StylesDropdom>
        <ContainerDropdomTasks isOpenDropdomTasks={isOpenDropdomTasks} ref={dropdomRefTasks}>
          {selectedTask && (
            <>
              <p>{selectedTask.title}</p>
              <p>{selectedTask.description}</p>
            </>
          )}
          <ButtonStyled>
            <ButtonTasks onClick={() => { handleDelete(selectedTask.tasks_id) }}>Apagar</ButtonTasks>
            <ButtonTasks>Concluir</ButtonTasks>
            <ButtonTasks onClick={() => {setIsOpenUpdate(!isOpenUpdate)}} >Atualizar</ButtonTasks>
          </ButtonStyled>
        </ContainerDropdomTasks>

         <ContainerDropdomUpdate isOpenUpdate={isOpenUpdate} ref={dropdownRefUpdate} >
            <input  className="input"  type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
            <input  className="input"  type="text" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} />
            <Space>
              <ButtonTasks onClick={() =>{handleUpdateTask(title,description, selectedTask.tasks_id)}} disabled={!isFieldsFilled} >Atualizar</ButtonTasks>
            </Space>

          </ContainerDropdomUpdate>
      </StylesDropdom>
    </Container>
  );
};

export default DefinitionTask;