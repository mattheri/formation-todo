import { useImperativeHandle, useRef, useState } from "react";

import Portal from '../portal/Portal';
import Close from './Close';

import './Modal.css';

export let modalRef = null;

const Modal = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	modalRef = useRef(null);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	useImperativeHandle(modalRef, () => ({
		open: openModal,
		close: closeModal,
	}));

	return isOpen ? (
		<Portal>
			<div className="modal">
				<Close onClick={closeModal} />
				{children}
			</div>
			<div className="modal-background" onClick={closeModal} />
		</Portal>
	) : null;
}

export default Modal;