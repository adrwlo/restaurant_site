import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import bg3 from '../assets/Backgrounds/bg3.jpg'
import {primaryDarkModeBg, secondaryDarkModeBg, thirdDarkModeBg, darkModeFont} from '../assets/Colors/Colors';

const LandingBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${bg3}); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;  
`

const LandingContainer = styled.div`
    width: 800px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justift-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${thirdDarkModeBg};
    padding: 30px;
    border-radius: 5px;
    z-index: 5;

    @media (max-width: 900px) {
        width: 600px;
        padding: 20px;
    }

    @media (max-width: 620px) {
        width: 100%;
        padding: 20px;
        border-radius: 0px;
    }

    @media (max-width: 450px) {
        padding: 15px 5px 15px 5px;
    }
`
const LandingText = styled.p`
    font-size: 1.5rem;
    color: ${darkModeFont};
    margin-bottom: 10px;

    @media (max-width: 900px) {
        font-size: 1.2rem;
    }

    @media (max-width: 620px) {
        font-size: 1rem;
    }

    @media (max-width: 450px) {
        font-size: 0.9rem;
    }
`
const LandingTitle = styled.h1`
    font-size: 4rem;
    color: ${darkModeFont};

    @media (max-width: 900px) {
        font-size: 3rem;
    }

    @media (max-width: 620px) {
        font-size: 2.5rem;
    }

    @media (max-width: 450px) {
        font-size: 1.9rem;
    }
`

const LandingButton = styled.button`
    font-family: 'Julius Sans One', sans-serif;
    font-size: 1.2rem;
    padding: 15px 25px 15px 25px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background-color: ${secondaryDarkModeBg};
    color: ${darkModeFont};
    cursor: pointer;
    transition: all ease-in-out 0.4s;

    &:hover {
        background-color: ${primaryDarkModeBg};
        color: ${darkModeFont};
        transition: all ease-in-out 0.4s;

    }

    @media (max-width: 900px) {
        font-size: 1rem;
        padding: 12px 22px 12px 22px;
    }

    @media (max-width: 620px) {
        margin-top: 10px;
        font-size: 0.9rem;
        padding: 9px 19px 9px 19px;
    }

    @media (max-width: 450px) {
        font-size: 0.8rem;
        padding: 7px 17px 7px 17px;
    }

`

const Landing = () => {

    const handleClickScroll = (e) => {   
        const services = document.getElementById("services").offsetTop - 50;
        window.scrollTo({ top: services, behavior: 'smooth', duration: '1500'});
    }

    return (
        <LandingBackground>
            <Navbar/>
            <LandingContainer>
                <LandingText>best dishes & indgredients</LandingText>
                <LandingTitle>always delivering</LandingTitle>
                <LandingTitle>amazing experience</LandingTitle>
                <LandingButton onClick={handleClickScroll}>let's see</LandingButton>
            </LandingContainer>
        </LandingBackground>
    )
}

export default Landing