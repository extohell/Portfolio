import React, { useMemo } from 'react';
import styled from 'styled-components';
import Letter from '../MainPage/Letter';

const Div = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: ${ props => props.loaded ? -1 : 1 };
	
	background-color: #ffffff;
	opacity: ${ props => props.loaded ? 0 : 1 };
	transition: z-index, opacity 1s;
	transition-delay: 1s, 0s;	
`;

const NameAnimation = ({ name, loaded, setLoaded }) => {
	const nameArr = useMemo(() => name.split(''), [ name ]);

	return (
		<Div loaded={ loaded }>
			<div>
				{
					nameArr.map((letter, index) => {
						return <Letter index={ index } key={ index } setLoaded={ setLoaded }>{ letter }</Letter>;
					})
				}
			</div>
		</Div>
	);
};

export default NameAnimation;