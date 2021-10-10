import useTodos from '../../hooks/UseTodos';

import { modalRef } from '../../components/modal/Modal';

import Button from '../../components/button/Button';
import Container from '../../components/container/Container';

import './Header.css';

const Header = () => {
	const openModal = () => modalRef.current.open();
	const { clearTodos } = useTodos();

	const clearTodosHandler = async () => await clearTodos();
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
						<Button onClick={clearTodosHandler}>Supperimer toutes les tâches</Button>
					</li>
				</ul>
			</nav>
		</Container>
	);
}

export default Header;