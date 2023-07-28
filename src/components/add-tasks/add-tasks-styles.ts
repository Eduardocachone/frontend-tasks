import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 300px;
    background-color: #282C34;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export const ButtonIcon = styled.img`
    width:50px;
`;

export const Urgent = styled.div`
    width: 480px;
    height: 180px;
    border-radius: 20px;
    background-color: gray;
    color: #ffff ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    border: 1px solid #000;
`;

export const Important = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 20px;
    background-color: yellow;
    color: #ffff ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`;

export const Secondary = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 20px;
    background-color: green;
    color: #ffff ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`;

export const ContainerDropdomUrgent = styled.div<{isOpenUrgent: boolean}> `
    display:  ${({isOpenUrgent})=> isOpenUrgent? 'flex':'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height:300px;
    background-color: gray;
    border-radius: 20px;
    border: 1px solid #000;

    margin-left: center;
    margin-bottom: 100px;
    position: fixed;

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

export const ContainerDropdomImportant = styled.div<{isOpenImportant: boolean}> `
    display:  ${({isOpenImportant})=> isOpenImportant? 'flex':'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height:300px;
    background-color: yellow;
    border-radius: 20px;


    position: absolute;
    z-index: 0;
`;

export const ContainerDropdomSecondary = styled.div<{isOpenSecondary: boolean}> `
    display:  ${({isOpenSecondary})=> isOpenSecondary? 'flex':'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height:300px;
    background-color: green;
    border-radius: 20px;


    position: absolute;
    z-index: 0;
`;

export const StylesDropdom = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    margin-top: 200px;
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




