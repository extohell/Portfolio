import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { devices } from '../../mediaSizes';

const Div = styled.div`
	display: inline-block;
	width: ${ props => props.width };
	height: ${ props => props.width };

	transform: scale(0);
	transform-origin: center;
	animation: ${ props => props.animation } ${ props => props.transition }s ease-in-out forwards;
	animation-delay:  ${ props => props.index * 0.2 }s;

	@media ${ devices.laptopS } {
		display: block;
		text-align: center;
		margin-bottom: 30px;
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

const AppearanceWrapper = ({ index, children, transition, width }) => {
	const [ animationAppear, setAnimationAppear ] = useState(null);

	useEffect(() => {
		setTimeout(() => setAnimationAppear(appear), 1200);
	}, []);

	return <Div animation={ animationAppear } index={ index } transition={ transition }
				width={ width }>{ children }</Div>;
};

export default AppearanceWrapper;