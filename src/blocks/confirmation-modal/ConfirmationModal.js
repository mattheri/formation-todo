import { useRef } from 'react';

import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';

import './ConfirmationModal.css';

export let confirmationModal = null;

const ConfirmationModal = () => {
	confirmationModal = useRef(null);

	const closeModal = () => confirmationModal.current.close();
	const confirm = () => {
		confirmationModal.current.execute();
		closeModal();
	}

	return (
		<Modal ref={confirmationModal}>
			<div className="modal-content">
				<h3>Are you sure?</h3>
				<p>This action cannot be undone.</p>
				<div className="modal-buttons">
					<Button onClick={confirm}>Confirm</Button>
					<Button variant="secondary" onClick={closeModal}>Cancel</Button>
				</div>
			</div>
		</Modal>
	);
}

export default ConfirmationModal;