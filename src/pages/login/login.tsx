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

}from './login-styles';


function SingIn() {

  const { handleLogin } = useContext(UserContext);

  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [isFieldsFilled, setIsFieldsFilled] = useState(false);

  const checkFields = () => {
    if (email && email.trim() !== "" && password && password.trim() !== "") {
      setIsFieldsFilled(true);
    } else {
      setIsFieldsFilled(false);
    }
  };
  

  useEffect(() => {
    checkFields();
  }, [email, password]);
  


  return (
    <Container>
        <ContainerInputs>
        <span className="account" >Faça login na sua conta</span>
          <input  className="input"  type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <input  className="input"  type="password" value={password} placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
          <Space>
            <ButtonLogin onClick={() =>{navigate('/')} } >Criar conta?</ButtonLogin>
            <ButtonCreate onClick={() =>{handleLogin(email,password)}} disabled={!isFieldsFilled} >logar</ButtonCreate>
          </Space>
        </ContainerInputs>
    </Container>
  );
}

  export default SingIn;
  