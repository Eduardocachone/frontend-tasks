import styled from "styled-components";

import { createGlobalStyle } from 'styled-components';

export const Container = styled.header`
    height: 100vh;
    background-color: #282C34;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export const ButtonIcon = styled.img`
    width:50px;
`;

export const ContainerInputs = styled.div`
    width:400px;
    height:450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    border: 2px solid #373C47;
    border-radius: 15px;
    background-color: #E5F2C9;

    .account{
        src: url(https://fonts.googleapis.com/css2?family=Cabin);
        font-size: 21px;
        font-family: 'Cabin', sans-serif;
    }

    .input{
        width: 300px;
        height: 40px;
        border-radius: 5px;
        border: 2px solid #065FD4;
        margin-top: 30px;
        padding: 10px;
        cursor: pointer;
    }

`;

export const ButtonCreate = styled.button`
    width:120px;
    height:40px;
    margin-top: 30px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #065FD4;
    background-color: #02C9D4;

    src: url(https://fonts.googleapis.com/css2?family=Cabin);
    font-size: 18px;
    font-family: 'Cabin', sans-serif;
`;

export const ButtonLogin = styled.span`

    margin-top: 35px;
    cursor: pointer;
    color: #000;

    src: url(https://fonts.googleapis.com/css2?family=Cabin);
    font-size: 18px;
    font-family: 'Cabin', sans-serif;
`;

export const Space = styled.div`
    width: 400px;
    display:flex ;
    justify-content:space-around;
`;


