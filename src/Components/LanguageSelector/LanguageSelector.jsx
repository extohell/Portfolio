import React, { useContext } from 'react';
import styled from 'styled-components';
import LanguageContext from '../../LanguageContext';
import { devices } from '../../mediaSizes';

import lang_light from '../../assets/image/language.svg';
import lang_dark from '../../assets/image/language-dark.svg';

const Wrapper = styled.div`
	position: absolute;
	left: 50px;
	top: 50px;
	width: 50px;
	height: 50px;
	z-index: 31;
	
	cursor: pointer;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	
	@media ${ devices.tablet } {
		left: 60px;
		right: 60px;
	}
	
	@media ${ devices.mobileL } {
		left: 30px;
		top: 30px;
	}
	
	&:hover {
		height: 150px;
		
	 	div {
			background-image: url(${ lang_dark }), url(${lang_light });
		}
		span {
			color: #ffffff;
		}
		li {
			&:nth-child(1) {
				top: 65px;
			}
			&:nth-child(2) {
				top: 100px;
				transition-delay: 0.15s;
			}
			&:nth-child(3) {
				top: 135px;
				transition-delay: 0.3s;
			}
			
			@media ${ devices.tablet } {
				top: 19px !important;
				
				&:nth-child(1) {
					left: 65px;
				}
				&:nth-child(2) {
					left: 105px;
					transition-delay: 0.15s;
				}
				&:nth-child(3) {
					left: 145px;
					transition-delay: 0.3s;
				}
			}
		}
		@media ${ devices.tablet } {
			width: 150px;
			height: 50px;
		}
	}
`;

const Bg = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 50px;
	height: 50px;
	z-index: 4;
	
	background-image: url(${ lang_light }), url(${ lang_dark });
	background-repeat: no-repeat;
	background-position: 0 0;
	background-size: contain;
`;

const Ul = styled.ul`
	position: absolute;
	width: 50px;
	left: 0;
	top: 0;
`;

const Li = styled.li`
	position: absolute;
	left: 9px;
	top: 19px;
	z-index: 3;
	
	font-weight: 600;
	color: #000000;
	
	transition: top 0.5s, left 0.5s;
	transform-origin: center;
	
	&:hover {
		transform: scale(1.3);
	}
`;

const LangIndicator = styled.span`
	position: absolute;
	width: 20px;
	left: 26px;
	top: 2px;
	z-index: 5;
	
	font-size: 14px;
	font-weight: 600;
	color: #000000;
`;

const langs = [ 'en', 'ru', 'es' ];

const LanguageSelector = ({ toggleLang }) => {
	const lang = useContext(LanguageContext);

	return (
		<Wrapper>
			<Bg/>
			<LangIndicator>{ lang }</LangIndicator>
			<Ul>
				{
					langs.map((item, index) => {
						return <Li key={ index } onClick={ () => toggleLang(item) }>{ item.toUpperCase() }</Li>;
					})
				}
			</Ul>
		</Wrapper>
	);
};

export default LanguageSelector;