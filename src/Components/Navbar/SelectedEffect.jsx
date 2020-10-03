import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Span = styled.span`
	position: absolute;
	top: ${ props => props.eventY }px;
	left: ${ props => props.eventX }px;
	z-index: -1;
	width: ${ props => props.dimensions.width }px;
	height: ${ props => props.dimensions.height }px;
	
	opacity: ${ props => props.isActive ? 1 : 0 };
	
	background-color: #000000;
	border-radius: 50%;
	
	transform: translate(-50%, -50%);
	transition: width 0.5s linear, height 0.5s linear, opacity 0.4s;
`;

const SelectedEffect = ({ width, height, eventX, eventY, isActive }) => {
	const [ dimensions, setDimensions ] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (isActive) {
			setDimensions({
				width: eventX < width / 10 || eventX > width - width / 10 ? width * 3 : width * 2,
				height: eventY < height / 10 || eventY > height - height / 10 ? height * 4 : height * 3
			});
		} else {
			setDimensions({ width: 0, height: 0 });
		}

	}, [ isActive, width, height, eventX, eventY ]);

	return <Span dimensions={ dimensions } eventX={ eventX } eventY={ eventY } isActive={ isActive }/>;
};

export default SelectedEffect;