import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import Portal from '../portal/Portal';
import Close from './Close';

import './Modal.css';

const registeredFn = {};

const Modal = forwardRef(({ children }, ref) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	const register = (fn) => registeredFn[fn.name] = fn;
	const execute = () => Object.entries(registeredFn).forEach(([_, fn]) => fn());

	useImperativeHandle(ref, () => ({
		open: openModal,
		close: closeModal,
		register: register,
		execute: execute
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
});

export default Modal;