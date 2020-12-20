import React from 'react';
import styled from 'styled-components';

const A = styled.a`
	position: relative;
	text-decoration: none;
	margin-left: 10px;
	
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -3px;
		width: 0;
		height: 2px;
		
		background-color: #000000;
		transition: width 0.3s;
	}
	
	&:hover {
		&::after {
			width: 100%;
		}
	}
`;

const content = {
	ru: [
		<span><strong>Привет</strong>, меня зовут Бережной Иван.</span>,
		<div>Я - начинающий frontend разработчик и это мой сайт-портфолио <br/>
		(он был создан при помощи библиотеки React и Styled Components).<br/>
		Исходный код:<A target='_blank' href="https://github.com/extohell/PortfolioSite">Github</A></div>,
		<b>Мои профессиональные навыки:</b>,
		<div>HTML, CSS, JavaScript, React, Redux, Vue, Nuxt, Sass, адаптивная и кроссбраузерная вёрстка.<br/>
			Так же есть небольшой опыт работы и понимание общих принципов backend на PHP, MySQL.</div>,
	],
	en: [
		<span><strong>Hello</strong>, my name is Ivan Berezhnoi.</span>,
		<div>I am a beginner frontend developer and this is my portfolio site <br/>
			(it was created using React and Styled Components libraries)<br/>
			Source code:<A target='_blank' href="https://github.com/extohell/PortfolioSite">Github</A></div>,
		<b>My skills:</b>,
		<div>HTML, CSS, JavaScript, React, Redux, Vue, Nuxt, Sass, adaptive and cross-browser layout. <br/>
			There is also little experience and understanding of the general principles of backend in PHP, MySQL.</div>,
	],
	es: [
		<span><strong>Hola</strong>, me llamo Ivan Berezhnoi.</span>,
		<div>Soy un desarrollador frontend principiante y este es mi sitio de cartera <br/>
			(fue creado usando bibliotecas React y Styled Components)<br/>
			Código fuente:<A target='_blank' href="https://github.com/extohell/PortfolioSite">Github</A></div>,
		<b>Mis habilidades profesionales:</b>,
		<div>HTML, CSS, JavaScript, React, Redux, Vue, Nuxt, Sass, responsive y diseño de navegador cruzado. <br/>
		También hay poca experiencia y comprensión de los principios generales del backend en PHP, MySQL.</div>,
	]
};

export default content;