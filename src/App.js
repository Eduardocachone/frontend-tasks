import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useState , useEffect} from "react";
import { UserContext } from "./contexts/userContext";

import { UserStore } from './contexts/userContext';
import { TasksStore } from './contexts/taskContext';

import './App.css';
import CreateTask from './components/createTask/createTask';
import Delete from './components/delete-user/delete';
import SingUp from './pages/create-user/create-user';
import SingIn from './pages/login/login';
import Update from './components/update-user/update';
import Header from './components/header/header';
import AddTasks from './components/add-tasks/add-tasks';
import Divaider from './components/divaider/divaider';
import Tasks from "./pages/tasks/tasks";
import UserEdit from "./pages/user-edit/user-edit";
import UrgentePage from "./pages/Urgente-page/page-urgente";
import InportantPage from "./pages/Inportant-page/Inportante-page";
import SecundaryPage from "./pages/Secdary-page/Secondary-page";

function App() {
  
  const { login } = useContext(UserContext);
  return (
    <>
    <BrowserRouter>
        <TasksStore>
          <UserStore>
            <Routes>
              <Route path="/tasks" element={<Tasks/>} />             
              <Route path="/" element={<SingUp/>} />             
              <Route path="/login" element={<SingIn/>} />
              <Route path="/user-edit" element={<UserEdit/>} />
              <Route path="/urgent" element={<UrgentePage/>} />
              <Route path="/inportant" element={<InportantPage/>} />
              <Route path="/secundary" element={<SecundaryPage/>} />

            </Routes>
          </UserStore>
        </TasksStore>
    </BrowserRouter>

    </>
  );
}

export default App;
