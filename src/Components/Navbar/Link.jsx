import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LinkLine from './LinkLine';

const Wrapper = styled.div`
	position: relative;
	display: inline-block;
`;

const A = styled(NavLink)`
	position: relative;
	display: inline-block;
	padding: 15px 20px;
	z-index: 5;
	overflow: hidden;

	text-decoration: none;
	color: #000000;
	font-size: 20px;
	
	transition: color 0.2s;
	
	&:hover {
		.top, .bottom {
			width: 100%;
		}
		.right, .left {
			height: 100%;
		}
		
		&::before {
			transition-delay: 0s;
		}
	}
	
	&::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		top: ${ props => props.clicky }px;
		left: ${ props => props.clickx }px;
		z-index: -1;
	
		background-color: #000000;
		border-radius: 50%;
	
		transform: translate(-50%, -50%);
		transition: width 0.5s linear, height 0.5s linear, opacity 0.4s;
		opacity: 0;
	}
	
	&.active {
		color: #ffffff;
		
		&::before {
			width: ${ props => props.clickx < props.width / 10 || props.clickx > props.width - props.width / 10 ? props.width * 3
	: props.width * 2 }px;
			height: ${ props => props.clicky < props.height / 10 || props.clicky > props.height - props.height / 10 ? props.height * 4
	: props.height * 3 }px;
			
			opacity: 1;
		}
		
		& + div > div {
			&::before,
			&::after {
				opacity: 1;
			}
		
			&:first-child {
				&::before {
					width: 100%;
					transition: width 0.25s linear;
					transition-delay: 0.4s;
				}
				&::after {
					height: 100%;
					transition: height 0.25s linear;
					transition-delay: 0.65s;
				}
			}
			&:last-child {
				&::before {
					width: 100%;
					transition: width 0.25s linear;
					transition-delay: 0.95s;
				}
			}
		}
	}
`;

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

const Link = ({ to, label, hoverScale, toggleScale, contentOffsetLeft, loaded }) => {
	const linkRef = useRef();
	const [ linkCoords, setLinkCoords ] = useState({ width: 0, height: 0, clickX: 0, clickY: 0 });
	const [ isHovered, setIsHovered ] = useState(false);
	const [ scale, setScale ] = useState(1);
	const [ lineSizes, setLineSizes ] = useState({ totalWidth: 0, height: 0, delimiterWidth: 0 });

	useEffect(() => {
		const link = linkRef.current;
		const coords = link.getBoundingClientRect();
		setLinkCoords({
			width: coords.width,
			height: coords.height,
			clickX: coords.width / 2,
			clickY: coords.height / 2
		});
		link.onmouseenter = () => {
			if (!linkRef.current.classList.contains('active')) {
				setIsHovered(true);
				toggleScale();
			}
		};
		link.onmouseleave = () => setIsHovered(false);
	}, [ toggleScale ]);

	useEffect(() => {
		if (isHovered) {
			if (hoverScale) {
				setScale(-1);
			} else {
				setScale(1);
			}
		}
	}, [ hoverScale, isHovered ]);

	useEffect(() => {
		const coords = linkRef.current.getBoundingClientRect();
		setLineSizes({
			height: Math.random() * (80 - 40) + 40,
			delimiterWidth: Math.random() * (80 - 40) + 40,
			totalWidth: contentOffsetLeft - coords.left - linkRef.current.offsetWidth
		});
	}, [ contentOffsetLeft, loaded ]);

	const onSelect = (event) => {
		if (event.target.closest('a').classList.contains('active')) return;

		const coords = linkRef.current.getBoundingClientRect();
		setLinkCoords({
			...linkCoords,
			clickX: event.clientX - coords.left,
			clickY: event.clientY - coords.top
		});
		setLineSizes({
			...lineSizes,
			height: Math.random() * (80 - 30) + 30,
			delimiterWidth: Math.random() * (70 - 30) + 30
		});
	};

	return (
		<Wrapper>
			<A ref={ linkRef } to={ to } exact onClick={ onSelect } width={ linkCoords.width }
			   clickx={ linkCoords.clickX } height={ linkCoords.height } clicky={ linkCoords.clickY }>
				<BorderWrapper scale={ scale }>
					<Border className='top'/>
					<Border className='right'/>
					<Border className='bottom'/>
					<Border className='left'/>
				</BorderWrapper>
				{ label }
			</A>
			<LinkLine sizes={ lineSizes } label={ label }/>
		</Wrapper>
	);
};

export default Link;