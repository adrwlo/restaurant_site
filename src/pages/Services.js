import React, {useContext} from 'react'
import Service from '../components/Service'
import {ServiceData} from '../data/ServiceData'
import styled from 'styled-components';
import ThemeContext from '../ThemeContext';
import {primaryDarkModeBg, darkModeFont} from '../assets/Colors/Colors';
import {primaryLightModeBg, lightModeFont} from '../assets/Colors/Colors';

const ServicesTitle = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    padding: 50px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? primaryDarkModeBg : primaryLightModeBg)};
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};

    @media (max-width: 700px) {
        font-size: 2rem;
    }
`

const ServicesContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${({ isDarkMode }) => (isDarkMode ? primaryDarkModeBg : primaryLightModeBg)};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 70px;
`

const Services = () => {
    const {isDarkMode} = useContext(ThemeContext);
  return (
    <>
        <ServicesTitle id="services" isDarkMode={isDarkMode}>services</ServicesTitle>
        <ServicesContainer isDarkMode={isDarkMode}>
            {ServiceData.map((service) => {
                return(
                    <Service 
                        icon={service.icon} 
                        title={service.title} 
                        desc={service.desc}
                    />
                )
            })}
        </ServicesContainer>
    </>

  )
}

export default Services