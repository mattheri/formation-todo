import FormContextProvider from './FormContext';
import Input from '../input/Input';

import './Form.css';
import Checkbox from '../checkbox/Checkbox';

const Form = ({ onSubmit, initialValues, children }) => {

	const handleSubmit = (event) => {
		event.preventDefault();
		
		return (values) => onSubmit(values);
	};

	return (
		<FormContextProvider initialValues={initialValues} onSubmit={handleSubmit}>
			{children}
		</FormContextProvider>
	);
}

Form.Input = Input;
Form.Checkbox = Checkbox;

export default Form;