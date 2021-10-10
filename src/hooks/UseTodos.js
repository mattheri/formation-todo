import { useContext } from 'react';
import { TodosContext } from '../blocks/todos-context/TodosContext';

const useTodos = () => {
	const todosContext = useContext(TodosContext);

	return todosContext;
}

export default useTodos;