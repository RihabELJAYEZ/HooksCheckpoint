
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard.js'
import MovieList from './MovieList'
import React, { useState, useEffect } from 'react';
import Addmovie from './Addmovie';
import Rating from './Rating'
import { v4 as uuidv4 } from 'uuid';
import { Form, FormControl, Button } from 'react-bootstrap';
import Filter from './Filter';

function App() {
  const [searchMovie,setSearchMovie] = useState("");

  const [cards, setcards] = useState
    ([
      {
        id: uuidv4(),
        title: "Secret Magic Control Agency",
        description: "Secret Magic Control Agency 2021",
        posterURL: "https://mycima.nl/wp-content/uploads/2021/03/Secret-Magic-Control-Agency-2021.jpg",
        rating: 2
      },
      {
        id: uuidv4(),
        title: "Peter Rabbit 2",
        description: "Peter Rabbit 2 2021",
        posterURL: "https://kbimages1-a.akamaihd.net/ba3b40f7-7926-44e3-9674-75f175b93da9/1200/1200/False/peter-rabbit-movie-2-novelisation.jpg",
        rating: 3
      },
      {
        id: uuidv4(),
        title: "Ainbo",
        description: "Ainbo 2021",
        posterURL: "https://cdn.001.3dvf.com/wp-content/uploads/2020/09/30152920/2020-09-30_152914-693x1024.jpg",
        rating: 4
      }]
      )

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
