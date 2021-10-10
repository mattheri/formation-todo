import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import useTodos from '../../hooks/UseTodos';

const TodoForm = ({ todo }) => {
	const { id, title, description, completed } = todo;
	const { updateTodo } = useTodos();

	const onSubmit = (values) => {
		const data = {
			id,
			title: values[`title-${id}`],
			description: values[`description-${id}`],
			completed
		}

		updateTodo(data);
	}

	return(
		<Form onSubmit={onSubmit} initialValues={{ [`title-${id}`]: title, [`description-${id}`]: description }}>
			<Form.Input id={`title-${id}`} onClickShowInput />
			<Form.Input type="textarea" id={`description-${id}`} onClickShowInput />
			<Button type='submit'>Mise à jour</Button>
		</Form>
	);
};

export default TodoForm;