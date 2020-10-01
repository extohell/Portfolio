import React from 'react';
import styled from 'styled-components';

const P = styled.p`
	margin-bottom: 20px;
	line-height: 1.7rem;
	
	&:first-child {
		align-self: start;
	}
`;

const MainPage = () => {

	return (
		<>
			<P>
				<span><b>Привет</b>,&nbsp;</span> меня зовут Бережной Иван;
			</P>
			<P>
				Я - начинающий frontend разработчик и это мой сайт-портфолио (он был создан при помощи библиотеки React
				и
				Styled Components).
			</P>
			<span>Мои профессиональные навыки:</span>
			<P>
				HTML, CSS, JavaScript, React, Redux, Sass, адаптивная и кроссбраузерная вёрстка. Так же есть небольшой
				опыт
				работы и понимание общих принципов backend на PHP, MySQL.
			</P>
		</>
	);
};

export default MainPage;