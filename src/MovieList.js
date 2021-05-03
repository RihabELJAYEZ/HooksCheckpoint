import React, {useRef} from 'react'
import MovieCard from './MovieCard'
import {CardDeck} from 'react-bootstrap';
const MovieList =({cards})=>{
    return(
        <div>
        <CardDeck>
        
            {cards.map(el=><MovieCard cards={el}></MovieCard>)}
        </CardDeck>
        </div>
        
    )
}

export default MovieList