import { nanoid } from 'nanoid';

import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import { modalRef } from '../../components/modal/Modal';
import useTodos from '../../hooks/UseTodos';

const CreateTodo = () => {
	const { addTodo } = useTodos();

	const closeModal = () => modalRef.current.close();

	const onSubmit = async (values) => {
		const { title, description } = values;

		await addTodo({
			id: nanoid(),
			title: title,
			description: description,
			completed: false,
		});

		closeModal();
	}

	const initialValues = {
		title: '',
		description: '',
	}

	return(
		<>
			<Form initialValues={initialValues} onSubmit={onSubmit}>
				<Form.Input label='Titre' id='title' />
				<Form.Input label='Description' id='description' type='texteara' />
				<Button type="submit">Créer</Button>
			</Form>
			<Button variant="secondary" onClick={closeModal}>Cancel</Button>
		</>
	);
}

export default CreateTodo;