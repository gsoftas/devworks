import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../images/devworks-icon.svg'

const Menu = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  border-bottom: 1px solid #fff6;
`
const MenuContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`
const MenuLogo = styled.div`
  flex: 1;
  min-width: 30%;
  img {
    margin-bottom: 0;
  }
`

const MenuItems = styled.div`
  display: flex;
  flex: 1;
  min-width: 70%;
  align-self: center;
  font-size: 0.8rem;
  font-weight: 300;

  a {
    color: white;
    margin-left: 1rem;
    text-transform: uppercase;
    font-family: 'open sans';
    text-decoration: none;
  }
  a:not(:last-child):after {
    padding-left: .5rem;
    content: " • ";
  }

  @media screen and (max-width: 1024px) {
    a {
      margin-left: .5rem;
    }
  }
`
const TopNavigation = () => (
  <Menu>
    <MenuContainer>
      <MenuLogo>
        <Link to="/">
          <img src={Logo} alt='DevWorks Logo' style={{ maxWidth: '3rem', color: 'white'}}/>
        </Link>
      </MenuLogo>
      <MenuItems style={{ justifyContent: 'flex-end'}}>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </MenuItems>
    </MenuContainer>
  </Menu>
)

export default TopNavigation
