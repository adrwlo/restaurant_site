import React, {useContext, useState} from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from 'styled-components';
import ThemeContext from '../ThemeContext';

const StyledDarkModeSwitch = styled(DarkModeSwitch)`
    position: fixed;
    left: 3%;
    bottom: 5%;
    z-index: 100;
    width: 60px;
    height: auto;

    @media (max-width: 800px) {
        width: 40px;
    }
`

const DarkModeButton = () => {
    const {toggleDarkMode} = useContext(ThemeContext);

    const [isDarkIcon, setDarkIcon] = useState(true);

    const toggleDarkIcon = (checked) => {
        setDarkIcon(checked);
        toggleDarkMode();
    };

    return (
        <StyledDarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkIcon}
            onChange={toggleDarkIcon}
      />
    )
}

export default DarkModeButton