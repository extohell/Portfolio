export const getInitialCoords = (ref) => {
	const coords = ref.current.getBoundingClientRect();
	return {
		width: coords.width,
		height: coords.height,
		eventX: coords.width / 2,
		eventY: coords.height / 2
	};
};

export const getNewCoords = (ref, event, prevCoords) => {
	const coords = ref.current.getBoundingClientRect();
	return {
		...prevCoords,
		eventX: event.clientX - coords.left,
		eventY: event.clientY - coords.top
	};
};