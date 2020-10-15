import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { devices } from '../../mediaSizes';

const Div = styled.span`
	display: inline-block;
	width: ${ props => props.width };
	height: ${ props => props.width };
	
	transform: scale(0);
	animation: ${ props => props.animation } ${ props => props.transition }s ease-in-out forwards;
	animation-delay:  ${ props => props.index * 0.2 }s;
	
	@media ${ devices.laptopS } {
		display: block;
		text-align: center;
		margin-bottom: 30px;
		${ props => props.border && 'border: 2px solid #000000;' }
	}
`;

const appear = keyframes`
	0% {
		transform: scale(0);
	} 60% {
		transform: scale(1.2);
	} 100% {
		transform: scale(1);
	}
`;

const AppearanceWrapper = ({ index, children, transition, width, border }) => {
	const [ animationAppear, setAnimationAppear ] = useState(null);

	useEffect(() => {
		setTimeout(() => setAnimationAppear(appear), 1200);
	}, []);

	return <Div border={ border } animation={ animationAppear } index={ index } transition={ transition }
				width={ width }>{ children }</Div>;
};

export default AppearanceWrapper;