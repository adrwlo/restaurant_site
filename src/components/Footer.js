import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../assets/Logo/logo.webp'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import {primaryDarkModeBg, secondaryDarkModeBg, darkModeFont} from '../assets/Colors/Colors';
import {primaryLightModeBg, secondaryLightModeBg, lightModeFont} from '../assets/Colors/Colors';
import ThemeContext from '../ThemeContext'

const FooterContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? primaryDarkModeBg : primaryLightModeBg)};

    @media (max-width: 600px) {
        height: 350px;
    }

    @media (max-width: 380px) {
        height: 420px;
    }
`

const FirstContainer = styled.div`
    float: left;
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    @media (max-width: 600px) {
        width: 100%;
        height: 60%;
    }
`

const LogoContainer = styled.div`

`

const Logo = styled.img`
    width: 250px;
    height: auto;
`

const SocialMediaContainer = styled.div`
    display: flex;
    gap: 15px;
`

const BsFacebookIcon = styled(BsFacebook)`
    font-size: 35px;
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    cursor: pointer;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`

const BsInstagramIcon = styled(BsInstagram)`
    font-size: 35px;
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    cursor: pointer;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`

const BsTwitterIcon = styled(BsTwitter)`
    font-size: 35px;
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    cursor: pointer;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`

const FaTiktokIcon = styled(FaTiktok)`
    font-size: 35px;
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    cursor: pointer;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`

const SecondContainer = styled.div`
    float: left;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 600px) {
        width: 100%;
        height: 40%;
    }
`

const NewsletterContainer = styled.div`
    padding: 30px;
`

const NewsletterTitle = styled.h3`
    font-size: 2rem;
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    margin-bottom: 20px;

    @media (max-width: 500px) {
        font-size 1.5rem;
    }
`

const NewsletterDesc = styled.p`
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    opacity: 0.6;
    margin-bottom: 15px;
    line-height: 1.2rem;
    text-align: justify;
    display:block;

    @media (max-width: 750px) {
        display: none;
    }
`

const NewsletterInput = styled.input`
    width: 300px;
    height: 35px;
    border-radius: 5px 0px 0px 5px;
    border: none;
    border: 2px solid ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

    @media (max-width: 800px) {
        border: 1px solid ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
    }

    @media (max-width: 500px) {
        width: 250px;
        height: 30px;
    }
`

const NewsletterButton = styled.button`
    width: 80px;
    height: 35px;
    font-family: 'Julius Sans One', sans-serif;
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    background-color: ${({ isDarkMode }) => (isDarkMode ? secondaryDarkModeBg : secondaryLightModeBg)};
    border: none;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
    transition: all ease-in-out 0.4s;

    &:hover {
        color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
        background-color: ${({ isDarkMode }) => (isDarkMode ? secondaryDarkModeBg : secondaryLightModeBg)};
        transition: all ease-in-out 0.4s;
    }

    @media (max-width: 500px) {
        width: 70px;
        height: 30px;
    }
`

const Footer = () => {
    const {isDarkMode} = useContext(ThemeContext);
  return (
    <>
    <FooterContainer isDarkMode={isDarkMode}>
        <FirstContainer>
            <LogoContainer>
                <Logo src={logo} alt="logo"></Logo>
            </LogoContainer>
            <SocialMediaContainer>
                <BsFacebookIcon isDarkMode={isDarkMode}/>
                <BsInstagramIcon isDarkMode={isDarkMode}/>
                <BsTwitterIcon isDarkMode={isDarkMode}/>
                <FaTiktokIcon isDarkMode={isDarkMode}/>
            </SocialMediaContainer>
        </FirstContainer>
        <SecondContainer>
            <NewsletterContainer>
                <NewsletterTitle isDarkMode={isDarkMode}>newsletter</NewsletterTitle>
                <NewsletterDesc isDarkMode={isDarkMode}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iure repellendus vel maxime perspiciatis blanditiis sint minima quibusdam hic neque at veniam sapiente, tempora numquam, eum reiciendis saepe accusantium recusandae!</NewsletterDesc>
                <NewsletterInput isDarkMode={isDarkMode}>

                </NewsletterInput>
                <NewsletterButton isDarkMode={isDarkMode}>subsribe</NewsletterButton>
            </NewsletterContainer>
        </SecondContainer>
       

    </FooterContainer>
    </>
  )
}

export default Footer