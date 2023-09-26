import { useContext, useState , useEffect} from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

import {
  Container,
  ButtonIcon,
  ContainerInputs,
  ButtonCreate,
  ButtonLogin,
  Space

}from './create-user-styles';

function SingUp() {

  const { handleCreate } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const [isFieldsFilled, setIsFieldsFilled] = useState(false);

  const checkFields = () => {
    if (name && name.trim() !== "" && email && email.trim() !== "" && password && password.trim() !== "") {
      setIsFieldsFilled(true);
    } else {
      setIsFieldsFilled(false);
    }
  };
  

  useEffect(() => {
    checkFields();
  }, [name, email, password]);
  


  return (
    <Container>
      <ContainerInputs>
        <span className="account" >Criar uma conta?</span>
        <input className="input" type="text" value={name} placeholder="nome" onChange={(e) => setName(e.target.value)}/>
        <input className="input" type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input className="input" type="password" value={password} placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
             
        <Space>
          <ButtonLogin onClick={() =>{navigate('/login')} } >Fazer login?</ButtonLogin>
          <ButtonCreate onClick={() =>{handleCreate(name,email,password)}} disabled={!isFieldsFilled} >Criar conta</ButtonCreate>
        </Space>
      </ContainerInputs>
    </Container>
  );
}


export default SingUp;