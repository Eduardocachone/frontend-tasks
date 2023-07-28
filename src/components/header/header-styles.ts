import styled from "styled-components";

export const Container = styled.header`
      

    top: 0;
    left: 0;
    width: 100%;
    
    height: 65px;
    background-color: #21252B;
    display: flex;
    justify-content: space-around;
    align-items: center;

    z-index: 1;
`;

export const Urgent = styled.div`
    width: 120px;
    height: 30px;
    border-radius: 20px;
    background-color: red;
    color: #ffff ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`;

export const Important = styled.div`
    width: 120px;
    height: 30px;
    border-radius: 20px;
    background-color: yellow;
    color: #ffff ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`;

export const Secondary = styled.div`
    width: 120px;
    height: 30px;
    border-radius: 20px;
    background-color: green;
    color: #ffff ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`;

export const Concluid = styled.div`
    width: 120px;
    height: 30px;
    border-radius: 20px;
    background-color: blue;
    color: #ffff ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`;

export const Profale = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 40px;
`;

export const Profale2 = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
`;


export const ContainerDropdom = styled.div<{isOpen: boolean}> `
    display:  ${({isOpen})=> isOpen? 'flex':'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 250px;
    background-color: #E5F2C9;
    border-radius: 20px;


    margin-top: 200px;
    margin-left: 80%;
    position: absolute;
    z-index: 0;
`;

export const ButtonsDropdom = styled.button `
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 180px;
    height: 40px;
    background-color: gray;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
`;

export const SpanDropdom = styled.span `
      font-size: 20px;
`;




