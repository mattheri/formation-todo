
import Container from '../../components/container/Container';
import Modal from '../../components/modal/Modal';
import CreateTodo from '../create-todo/CreateTodo';
import Header from '../header/Header';
import TodosContextProvider from '../todos-context/TodosContext';
import Todos from '../todos/Todos';

import './App.css';

function App() {
  return (
    <TodosContextProvider>
      <Modal>
        <CreateTodo />
      </Modal>
      <Container fluid>
        <Header />
        <Container>
          <Todos />
        </Container>
      </Container>
    </TodosContextProvider>
  );
}

export default App;
