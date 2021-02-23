import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../mediaSizes';
import portfolioData from './portfolioData';
import PortfolioItem from './PortfolioItem';

const Wrapper = styled.div`
  position: absolute;
  left: 100px;
  top: 50vh;
  height: auto;

  transform: translateY(-50%);
  transition: height 1s;

  @media ${devices.laptopM} {
    left: 65px;
    right: 65px;
  }

  @media ${devices.tablet} {
    transform: none;
    top: 140px;
  }
`;

const Portfolio = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.documentElement.onclick = event => {
      if (!event.target.closest('.portfolio-item')) {
        setSelected(null);
      }
    };
  }, []);

  const onSelected = index => setSelected(index);

  return (
    <Wrapper>
      {portfolioData.map((item, index) => {
        return (
          <PortfolioItem
            key={index}
            selected={selected}
            onSelected={onSelected}
            index={index}
            title={item.description}
            text={item.fullDescription}
          />
        );
      })}
    </Wrapper>
  );
};

export default Portfolio;
