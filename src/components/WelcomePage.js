import React from "react";
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

//Styled Components

const StyledWelcomePage = styled.div`
display: flex;
align-items: center;
justify-content: center;`

const StyledImageDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;`


function WelcomePage() {
  return (
    <StyledWelcomePage>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <StyledImageDiv>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </StyledImageDiv>
      </header>
    </StyledWelcomePage>
  );
}

export default WelcomePage;
