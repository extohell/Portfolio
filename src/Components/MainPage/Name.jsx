import React, { useMemo } from 'react';
import styled from 'styled-components';
import Letter from './Letter';

const Div = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;	
`;

const Name = ({ name }) => {
	const nameArr = useMemo(() => name.split(''), [ name ]);

	return (
		<Div>
			{
				nameArr.map((letter, index) => {
					return <Letter key={ index }>{ letter }</Letter>;
				})
			}
		</Div>
	);
};

export default Name;