import React, {useContext, useState} from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {secondaryDarkModeBg, darkModeFont} from '../assets/Colors/Colors';
import {secondaryLightModeBg, lightModeFont} from '../assets/Colors/Colors';
import styled, {keyframes} from 'styled-components'
import { animateScroll as scroll} from 'react-scroll'
import ThemeContext from '../ThemeContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ScrollerTopContainer = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? secondaryDarkModeBg : secondaryLightModeBg)};
    position: fixed;
    right: 3%;
    bottom: 10%;
    display: ${({ displayScroll }) => (displayScroll ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    animation: ${fadeIn} 0.5s linear;
    z-index: 20;

    @media (max-width: 800px) {
      width: 40px;
      height: 40px;
      border: 1px solid ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    }
`

const ScrollImg = styled(AiOutlineArrowUp)`
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    font-size: 25px;

    @media (max-width: 800px) {
      font-size: 20px;
    }
`

const ScrollerTop = () => {
    const {isDarkMode} = useContext(ThemeContext);
    const [displayScroll, setDisplayScroll] = useState(false)

    const scrollToTop = () => {
      scroll.scrollToTop();
    }

    const changeBackground = () => {
        if(window.scrollY > 500) {
            setDisplayScroll(true);
        }
        else {
            setDisplayScroll(false);
        }
      }
    
      window.addEventListener('scroll', changeBackground);

  return (
    <ScrollerTopContainer isDarkMode={isDarkMode} spy={true} smooth={true} onClick={scrollToTop} duration={1500} displayScroll={displayScroll}>
        <ScrollImg isDarkMode={isDarkMode}></ScrollImg>
    </ScrollerTopContainer>
  )
}

export default ScrollerTop