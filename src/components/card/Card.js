import { useRef } from 'react';

import useMergedClassNames from '../../hooks/UseMergedClassNames';
import useReorderTransition from '../../hooks/UseReorderTransition';

import TrashIcon from './TrashIcon';

import './Card.css';
import TodoForm from '../todo-form/TodoForm';

const DEFAULT_CLASS = 'card';

const VARIANTS_MAP = {
	disabled: 'disabled',
	normal: 'normal',
	important: 'important',
}

const Card = ({ className, variant = 'normal', children, onRemove, index, todo }) => {
	const cardRef = useRef(null);
	const classnames = useMergedClassNames({ defaults: DEFAULT_CLASS, custom: className, variants: VARIANTS_MAP[variant] });
	const { onDragStart, onDragEnd } = useReorderTransition();
	const preventDefault = e => e.preventDefault();
	const onDragHandler = () => onDragStart(cardRef.current, todo);

	const onDropHandler = () => onDragEnd(cardRef.current, todo);

	return (
		<div
			ref={cardRef}
			style={{ order: index }}
			className={classnames}
			draggable onDrop={onDropHandler}
			onDragOver={preventDefault}
			onDrag={onDragHandler}
		>
			<div className='card-inner'>
				<TodoForm todo={todo} />
			</div>
			<TrashIcon onClick={onRemove} />
		</div>
	)
}

export default Card;