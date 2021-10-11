import { nanoid } from 'nanoid';

import { useRef } from 'react';

import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import Modal from '../../components/modal/Modal';
import useTodos from '../../hooks/UseTodos';

export let createTodoModal = null;

const CreateTodo = () => {
	const { addTodo } = useTodos();

	createTodoModal = useRef(null);

	const closeModal = () => createTodoModal.current.close();

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
		<Modal ref={createTodoModal}>
			<Form initialValues={initialValues} onSubmit={onSubmit}>
				<Form.Input label='Titre' id='title' />
				<Form.Input label='Description' id='description' type='texteara' />
				<Button type="submit">Créer</Button>
			</Form>
			<Button variant="secondary" onClick={closeModal}>Cancel</Button>
		</Modal>
	);
}

export default CreateTodo;