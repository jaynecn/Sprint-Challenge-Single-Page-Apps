import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';

//Styled Components
const StyledCharacterListDiv = styled.div`
margin: 10px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;`


function Characters(props) {

  const [characters, setCharacters] = useState([])
    
  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getCharacters();
  }, []);


  return (
    <StyledCharacterListDiv>
      <div>

      </div>
      {
        characters.map((character) => (
          <CharacterCard key={character.id} character={character}/>
        ))
      }
      
    </StyledCharacterListDiv>
  )
}

export default Characters;