import { createContext, useState, useEffect } from "react";
import api from "../api";

interface Task {
  tasks_id: any;
  title: string;
  description: string;
  user_user_id: any;
}

export const TaskContext = createContext<any>({});

export const TasksStore = ({ children }: { children: React.ReactNode }) => {
  const [token] = useState(localStorage.getItem("token"));
  const [tasks, setTasks] = useState<Task[]>([]);

  const recarregarPagina = () => {
    window.location.href = window.location.href;
  };

  const handleCreateTask = (title: string, description: string) => {
    api.post("/task/create/task", { title, description }, { headers: { Authorization: token }})
    .then(() => {
      recarregarPagina();
    }).catch((error) => {
        console.log("Erro ao criar a task", error);
      });
  };
  
  
  
  const getTasks = () => {
    api.get("/task/get/task", { headers: { Authorization: token } })
      .then((response) => {
        console.log(response.data);
        const responsetask = response.data;
        setTasks(responsetask.tasks);
      })
      .catch((error) => {
        console.log("Erro ao obter as tasks", error);
      });
  };

  const handleUpdateTask = (title: string, description: string, tasks_id:any) => {
    api.put("/task/update/task", { title, description , tasks_id})
    .then(() => {
      recarregarPagina();
    }).catch((error) => {
        console.log("Erro ao criar a task", error);
      });
  };

  const handleDelete = ( tasks_id:any) => {
    api.delete("/task/delete/task", { data: { tasks_id: tasks_id } }).then(() => {
      recarregarPagina()
    }).catch((error) => {
      console.log('tarefa não deletado', error);
    });
  };


  const handleDeleteAlltask = () => {
    api.delete("/task/deleteAll/task",{ headers: { Authorization: token } }).then(() => {
      recarregarPagina();
      console.log('todas as tarefas deletadas com suseso');
    }).catch((error) => {
      console.log('tarefas não deletadas', error);
    });
  };


  return (
    <TaskContext.Provider
      value={{
        handleCreateTask,
        getTasks,
        tasks,
        handleDeleteAlltask,
        handleDelete,
        handleUpdateTask,
        
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
