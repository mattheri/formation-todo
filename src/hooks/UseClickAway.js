import { useEffect } from 'react';

const useClickAway = (ref, onClickAway) => {
	useEffect(
		() => {
			const onClick = (event) => {
				if (ref.current?.contains(event.target)) return;

				onClickAway();
			}

			document.addEventListener('click', onClick);

			return () => {
				document.removeEventListener('click', onClick);
			}
		},
		[ref, onClickAway]
	)
}

export default useClickAway;