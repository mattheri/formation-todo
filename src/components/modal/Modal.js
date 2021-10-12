import { forwardRef, useRef, useImperativeHandle, useState, useEffect } from "react";

import Portal from '../portal/Portal';
import Close from './Close';

import './Modal.css';


const Modal = forwardRef(({ children }, ref) => {
	const [isOpen, setIsOpen] = useState(false);
	const [registeredFn, setRegisteredFn] = useState({});
	const modalRef = useRef(null);
	
	const handleClose = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => {
		if (modalRef.current) {
			modalRef.current.addEventListener('animationend', handleClose);

			modalRef.current.classList.add('modal-close');
		}
	};
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

	useEffect(
		() => {
			const modal = modalRef.current;
			return () => {
				if (modal) modal.removeEventListener('animationend', handleClose);
			}
		}
	)

	return isOpen ? (
		<Portal>
			<div ref={modalRef} className="modal">
				<Close onClick={closeModal} />
				{children}
			</div>
			<div className="modal-background" onClick={closeModal} />
		</Portal>
	) : null;
});

export default Modal;