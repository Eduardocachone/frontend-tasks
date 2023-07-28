import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
  background-color: #282c34;
  display: flex;
  justify-content: center;
`;

export const ContainerTasks = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 50px;
`;

export const TaskItem = styled.div`
  width: 200px;
  height: 200px;
  background-color: gray;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid black;
`;

export const TaskTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TaskDescription = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const ContainerDropdomTasks = styled.div<{isOpenDropdomTasks: boolean}> `
  display:  ${({isOpenDropdomTasks})=> isOpenDropdomTasks? 'flex':'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height:300px;
  background-color: #ffff;
  border-radius: 20px;
  border: 2px solid #000;

  position: fixed;
  top: 200px;
  left: center;
  z-index: 0;
`;

export const ButtonTasks = styled.button`
    width:120px;
    height:40px;
    margin-top: 30px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;
    background-color: gray;

    src: url(https://fonts.googleapis.com/css2?family=Cabin);
    font-size: 18px;
    font-family: 'Cabin', sans-serif;
`;

export const ButtonStyled = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerDropdomUpdate = styled.div<{isOpenUpdate: boolean}> `
  display:  ${({isOpenUpdate})=> isOpenUpdate? 'flex':'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height:300px;
  background-color: #ffff;
  border-radius: 20px;

  position: fixed;
  top: 200px;
  left: center;
  z-index: 0;

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

export const Space = styled.div`
    width: 400px;
    display:flex ;
    justify-content:space-around;
`;


