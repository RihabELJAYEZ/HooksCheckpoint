
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard.js'
import MovieList from './MovieList'
import React, { useState, useEffect } from 'react';
import Addmovie from './Addmovie';
import Rating from './Rating'
import { Form, FormControl, Button } from 'react-bootstrap';
import Filter from './Filter';

function App({cards,setcards}) {
  const [searchMovie,setSearchMovie] = useState("");

  

const handelMovieAdd=(newvalue)=>{
  setcards([...cards,newvalue])

}

const [searchTerm, setSearchTerm]=useState("");
const handelChangeterm = (searchTerm) =>{
  setSearchTerm(searchTerm);
}

const [searchRait, setSearchRait]=useState(0);
const handelChangeRait = (searchRait) =>{
  setSearchRait(searchRait);
}


  return (
    <div className="App" >
      <h1 style={{ color: "red", fontSize: 40,  marginBottom: '25px' }}>Movie App</h1>
      <div style={{ marginBottom: '25px' }}>
        <Addmovie handelMovieAdd={handelMovieAdd} />

      </div>

      <div className="CardDeck">
        <Filter searchTerm={searchTerm} handelChangeterm={handelChangeterm}></Filter>
      </div>

      <div>
        <Rating searchRait={searchRait} handelChangeRait={handelChangeRait}></Rating>
      </div>

      <div>
      <MovieList cards={cards.filter(el => el.title.toUpperCase().trim().includes(searchTerm.toUpperCase().trim())&& el.rating>=searchRait)}></MovieList>

      </div>

      
    </div>
  );
}

export default App;
