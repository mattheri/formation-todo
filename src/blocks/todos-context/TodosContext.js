import { createContext, useState, useEffect, useRef } from 'react';

import LocalStorage from '../../services/LocalStorage';

export const TodosContext = createContext(null);

const TodosContextProvider = ({ children }) => {
	const firstFetch = useRef(true);
	const [todos, setTodos] = useState([]);

	const addTodo = async (todo) => {

		const response = await LocalStorage.addItem('todos', todo);
		setTodos(response);
	}

	const removeTodo = async (todo) => {
		const response = await LocalStorage.removeItem('todos', todo);
		setTodos(response);
	}

	const updateTodo = async (todo) => {
		const response = await LocalStorage.updateItem('todos', todo);
		setTodos(response);
	}

	const clearTodos = async () => {
		const response = await LocalStorage.removeItems('todos');
		setTodos(response);
	}

	const getTodos = async () => {
		const response = await LocalStorage.getItemByKey('todos');
		setTodos(response.filter(todo => todo.completed === false));
		firstFetch.current = false;
	}

	useEffect(
		() => {
			if (firstFetch.current) getTodos();
		},
		[todos]
	)

	return(
		<TodosContext.Provider value={{ todos: todos.filter(todo => todo.completed === false), addTodo, removeTodo, updateTodo, clearTodos }}>
			{children}
		</TodosContext.Provider>
	);
}

export default TodosContextProvider;