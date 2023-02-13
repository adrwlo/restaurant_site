import React, { useContext } from 'react'
import styled from 'styled-components'
import MemberTeam from '../components/MemberTeam'
import { MembersTeamData } from '../data/MembersTeamData'
import {primaryDarkModeBg, secondaryDarkModeBg, darkModeFont} from '../assets/Colors/Colors';
import {primaryLightModeBg, secondaryLightModeBg, lightModeFont} from '../assets/Colors/Colors';
import ThemeContext from '../ThemeContext';
import Iframe from 'react-iframe';

const AboutUsTitle = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? primaryDarkModeBg : primaryLightModeBg)};
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};

    @media (max-width: 700px) {
        font-size: 2rem;
    }
`

const MembersTeamContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${({ isDarkMode }) => (isDarkMode ? secondaryDarkModeBg : secondaryLightModeBg)};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media (max-width: 550px) {
      height: 250px;
    }
`

const AboutUs = () => {
    const {isDarkMode} = useContext(ThemeContext);
  return (
      <>
        <AboutUsTitle isDarkMode={isDarkMode} id="aboutus">about us</AboutUsTitle>
        <MembersTeamContainer isDarkMode={isDarkMode}>
            {MembersTeamData.map((member) => {
                return(
                    <MemberTeam
                        image={member.image}
                        name={member.name}
                        width={member.width}
                    />
                )
            })}
        </MembersTeamContainer>

        <Iframe 
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10246.773519962548!2d19.937157890273195!3d50.054574943616366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6a3da0a2b9%3A0x56d7c5f16a0c11d4!2sRestauracja%20Starka%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1675785837605!5m2!1spl!2spl" 
            width="100%" 
            height="250" 
            style={{border: 0}}>
        </Iframe>
        
        {/* <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10246.773519962548!2d19.937157890273195!3d50.054574943616366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6a3da0a2b9%3A0x56d7c5f16a0c11d4!2sRestauracja%20Starka%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1675785837605!5m2!1spl!2spl" 
            width="100%" 
            height="250" 
            style={{border: 0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            id="contactus">
        </iframe> */}
    </>
  )
}

export default AboutUs