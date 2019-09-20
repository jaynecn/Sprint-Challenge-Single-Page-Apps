import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

//Styled Components

const StyledSearchDiv = styled.div`
border: 1px solid blue;
margin: 0px;
padding: 20px 0px 10px 0px; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
button {
  border: none;
  background-color: green;
  color: white;
  margin: 5px;
  padding: 5px 20px;
}
}`

const StyledContentDiv = styled.div`
border: 1px solid green;
padding: 10px;
margin: 5px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;`

const StyledCardImageDiv = styled.img`
/* display: flex;
justify-content: center; */
align-items: center;
width: 100px;`

export default function SearchForm() {

  const [searchTerm, changeSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);

  const handleChange = (event) => {
    changeSearchTerm(event.target.value);
  }

  const search = (event) => {
    event.preventDefault(); 
    setCharacters(characters.filter(x => {
      return x.name.includes(searchTerm)
    }))
  }
 
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setCharacters(res.data.results)
      })
  }, []);


  return (
    <StyledSearchDiv>
      <input type="text" name="searchTerm" value={searchTerm} onChange={handleChange} />
      <button onClick={search}>Search</button>
      {characters.map(info => {
        return (
          <StyledContentDiv>
            <h1>{info.name}</h1>
            <StyledCardImageDiv className="character-image" src={info.image} alt={info.name}/>
          </StyledContentDiv>
        )
      })}
    </StyledSearchDiv>
  );
}

function JayneForm(props) {
 
  return (
    <section className="search-form">
     <form onSubmit={event => props.handlesubmit(event)}>
       <label>Search Name</label>
       <input type='text' name='name' onChange={event => props.onsearchchange(event)} />
       {/* // need to put in value */}
       <button>Search</button> 
     </form>
    </section>
  );
}

// export default SearchForm;

