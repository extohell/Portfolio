import React from 'react';
import TextContent from '../TextContent/TextContent';
import styled from 'styled-components';
import content from './content';

const CvPositionWrapper = styled.div`
	position: absolute;
	top: 50px;
`

const Curriculum = () => {
	return (
		<CvPositionWrapper>
			<TextContent content={content.ru}/>
		</CvPositionWrapper>
	);
};

export default Curriculum;