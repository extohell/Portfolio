import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import LanguageContext from '../../LanguageContext';
import { devices } from '../../mediaSizes';
import TextContent from '../TextContent/TextContent';

const Title = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  cursor: pointer;

  transform: translateY(-50%);
  transition: opacity 0.6s;

  font-size: 26px;
  font-family: 'Montserrat Alternates';
  font-weight: 900;
  letter-spacing: -1px;

  ${props => (props.show ? `opacity: 0;` : `opacity: 1; transition-delay: 0.4s;`)}
`;

const Text = styled.div`
  transform: scaleY(0);
  transform-origin: center;
  max-height: 0;
  max-width: 700px;
  margin-left: 30px;
  opacity: 0;
  transition: max-height 1.2s, transform 0.6s, opacity 1.5s;

  font-size: 14px;

  ${props =>
    props.show &&
    `
        transform: scaleY(1);
        opacity: 1;
        max-height: 300px;
				 transition: max-height 2.5s, transform 0.6s, opacity 1.5s;
				transition-delay: 0s, 0.4s;
    `}

  @media ${devices.tablet} {
    margin-left: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 50px;
  margin-bottom: 50px;

  transition: all 2.5s;
`;

const PortfolioItem = ({ title, index, text, selected, onSelected }) => {
  const lang = useContext(LanguageContext);
  const [showText, setshowText] = useState(false);

  useEffect(() => {
    setshowText(index === selected);
  }, [selected, index]);

  return (
    <Wrapper>
      <Title show={showText} onClick={() => onSelected(index)}>
        {/* <HoverBorder scale={1} /> */}
        <TextContent inline={true} marker={index + 1} content={title} />
      </Title>
      <Text show={showText}>{text[lang]}</Text>
    </Wrapper>
  );
};

export default PortfolioItem;
