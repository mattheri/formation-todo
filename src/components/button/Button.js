import useMergedClassNames from '../../hooks/UseMergedClassNames';

import './Button.css';

const DEFAULT_CLASSNAME = 'btn';

const VARIANTS_MAP = {
	primary: 'primary',
	secondary: 'secondary',
	link: 'link'
}

/**
 * Button component
 * @param {Function} onClick - onClick handler
 * @param {string} className - classnames to be added to the button
 * @param {string} type - type of button defaults to 'button'
 * @param {string} variant - variant of button defaults to 'primary' available variants: primary, secondary, link
 */
const Button = ({ onClick, className, type = "button", variant = "primary", children }) => {

	const classnames = useMergedClassNames({ defaults: DEFAULT_CLASSNAME, custom: className, variant: VARIANTS_MAP[variant] });

	return (
		<button onClick={onClick} className={classnames} type={type}>
			{children}
		</button>
	);
}

export default Button;