import { useContext, useMemo, useState, useRef } from 'react';
import useClickAway from '../../hooks/UseClickAway';

import { FormContext } from '../form/FormContext';

import './Input.css';

const inputTag = (type, onClickShowInput, isInput) => {
	return type === 'text' ? onClickShowInput && !isInput ? 'h2' : 'input' 
	: onClickShowInput && !isInput ? 'h2' : 'textarea'
}

const Input = ({ id, type = 'text', label, onClickShowInput = false }) => {
	const [isInput, setIsInput] = useState(false);
	const inputRef = useRef(null);
	const containerRef = useRef(null);

	const { updateField, getFieldValue } = useContext(FormContext);

	const value = getFieldValue(id);

	const handleChange = (event) => {
		const value = event.target.value;

		updateField(id, value);
	}

	const setAsText = () => setIsInput(false);

	const onClickShowInputHandler = (event) => {
		if (isInput && inputRef.current) {
			if (event.target === inputRef.current) return;
		}
		onClickShowInput && setIsInput(!isInput);
	}

	useClickAway(containerRef, setAsText);

	const InputTag = useMemo(() => inputTag(type, onClickShowInput, isInput), [type, isInput, onClickShowInput]);

	return (
		<div ref={containerRef} className="input-container" onClick={onClickShowInputHandler}>
			<label htmlFor={id}>{label}</label>
			{isInput || !onClickShowInput ? <InputTag ref={inputRef} id={id} type={type} value={value} onChange={handleChange} /> : <InputTag className='h2-card'>{value}</InputTag>}
		</div>
	);
}

export default Input;