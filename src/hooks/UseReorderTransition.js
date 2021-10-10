import LocalStorage from '../services/LocalStorage';

let previousNode = null;
let positionOne = null;
let positionTwo = null;
let todo1 = null;
let todo2 = null;

const useReorderTransition = () => {
	const onDragStart = (node, todo) => {
		todo1 = todo;
		positionOne = node.style.order;
		previousNode = node;
	}

	const onDragEnd = (node, todo) => {
		todo2 = todo;
		positionTwo = node.style.order;
		animateDroppedTargetToPositionOne(node);
	}

	const animateDroppedTargetToPositionOne = (node) => {
		node.style.order = positionOne;
		animateDraggedToPositionTwo(previousNode);
	}

	const animateDraggedToPositionTwo = async (node) => {
		node.style.order = positionTwo;
		await LocalStorage.reorderTodos('todos', todo1, todo2);
	}

	return {
		onDragStart,
		onDragEnd,
	}
};

export default useReorderTransition;