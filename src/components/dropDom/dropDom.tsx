import { UserContext } from "../../contexts/userContext";
import { useContext, useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";


import {
    Container,

} from './dropDom-styles'


function Dropdom() {

  const { user } = useContext(UserContext);
  const navigate = useNavigate()

  return (
    <Container>
        
    </Container>
  );
}

  export default Dropdom;