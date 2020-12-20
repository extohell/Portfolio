import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import portfolioItems from './portfolioData';
import PortfolioItem from './PortfolioItem';
import { devices } from '../../mediaSizes';

const GridWrapper = styled.div`
	position: absolute;
	left: 100px;
	right: 100px;
	top: 50%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
	grid-gap: 20px;
	
	transform: translateY(-50%);
	
	@media ${ devices.laptopM } {
		left: 65px;
		right: 65px;
	}
	
	@media ${ devices.laptopS } {
		grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
	}
	
	@media ${ devices.mobileL } {
		top: 150px;
		grid-template-columns: repeat(auto-fill, 100%);
		
		transform: none;
	}
`;

const HoverEffect = styled.div`
	position: absolute;
	top: ${ props => props.coords.top }px;
	left: ${ props => props.coords.left }px;
	width: ${ props => props.coords.width }px;
	height: ${ props => props.coords.height }px;
	z-index: 5;
	
	border: ${ props => props.firstShow ? 0 : 2 }px solid #000000;
	transition: ${ props => props.firstShow ? '' : 'top 0.5s, left 0.5s, width 0.5s, height 0.5s' };
	opacity: ${ props => props.opacity };
	
	pointer-events: none;
`;

const Portfolio = () => {
	const ref = useRef();
	const [ selectedItem, setSelectedItem ] = useState(null);
	const [ hoverCoords, setHoverCoords ] = useState({ left: 0, top: 0, width: 0, height: 0 });
	const [ hideHoverEffect, setHideHoverEffect ] = useState(false);
	const [ firstShow, setFirstShow ] = useState(true);

	const onSelected = (event) => {
		const target = event.target.closest('.portfolioItem');
		if (!target) {
			setSelectedItem(null);
			setHideHoverEffect(false);
			return;
		}
		setHideHoverEffect(true);
		setSelectedItem(+target.dataset.index);
	};

	const onHover = useCallback((coords) => {
		setHideHoverEffect(false);
		const wrapperCoords = ref.current.getBoundingClientRect();
		setHoverCoords({
			top: coords.top - wrapperCoords.top - 2,
			left: coords.left - wrapperCoords.left - 2,
			width: coords.width + 4,
			height: coords.height + 4
		});
		if (firstShow) setTimeout(() => setFirstShow(false));
	}, [ firstShow ]);

	useEffect(() => {
		document.body.addEventListener('click', onSelected);
		return () => document.body.removeEventListener('click', onSelected);
	}, []);

	return (
		<GridWrapper ref={ ref }>
			{
				document.documentElement.clientWidth > 1024 &&
				<HoverEffect coords={ hoverCoords } opacity={ hideHoverEffect ? 0 : 1 } firstShow={ firstShow }/>
			}
			{
				portfolioItems.map((item, index) => {
					return <PortfolioItem key={ index } data={ item } index={ index } anim={ selectedItem === index }
										  setHoverCoords={ onHover }/>;
				})
			}
		</GridWrapper>
	);
};

export default Portfolio;