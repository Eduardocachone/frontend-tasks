import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

import {
  Container,
  ButtonIcon,
  ContainerInputs,
  ButtonCreate,
  ButtonLogin,
  Space
} from './update-styles';

function SingUp() {
  const { handleUpdate, user } = useContext(UserContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  return (
    <Container>
      <ContainerInputs>
        <span className="account">Atualizar dados da conta?</span>
        <input className="input" type="text" value={name} placeholder="nome" onChange={(e) => setName(e.target.value)}/>
        <input className="input" type="email"value={email}placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <input className="input" type="password" value={password} placeholder="senha" onChange={(e) => setPassword(e.target.value)}/>
        <Space>
        <ButtonCreate onClick={() => { handleUpdate(name, email, password) }} disabled={!isFieldsFilled}>
          Atualizar
        </ButtonCreate>

        </Space>
      </ContainerInputs>
    </Container>
  );
}

export default SingUp;
