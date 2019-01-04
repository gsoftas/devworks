import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const BoxWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  color: white;
`
const StyledBox = styled.div`
  z-index: 30;
  border-radius: 6px;
  width: 95%;
  margin: 0 auto;
  background-color: ${props => props.color || 'rgba(95, 158, 160, 0.25)'};
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  text-align: center;
  margin-bottom: 1rem;

  a {
    color: white;
  }
`
const Box = ({ color, children }) => {
  return (
    <BoxWrapper>
      <StyledBox color={color}>
        <div>
          {children}
        </div>
      </StyledBox>
    </BoxWrapper>
  )
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}

export default Box