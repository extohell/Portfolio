import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LinkLine from './LinkLine';
import HoverBorder from './HoverBorder';
import SelectedEffect from './SelectedEffect';

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

const Link = ({ to, label, hoverScale, toggleScale, contentOffsetLeft, loaded, activeLink, setActiveLink }) => {
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
		setActiveLink(to);

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
			<A ref={ linkRef } to={ to } exact onClick={ onSelect }>
				<HoverBorder scale={ scale }/>
				{ label }
				<SelectedEffect isActive={ activeLink === to } width={ linkCoords.width } eventX={ linkCoords.clickX }
								height={ linkCoords.height } eventY={ linkCoords.clickY }/>
			</A>
			<LinkLine sizes={ lineSizes } label={ label }/>
		</Wrapper>
	);
};

export default Link;