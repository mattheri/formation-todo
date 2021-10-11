import { forwardRef, useImperativeHandle, useState } from "react";

import Portal from '../portal/Portal';
import Close from './Close';

import './Modal.css';


const Modal = forwardRef(({ children }, ref) => {
	const [isOpen, setIsOpen] = useState(false);
	const [registeredFn, setRegisteredFn] = useState({});
	
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	const register = (fn) => setRegisteredFn(registeredFn => ({ ...registeredFn, [fn.name]: fn }));
	const execute = () => Object.entries(registeredFn).forEach(([_, fn]) => fn());
	const unregister = (fn) => setRegisteredFn(registeredFn => {
		delete registeredFn[fn.name];
		return registeredFn;
	})

	useImperativeHandle(ref, () => ({
		open: openModal,
		close: closeModal,
		register: register,
		execute: execute,
		unregister: unregister
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