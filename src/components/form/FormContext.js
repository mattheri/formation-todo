import { createContext, useState } from 'react';

export const FormContext = createContext({});

const FormContextProvider = ({ onSubmit, initialValues = {}, children }) => {
	const [formState, setFormState] = useState(initialValues);

	const updateField = (fieldName, value) => setFormState({ ...formState, [fieldName]: value });
	const resetFields = () => setFormState(Object.fromEntries(Object.entries(formState).map(([key, _]) => [key, ''])));
	const getFieldValue = fieldName => formState[fieldName];

	const handleSubmit = (event) => {
		const submitWithValues = onSubmit(event);

		submitWithValues(formState);
	}

	return(
		<FormContext.Provider value={{ updateField, resetFields, getFieldValue }}>
			<form className='form' onSubmit={handleSubmit}>
				{children}
			</form>
		</FormContext.Provider>
	);
}

export default FormContextProvider;