import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  min-height: ${props => props.full ? '100vh' : '25vh' };
  color: white;
`

const HeroBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  text-align: center;
`


const Hero = ({ children, fullsize, style }) => (
  <HeroWrapper full={fullsize} style={style}>
    <HeroBody>
      <div>
        {children}
      </div>
    </HeroBody>
  </HeroWrapper>
)

export default Hero