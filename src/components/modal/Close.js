import Button from '../button/Button';

import './Close.css';

const Close = ({ onClick }) => (
	<Button 
		variant="link" 
		className="close-btn" 
		onClick={onClick}
	>X</Button>
);

export default Close;