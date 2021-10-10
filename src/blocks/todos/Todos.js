import Card from '../../components/card/Card';
import Container from '../../components/container/Container';
import useTodos from '../../hooks/UseTodos';

import './Todos.css';

const Todos = () => {
	const { todos, removeTodo } = useTodos();

	return (
		<Container fluid className='todos-container'>
			{todos.map((todo, index) => {
				const onRemove = () => removeTodo(todo);

				return (
					<Card onRemove={onRemove} key={todo.id} index={index} todo={todo} />
				)
		})}
		</Container>
	)
}

export default Todos;