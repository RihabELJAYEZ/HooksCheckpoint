import React from 'react'
import {Card} from 'react-bootstrap';
import {Route, Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({cards}) => {
    return (
        
  <Card style={{width:'30vw', marginBottom: '35px'}}>
    <Link to={`/Desc/${cards.id}`}>
    <Card.Img style={{ height:'400px'}} variant="top" src={cards.posterURL}/>
    <Card.Body>
      <Card.Title>{cards.title}</Card.Title>
      <Card.Text>
        {cards.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <StarRatingComponent value={cards.rating}></StarRatingComponent>
    </Card.Footer>
    </Link>
  </Card>


    
    )
}

export default MovieCard
