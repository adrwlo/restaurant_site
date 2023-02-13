import React, {useContext} from 'react';
import styled from 'styled-components';
import ThemeContext from '../ThemeContext';
import {secondaryDarkModeBg, darkModeFont} from '../assets/Colors/Colors';
import {secondaryLightModeBg, lightModeFont} from '../assets/Colors/Colors';

const ServiceContainer = styled.div`
    width: 600px;
    height: 240px;
    border-radius: 5px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? secondaryDarkModeBg : secondaryLightModeBg)};
    padding: 20px;
    margin: 10px;

    @media (max-width: 650px) {
        width: 350px;
        height: auto;
    }
`
const ServiceIcon = styled.a`
    font-size: 80px;
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
`;

const ServiceTitle = styled.h2`
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    margin-top: 20px;
    margin-bottom: 15px;
`;

const ServiceDesc = styled.p`
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    line-height: 1.2rem;
`;

const Service = ({icon, title, desc}) => {
    const {isDarkMode} = useContext(ThemeContext);

    console.log(isDarkMode);
    return (
        <ServiceContainer isDarkMode={isDarkMode}>
            <ServiceIcon isDarkMode={isDarkMode}>{icon}</ServiceIcon>
            <ServiceTitle isDarkMode={isDarkMode}>{title}</ServiceTitle>
            <ServiceDesc isDarkMode={isDarkMode}>{desc}</ServiceDesc>
        </ServiceContainer>
  )
}

export default Service