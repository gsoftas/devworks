import React from 'react'
import styled from 'styled-components'

const StyledFooterWrapper = styled.footer`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
  color: white;
  min-height: 5rem;
  border-top: 1px solid #fff6;
  padding-top: 2rem;
`

const StyledFooterContent = styled.div`
  width: 80%;
  margin: 0 auto;
  a {
    color: white;
  }
`

const GatsbyJS = <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">GatsbyJS</a>
const StyledComponents = <a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">Styled Components</a>
const SourceCodeLink = <a href="https://www.github.com/gsoftas/devworks" target="_blank" rel="noopener noreferrer">here</a>

const Footer = () => (
  <StyledFooterWrapper>
    <StyledFooterContent>
      <p>Created with {GatsbyJS}, {StyledComponents} and is open sourced (MIT license).
      You can find the source code {SourceCodeLink}
      </p>
    </StyledFooterContent>
  </StyledFooterWrapper>
)

export default Footer