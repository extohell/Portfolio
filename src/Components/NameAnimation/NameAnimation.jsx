import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Letter from './Letter';
import { devices } from '../../mediaSizes';

const Div = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: ${ props => props.loaded ? -1 : 50 };
	
	background-color: #ffffff;
	opacity: ${ props => props.loaded ? 0 : 1 };
	transition: z-index, opacity 1s;
	transition-delay: 1s, 0s;
	overflow: hidden;
	
	@media ${ devices.tablet } {
		height: 130vh;
		top: -20vh;
	}
`;

const NameAnimation = ({ name, loaded, setLoaded }) => {
	const nameArr = useMemo(() => name.split(''), [ name ]);

	return (
		<Div loaded={ loaded }>
			<div>
				{
					nameArr.map((letter, index) => {
						return <Letter nameArr={ nameArr } index={ index } key={ index }
									   setLoaded={ setLoaded }>{ letter }</Letter>;
					})
				}
			</div>
		</Div>
	);
};

export default NameAnimation;