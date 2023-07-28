import { UserContext } from "../../contexts/userContext";
import react , { useContext, useState , useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../contexts/taskContext";


import {
    Container,
    Urgent,
    Important,
    Secondary,
    Concluid,
    Profale,
    Profale2,
    ContainerDropdom,
    ButtonsDropdom,
    SpanDropdom
} from './header-styles'

function Header() {
  const { handleDeleteAlltask } = useContext(TaskContext);

  const [isOpen, setIsOpen] = useState(false);
  const { user , logOut} = useContext(UserContext);
  const dropdownRef = useRef<HTMLDivElement>(null); // Referência para o elemento do dropdown
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <Container>
        <Urgent onClick={() => {navigate('/urgent')}} >Urgente</Urgent>
        <Important onClick={() => {navigate('/inportant')}} >Inportante</Important>
        <Secondary onClick={() => {navigate('/secundary')}} >Secundarias</Secondary>
        <Concluid>Concluidas</Concluid>

          <Profale onClick={() => setIsOpen(!isOpen)}  >    
            {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
          </Profale>
          

        <ContainerDropdom isOpen={isOpen}  ref={dropdownRef} >
          <Profale onClick={() => setIsOpen(!isOpen)} >    
            {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
          </Profale>

          <ButtonsDropdom onClick={() =>{navigate('/user-edit')}} >
            <SpanDropdom >Perfil</SpanDropdom>
          </ButtonsDropdom>

          <ButtonsDropdom onClick={() => {handleDeleteAlltask()}} >
            <SpanDropdom >Apagr tasks</SpanDropdom>
          </ButtonsDropdom>

          <ButtonsDropdom onClick={() =>{logOut()}} >           
            <SpanDropdom >Sair</SpanDropdom>           
          </ButtonsDropdom>
        </ContainerDropdom>

    </Container>
  );
}


export default Header;