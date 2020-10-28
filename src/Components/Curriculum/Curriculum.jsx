import React, { useContext, useEffect, useRef, useState } from 'react';
import TextContent from '../TextContent/TextContent';
import styled from 'styled-components';
import content from './content';
import SelectedEffect from '../Navbar/SelectedEffect';
import { getInitialCoords, getNewCoords } from '../Navbar/functions';
import LanguageContext from '../../LanguageContext';
import { devices } from '../../mediaSizes';

const CvPositionWrapper = styled.div`
	position: absolute;
	top: 80px;
	left: 100px;
	right: 100px;
	padding-bottom: 40px;
	
	font-size: 14px;
	
	@media ${ devices.laptopM } {
		left: 60px;
		right: 60px;
	}
	
	@media ${ devices.laptopS } {
		left: 60px;
		right: 0;
	}
	
	@media ${ devices.tablet } {
		top: 140px;
		right: 60px;
	}
	
	@media ${ devices.mobileL } {
		left: 40px;
		right: 40px;
		padding-bottom: 60px;
	}
	
	@media ${ devices.desktopL } {
		top: 50%;
		
		transform: translateY(-50%);
	}
`;

const Download = styled.a`
	position: absolute;
	right: 0;
	bottom: 65px;
	padding: 15px 20px;
	overflow: hidden;
	z-index: 20;
	
	border: 2px solid #000000;
	background-color: rgba(255, 255, 255, 0.7);
	
	font-size: 14px;
	color: ${ props => props.isActive ? '#ffffff' : '#000000' };
	cursor: pointer;
	text-decoration: none;
	
	transition: color 0.4s, opacity 0.5s;
	transition-delay: 0.2s, 1.6s;
	opacity: ${ props => props.width > 0 ? 1 : 0 };
	
	@media ${ devices.mobileL } {
		bottom: 20px;
		padding: 10px 15px;
		
		font-size: 12px;
	}
`;

const btnText = { en: 'Download', ru: 'Скачать', es: 'Cargar' };
const btnLinks = {
	en: 'https://drive.google.com/file/d/1Odfyv1UvxBegpL1NabsE5onOerwpVr6x/view?usp=sharing',
	ru: 'https://drive.google.com/file/d/1aDT9DF_L0XhcvZwICnsUGSre3ESipVyD/view?usp=sharing',
	es: 'https://drive.google.com/file/d/1jx1Zs-d6tQ6wykWVSYWfpuiP7L8xcgP8/view?usp=sharing'
};

const Curriculum = () => {
	const [ linkCoords, setLinkCoords ] = useState({ width: 0, height: 0, clickX: 0, clickY: 0 });
	const [ isActive, setIsActive ] = useState(false);
	const linkRef = useRef();
	const lang = useContext(LanguageContext);

	useEffect(() => {
		setLinkCoords(getInitialCoords(linkRef));
	}, []);

	const onMouse = (event) => {
		setLinkCoords(getNewCoords(linkRef, event, linkCoords));
		setIsActive((bool) => !bool);
	};

	const { width, height, eventX, eventY } = linkCoords;
	return (
		<CvPositionWrapper>
			<TextContent content={ content }/>
			<Download href={ btnLinks[lang] }
					  target='_blank' isActive={ isActive } ref={ linkRef } onMouseEnter={ onMouse }
					  onMouseLeave={ onMouse } width={ linkCoords.width }>
				<SelectedEffect width={ width } height={ height } eventX={ eventX } eventY={ eventY }
								isActive={ isActive }/>
				{ btnText[lang] + ' .pdf' }
			</Download>
		</CvPositionWrapper>
	);
};

export default Curriculum;