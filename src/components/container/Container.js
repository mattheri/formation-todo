import useMergedClassNames from '../../hooks/UseMergedClassNames';

import './Container.css';

const DEFAULT_CLASS = 'container'

const VARIANTS_MAP = {
	normal: '',
	fluid: 'fluid'
}

const Container = ({ className, as: As = 'div', fluid, children }) => {

	const variant = fluid ? 'fluid' : 'normal'

	const classnames = useMergedClassNames({ defaults: DEFAULT_CLASS, custom: className, variant: VARIANTS_MAP[variant] });

	return (
		<As className={classnames}>{children}</As>
	)
}

export default Container;