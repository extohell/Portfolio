import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
	margin-bottom: 20px;
	position: relative;
	overflow: hidden;
	
	line-height: 1.7rem;
	color: transparent;
	
	&:first-child {
		align-self: start;
	}
	
	a {
  		color: inherit;
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
  		
  	a {
  		color: #000000;
  	}
  	
  	ol {  		
  		li {
  			position: relative;
  			padding-left: 30px;
  		
  			&::before {
  				content: '';
  				position: absolute;
  				left: 5px;
  				top: 12px;
  				width: 10px;
  				height: 1px;
  			
  				background-color: #000000;
  			}
  		}
  	}
`;

const TextContent = ({ content }) => {
	const [ translate, setTranslate ] = useState(100);

	useEffect(() => {
		setTimeout(() => setTranslate(0), 1200);
	}, []);

	return (
		<>
			{
				content.map((item, index) => {
					return (
						<Div key={ index }>
							{ item }
							<OuterSpan translate={ translate }>
								<InnerSpan aria-hidden='true' translate={ translate }>{ item }</InnerSpan>
							</OuterSpan>
						</Div>
					);
				})
			}
		</>
	);
};

export default TextContent;