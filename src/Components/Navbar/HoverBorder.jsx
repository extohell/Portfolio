import React from 'react';
import styled from 'styled-components';

const BorderWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	
	transform: scaleX(${ props => props.scale });
`;

const Border = styled.span`
	position: absolute;
	width: 0;
	height: 2px;
	
	background-color: #000000;
	
	transition: all 0.5s;
	
	&.top,
	&.left {
		top: 0;
		left: 0;
	}

	&.right,
	&.bottom {
		bottom: 0;
		right: 0;
	}
	&.right,
	&.left {
		width: 2px;
		height: 0;
	}
`;

const HoverBorder = ({ scale }) => {
	return (
		<BorderWrapper scale={ scale }>
			<Border className='top'/>
			<Border className='right'/>
			<Border className='bottom'/>
			<Border className='left'/>
		</BorderWrapper>
	);
};

export default HoverBorder;