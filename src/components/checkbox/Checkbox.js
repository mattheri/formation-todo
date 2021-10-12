import { useContext } from 'react';
import { FormContext } from '../form/FormContext';

import './Checkbox.css';

const Checkbox = ({ id, label, defaultValue = false }) => {
	const { getFieldValue, updateField } = useContext(FormContext);

	const handleChange = (event) => {
		const value = event.target.checked;

		updateField(id, value);
	}

	const value = getFieldValue(id);

	return(
		<div className="input-container">
			<label htmlFor={id}>
				{label}
				<input type='checkbox' checked={value} value={value} onChange={handleChange} />
			</label>
		</div>	
	)
};

export default Checkbox;