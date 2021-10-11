import useTodos from '../../hooks/UseTodos';

import { createTodoModal } from '../create-todo/CreateTodo';
import { confirmationModal } from '../confirmation-modal/ConfirmationModal';

import Button from '../../components/button/Button';
import Container from '../../components/container/Container';

import './Header.css';
import { useEffect } from 'react';

const Header = () => {
	const openModal = () => createTodoModal.current.open();
	const { clearTodos } = useTodos();

	const clearTodosHandler = async () => await clearTodos();

	const confirm = () => confirmationModal.current.open();

	useEffect(
		() => {
			if (confirmationModal.current) {
				confirmationModal.current.register(clearTodosHandler);
			}
		},
		[confirmationModal]
	)

	return(
		<Container as='header' fluid className='header'>
			<div className='logo'>
				<h3 className='logo-title'>Super Todo</h3>
			</div>
			<nav className='header-menu'>
				<ul className='header-menu-list'>
					<li className='header-menu-item'>
						<Button onClick={openModal}>Ajouter une tâche</Button>
					</li>
					<li className='header-menu-item'>
						<Button onClick={confirm}>Supperimer toutes les tâches</Button>
					</li>
				</ul>
			</nav>
		</Container>
	);
}

export default Header;