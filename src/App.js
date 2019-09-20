import React, {useState, useEffect} from "react";
import {Route, NavLink} from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';


//Styled Components
const NavBar = styled.ul`
background-color: white;
  color: black;
  margin: 0;
  padding: 0;
  height: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
  color: black;
  text-decoration: none;
  padding: 15px;
  height: 16px;
}
a.activeNavButton {
  background-color: white;
  border: 2px solid grey;
  color: black;
}`


function App() {
  return (
    <main>
      <Header />
      <NavBar>
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">Home</NavLink>
        </li>
        <li>
          <NavLink to="/characters" activeClassName="activeNavButton">Characters</NavLink>
        </li>
        {/* <li>
          <NavLink to="/locations" activeClassName="activeNavButton">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/episodes" activeClassName="activeNavButton">Episodes</NavLink>
        </li> */}
      </NavBar>
      <Route exact path="/" render={props => <WelcomePage {...props} /> } />
      <Route exact path="/characters" render={props => <CharacterList {...props} /> } />
      {/* <Route exact path="/locations" render={props => <Locations {...props} /> } />
      <Route exact path="/episodes" render={props => <Episodes {...props} /> } /> */}
      

    </main>
    
  );
}

export default App;
