import React, { useCallback, useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import AppearanceWrapper from '../Common/AppearanceWrapper';
import LanguageContext from '../../LanguageContext';
import { devices } from '../../mediaSizes';

const isMobile = document.documentElement.clientWidth <= 1024;

const flip = keyframes`
	0% {
		transform: translateY(0) rotateX(0) scale(1);
		transform-origin: 50% 0;
		${ !isMobile && 'border: 2px solid #000000' };
	}
	50% {
		transform: translateY(-50%) rotateX(-90deg) scale(1.588);
		transform-origin: 50% 50%;
		${ !isMobile && 'border: 1.5px solid #000000' };
	}
	100% {
		transform: translateY(-130%) rotateX(-180deg) scale(1.588);
		transform-origin: 50% 100%;
		${ !isMobile && 'border: 1px solid #000000' };
		cursor: auto;
	}
`;

const Wrapper = styled.div`
	position: relative;
	height: 150px;
	
	cursor: pointer;
	
	animation: ${ props => props.anim && flip } 0.8s linear forwards;
	z-index: ${ props => props.anim ? 30 : 0 };
	
	div {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		
		transform: scaleY(${ props => props.anim ? -1 : 1 });
		transition-delay: ${ props => props.anim ? 0.4 : 0 }s;
	}
`;

const Bg = styled.div`
	z-index: -1;
	background-image: url(${ props => props.img });
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Text = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;
	z-index: ${ props => props.anim ? 1 : -3 };
		
	font-size: 8px;
	text-align: center;
		
	background-color: rgba(255, 255, 255, 0.9);
	
	@media ${ devices.laptopM } {
		font-size: 7px;
	}
`;

const PortfolioItem = ({ data, anim, index, setHoverCoords }) => {
	const ref = useRef();
	const lang = useContext(LanguageContext);

	const onMouseEnter = useCallback(() => {
		if (!anim) {
			const coords = ref.current.getBoundingClientRect();
			setHoverCoords(coords);
		}
	}, [ setHoverCoords, anim ]);

	return (
		<Wrapper ref={ ref } className='portfolioItem' data-index={ index } anim={ anim }
				 onMouseEnter={ onMouseEnter }>
			<AppearanceWrapper border={ true } index={ index } transition={ 0.8 } width={ '100%' }>
				<Bg img={ data.img }/>
				<Text anim={ anim }>{ data.fullDescription[lang] }</Text>
			</AppearanceWrapper>
		</Wrapper>
	);
};

export default PortfolioItem;