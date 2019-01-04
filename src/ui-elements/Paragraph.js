import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 1.3rem;
  padding: 1rem 3rem;

  @media screen and (max-width: 375px) {
    font-size: 1.1rem;
    padding: 0;
  }
`

const Paragraph = ({ children, style }) => (
  <StyledParagraph style={style}>
    {children}
  </StyledParagraph>
)

export default Paragraph