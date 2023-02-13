import React, {useState, useContext} from 'react'
import Logo from '../../src/assets/Logo/logo.webp'
import {Link} from 'react-scroll'
import styled, { keyframes } from 'styled-components'
import { Spin as Hamburger } from 'hamburger-react'
import {secondaryDarkModeBg, darkModeFont} from '../assets/Colors/Colors';
import {secondaryLightModeBg, lightModeFont} from '../assets/Colors/Colors';
import ThemeContext from '../ThemeContext'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Nav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 1;

  @media (max-width: 700px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    width: 100vw; 
    height: 100vh; 
    animation: ${fadeIn} 0.5s linear;
    z-index: 100;
  }
`

const NavContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    position: absoulte;
    right: 5px;
    top: 5px;
    flex-direction: column;
    gap: 30px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? secondaryDarkModeBg : secondaryLightModeBg)}
  }
`

const NavItem = styled.ul`
  color: white;
  tex-decoration: none;
`

const LogoContainer = styled.a`
  cursor: pointer;
`

const Img = styled.img`
  width: auto;
  height: 100px;
  background: transparent;

  @media (max-width: 700px) {
    height: 150px;
  }
`

const HamburgerContainer = styled.div` 
  display: none;

  @media (max-width: 700px) {
    display: block;
    position: fixed;
    top: 5%;
    left: 3%;
    z-index: 101;
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${darkModeFont};
  font-weight: 900;
  font-size: 1.2rem;
  cursor: pointer;

  &.active {
    color: orange;
  }

  &:hover {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  @media (max-width: 700px) {
    font-size: 1.5rem;
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
  }
`

const Navbar = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false)
  const [background, setBackground] = useState('transparent');

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const closeMobileNav = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 2000)
  }
  
  const changeBackground = () => {
    if(window.scrollY > 20) {
      setBackground(secondaryDarkModeBg);
    }
    else {
      setBackground('transparent');
    }
  }

  window.addEventListener('scroll', changeBackground);


  return (
    <>
    <Nav style={{background: background}} isOpen={isOpen} id="nav">
      <NavContainer isDarkMode={isDarkMode}>
        <NavItem>
          <StyledLink isDarkMode={isDarkMode} activeClass="active" to='services' spy={true} smooth={true} offset={-50} duration={1500} onClick={closeMobileNav}>services</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink isDarkMode={isDarkMode} activeClass="active" to='menu' spy={true} smooth={true} offset={-100} duration={1500} onClick={closeMobileNav}>menu</StyledLink>
        </NavItem>
        <LogoContainer href="https://restaurant-adrwlo.netlify.app/">
          <Img src={Logo}></Img>
        </LogoContainer>
        <NavItem>
          <StyledLink isDarkMode={isDarkMode} activeClass="active" to='aboutus' spy={true} smooth={true} offset={-100} duration={1500} onClick={closeMobileNav}>about us</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink isDarkMode={isDarkMode} activeClass="active" to='contactus' spy={true} smooth={true} offset={200} duration={1500} onClick={closeMobileNav}>contact us</StyledLink>
        </NavItem>
      </NavContainer>
    </Nav>
    <HamburgerContainer>
      <Hamburger 
        color={isDarkMode ? "white": "black"}
        width={20}
        height={20}
        direction="right" 
        easing="ease-in"
        hideOutline={false}
        toggled={isOpen}
        onToggle={handleClick}
      />
    </HamburgerContainer>
    </>
  )
}

export default Navbar

