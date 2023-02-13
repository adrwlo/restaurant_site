import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {primaryDarkModeBg, secondaryDarkModeBg, darkModeFont} from '../assets/Colors/Colors';
import {primaryLightModeBg, secondaryLightModeBg, lightModeFont} from '../assets/Colors/Colors';
import ThemeContext from '../ThemeContext';
import bg3 from '../assets/Backgrounds/bg3.jpg'
import logo from '../assets/Logo/logo.webp'

const MenuBackground = styled.div`
    width: 100%;
    height: auto;
    background-image: url(${bg3}); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 50px;

    @media (max-width: 600px) {
        padding: 50px 5px 50px 5px;
    }
`

const MenuContainer = styled.div`
    width: 600px;
    height: 750px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? primaryDarkModeBg : primaryLightModeBg)};
    position: relative;
    border-radius: 5px;

    @media (max-width: 710px) {
        width: 500px;
    }

    @media (max-width: 600px) {
        width: 350px;
        height: 500px;
    }
`

const MenuLogo = styled.img`
    width: 150px;
    height: auto;
    position: absolute;
    top: 2%;
    right: 0%;

    @media (max-width: 600px) {
        width: 100px;
        height: auto;
        top: 0%;
    }
`

const MenuTitle = styled.h1`
    font-size: 2.5rem;
    text-align: left;
    padding: 50px;
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};

    @media (max-width: 600px) {
        font-size: 1.5rem;
        padding: 20px;
    }
`

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${({ isDarkMode }) => (isDarkMode ? secondaryDarkModeBg : secondaryLightModeBg)};
    margin: 20px;
    border-radius: 5px;
    padding: 5px;

    @media (max-width: 600px) {
        margin: 10px;
    }
`

const MenuImage = styled.img`
    width: 100px;
    height: auto;
    border-radius: 50%;
    margin-left: 5%;

    @media (max-width: 600px) {
        width: 70px;
        margin-left: 2%;
    }
`

const MenuName = styled.h4`
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};

    @media (max-width: 600px) {
        font-size: 0.7rem;
    }
`

const MenuPrice = styled.p`
    color: green;
    margin-right: 5%;
    font-weight: 900;
    font-size: 1.2rem;

    @media (max-width: 600px) {
        font-size: 0.9rem;
        margin-right: 2%;
    }
`

const MenuButton = styled.button`
    padding: 10px 15px 10px 15px;
    font-size: 1rem;
    position: absolute;
    bottom: 3%;
    right: 4%;
    border-radius: 5px;
    border: none;
    background-color: ${({ isDarkMode }) => (isDarkMode ? secondaryDarkModeBg : secondaryLightModeBg)};
    color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};
    font-family: 'Julius Sans One', sans-serif;
    transition: all ease-in-out 0.4s;
    cursor: pointer;
    
    &:hover {
        background-color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : secondaryDarkModeBg)};
        color: ${({ isDarkMode }) => (isDarkMode ? primaryDarkModeBg : darkModeFont)};
        transition: all ease-in-out 0.4s;
    }

    @media (max-width: 600px) {
        font-size: 0.7rem;
        bottom: 4%;
        right: 3%;
    }

`

const Menu = () => {
    const {isDarkMode} = useContext(ThemeContext);
    const [apiData, setApiData] = useState([]);
    const apiKey = '9f0a96de19544ff9b8019a3b149269de';

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pizza`
          )
            .then(response => response.json())
            .then(json => setApiData(json.results))
            .catch(error => console.error(error));

    }, []);

    let slicedArr = apiData.slice(0,5);

  return (
    <>
    <MenuBackground>
        <MenuContainer id="menu" isDarkMode={isDarkMode}>
            <MenuLogo src={logo}></MenuLogo>
            <MenuTitle isDarkMode={isDarkMode}>menu</MenuTitle>
            {slicedArr.map((item) => {
                return(
                    <MenuItem isDarkMode={isDarkMode}>
                        <MenuImage src={item.image}></MenuImage>
                        <MenuName isDarkMode={isDarkMode}>{item.title}</MenuName>
                        <MenuPrice>40$</MenuPrice>
                    </MenuItem>
                )
            })}
            <MenuButton isDarkMode={isDarkMode}>zobacz wiecej</MenuButton>
        </MenuContainer>
    </MenuBackground>
    </>
  )
}

export default Menu