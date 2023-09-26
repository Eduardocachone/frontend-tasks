
import AddTasks from '../../components/add-tasks/add-tasks';
import Divaider from '../../components/divaider/divaider';
import Header from '../../components/header/header';
import DefinitionTask from '../../components/task-definition/taskDefinition';



import {
  Container,

}from './tasks-styles';

  function Tasks() {


    return (
      <Container>
          <Header/>
          <AddTasks/>
          <Divaider/>
          <DefinitionTask/>
      </Container>
    );
  }

    export default Tasks;
  