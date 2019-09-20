import React from "react";
import styled from 'styled-components';

//Styled Components
const StyledCardDiv = styled.div`
border: 1px solid green;
padding: 0px 5px;
margin: 20px;
display: flex;
flex-direction: column;
max-width: 300px;
align-items: center;`

const StyledCardImageDiv = styled.img`
display: flex;
justify-content: center;
align-items: center;
width: 150px;`

function CharacterCard(props) {
  // const {character} = props;
  console.log(props);
  return (
  <StyledCardDiv>
    <h1>{props.character.name}</h1>
    <StyledCardImageDiv className="character-image" src={props.character.image} alt={props.character.name}/>
  
    
  </StyledCardDiv>);
}

export default CharacterCard;