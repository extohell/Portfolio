import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import content from './TextContent';
import { PositionWrapper } from '../../App';

const P = styled.p`
	margin-bottom: 20px;
	position: relative;
	overflow: hidden;
	
	line-height: 1.7rem;
	color: transparent;
	
	&:first-child {
		align-self: start;
	}
`;

const OuterSpan = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.7s ease;
	transform: translateX(${ props => -props.translate }%);
	overflow: hidden;
		
	color: #000000;
`;

const InnerSpan = styled.span`
		display: inline-block;
  		transform: translateX(${ props => props.translate }%);
  		transition: transform 0.7s ease;
`;

const MainPage = () => {
	const [ translate, setTranslate ] = useState(100);

	useEffect(() => {
		setTimeout(() => setTranslate(0), 1200);
	}, []);

	return (
		<PositionWrapper>
			{
				content.ru.map((item, index) => {
					return (
						<P key={ index }>
							{ item }
							<OuterSpan translate={ translate }>
								<InnerSpan translate={ translate }>{ item }</InnerSpan>
							</OuterSpan>
						</P>
					);
				})
			}
		</PositionWrapper>
	);
};

export default MainPage;