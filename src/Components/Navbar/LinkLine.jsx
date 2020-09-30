import React, { useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	display: flex;
	flex-wrap: nowrap;
	width: ${ props => props.sizes.totalWidth }px;
	height: ${ props => props.sizes.height }px;
	${ props => props.isReverse ? 'bottom: 50%' : 'top: 50%'};
	left: 100%;
	
	div {
		position: relative;
		height: 100%;
	
		&::before, 
		&::after {
			content: '';
			position: absolute;
			width: 0;
			height: 2px;
			
		background-color: #000000;
		opacity: 0;
		transition: opacity 0.4s;
	}
	
	&:first-child {
		width: ${ props => props.sizes.delimiterWidth }%;
		
		&::before {
			${ props => props.isReverse ? 'bottom: 0' : 'top: 0'};
			left: 0;
		}
		&::after {
			${ props => props.isReverse ? 'bottom: 0' : 'top: 0'};
			right: 0;
			height: 0;
			width: 2px;
		}
	}
	&:last-child {
		flex-grow: 1;
		
		&::before {
			${ props => props.isReverse ? 'top: 0' : 'bottom: 0'};
			left: 0;
		}
	}
	}
`;

const LinkLine = ({ sizes, label }) => {
	const isReverse = useRef(label === 'Portfolio' ||  label === 'Contacts');

	return (
		<Wrapper sizes={ sizes } isReverse={ isReverse.current }>
			<div/>
			<div/>
		</Wrapper>
	);
};

export default LinkLine;