import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";


export const UserContext = createContext({} as any);

export const UserStore = ({ children }: { children: React.ReactNode }) => {

  const navigate = useNavigate();

  const [DropdomMenu, setDropdomMenu] = useState(false);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') as string);

    const recarregarPagina = () => {
      window.location.href = window.location.href;
    };


  
  const handleLogin = (email:any, password: any) => {
    api.post("/user/sign-in", { email, password }).then(({ data }) => {
      setLogin(true);
      navigate("/tasks");
      localStorage.setItem('token', data.token)
      getUser(data.token);
      setToken(data.token);
    }).catch((error) => {
      console.log('Usuário não encontrado', error);
    });
  };
  
  const getUser = (token: string) => {
    api.get('/user/get-user', { headers: { Authorization: token } })
    .then((response) => {
      const responseUser = response.data;  
      setUser(responseUser);
      setLogin(true);
      navigate('/tasks');
    })
    .catch((error) => {
      console.log('Usuário não encontrado', error);
    });
  }
  
  const logOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
    setUser({});
    navigate('/')
  };
  useEffect(() => {
      getUser(token);
  }, [token])
  
  const handleCreate = ( name:any, email:any, password: any) => {
    api.post("/user/sign-up", {  name, email, password }).then(() => {
      navigate("/tasks");
      handleLogin(email, password);
      console.log('Usuário criado e logado com sucesso');
    }).catch((error) => {
      console.log('Usuário não criado', error);
    });
  };

  const handleUpdate = (name:any, email:any, password: any) => {
    api.put("/user/update", { name,email, password},{ headers: { Authorization: token } }).then(({  }) => {
      handleLogin(email, password);
      console.log('Usuário atualizado com suseso');
    }).catch((error) => {
      console.log('Usuário não atualizado', error);
    });
  };

  const handleDelete = () => {
    api.delete("/user/delete",{ headers: { Authorization: token } }).then(({  }) => {
      localStorage.removeItem('token');
      setLogin(false);
      setUser({});
      navigate('/');
      alert('conta deletada');
      console.log('Usuário deletado com suseso');
    }).catch((error) => {
      console.log('Usuário não deletado', error);
    });
  };


  return (
    <UserContext.Provider
      value={{   
        handleCreate,
        handleLogin,
        handleUpdate,
        handleDelete,
        getUser,
        logOut,
        login,
        user,
        DropdomMenu,
        setDropdomMenu
            }}>
      {children}
    </UserContext.Provider>
  );
};
