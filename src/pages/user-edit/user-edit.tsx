import { UserContext } from "../../contexts/userContext";
import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Profale,
  InformationUser,
  Information,
  NameInformation,
  EmailInformation,
  ButtonUser,
  ContainerDropdom,
  SpanDropdom,
  ContainerDropdomPut,
  ButtonBack,
} from './user-edit-styles';
import Update from "../../components/update-user/update";


function UserEdit() {
  const { user, handleDelete } = useContext(UserContext);
  const navigate = useNavigate();

  const [isOpenDel, setIsOpenDel] = useState(false);
  const [isOpenPut, setIsOpenPut] = useState(false);
  const dropdownRefDel = useRef<HTMLDivElement>(null);
  const dropdownRefPut = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefDel.current &&
        !dropdownRefDel.current.contains(event.target as Node) &&
        dropdownRefPut.current &&
        !dropdownRefPut.current.contains(event.target as Node)
      ) {
        setIsOpenDel(false);
        setIsOpenPut(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Container>


      <InformationUser>
        <Profale>
          {user && user.name ? user.name.charAt(0).toUpperCase() : ""}
        </Profale>
        <Information>
          <NameInformation>
            {user && user.name ? truncateText(user.name, 20) : "Faça login"}
          </NameInformation>
          <EmailInformation>
            {user && user.email ? truncateText(user.email, 35) : ""}
          </EmailInformation>
        </Information>
        <Information></Information>
        <Information></Information>
        <Information>
          <ButtonUser onClick={() => setIsOpenPut(!isOpenPut)}>
            Atualizar
          </ButtonUser>

          <ButtonUser onClick={() => setIsOpenDel(!isOpenDel)}>
            Deletar
          </ButtonUser>

          <ContainerDropdom isOpenDel={isOpenDel} ref={dropdownRefDel}>
            <SpanDropdom>
              Você tem certeza que deseja deletar esta conta?
            </SpanDropdom>
            <ButtonUser onClick={() => { handleDelete() }}>
              Deletar
            </ButtonUser>

            <ButtonUser onClick={() => setIsOpenDel(!isOpenDel)}>
              Voltar
            </ButtonUser>
          </ContainerDropdom>

          <ContainerDropdomPut isOpenPut={isOpenPut} ref={dropdownRefPut}>
            <Update />
          </ContainerDropdomPut>
        </Information>
      </InformationUser>


      
      <ButtonBack onClick={() => {navigate('/tasks')}} >
        Voltar ao menu
      </ButtonBack>

    </Container>
  );
}

export default UserEdit;
