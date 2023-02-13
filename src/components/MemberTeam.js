import React, { useContext } from 'react'
import styled from 'styled-components'
import {darkModeFont} from '../assets/Colors/Colors';
import {lightModeFont} from '../assets/Colors/Colors';
import ThemeContext from '../ThemeContext';

const MemberTeamContainer = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 70px 0px 70px 0px;
  padding: 0px 10px 0px 10px;
`
const MemberTeamImage = styled.img`
  height: auto;
  border-radius: 50%;
  transition: ease-in-out 0.4s;

  &:hover {
    transform: scale(105%);
    transition: ease-in-out 0.4s;
    border: 5px solid green;
  }
`

const MemberTeamName = styled.h3`
  color: ${({ isDarkMode }) => (isDarkMode ? darkModeFont : lightModeFont)};  
  text-align: center;

  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`


const MemberTeam = ({image, name, width}) => {
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <MemberTeamContainer>
        <MemberTeamImage src={image} style={{width: width}}></MemberTeamImage>
        <MemberTeamName isDarkMode={isDarkMode}>{name}</MemberTeamName>
    </MemberTeamContainer>
  )
}

export default MemberTeam