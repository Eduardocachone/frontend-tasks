import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    background-color: #282C34;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;


export const InformationUser = styled.div`
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top:50px;
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Profale = styled.div`
    width: 100px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 70px;
`;

export const NameInformation = styled.span`  
    font-size: 60px;
    color:#fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const EmailInformation = styled.span`
    font-size: 30px;
    color:#fff;
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ButtonUser = styled.button`
    width: 250px;
    height: 40px;
    background-color: gray;
    font-size: 25px;
    color:#fff;
    margin-top: 10px;
    border:none;
    border-radius: 10px;
    cursor: pointer;
`;

export const ContainerDropdom = styled.div<{isOpenDel: boolean}> `
    display:  ${({isOpenDel})=> isOpenDel? 'flex':'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height:300px;
    background-color: red;
    border-radius: 20px;

    margin-top: 200px;
    margin-right: 1000px;
    position: absolute;
    z-index: 0;
`;

export const ContainerDropdomPut = styled.div<{isOpenPut: boolean}> `
    display:  ${({isOpenPut})=> isOpenPut? 'flex':'none'};
    width:400px;
    height:450px;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    border: 2px solid #373C47;
    border-radius: 15px;
    background-color: #E5F2C9;

    margin-top: 400px;
    margin-right: 1000px;
    position: absolute;
    z-index: 0;
`;

export const SpanDropdom = styled.span `
    font-size: 20px;
    margin-bottom: 40px;
    color:#ffff;
`;

export const ButtonBack = styled.button`
    width: 280px;
    height: 50px;
    background-color: gray;
    font-size: 25px;
    color:#fff;
    margin-top: 10px;
    border:none;
    border-radius: 12px;
    cursor: pointer;
    margin-top: 100px;
`;

