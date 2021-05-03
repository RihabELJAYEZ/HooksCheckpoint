import React from 'react';
import {useState} from 'react';
import {Route, Switch} from 'react-router-dom'
import App from './App'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import Rating from './Rating'
import Addmovie from './Addmovie'
import { v4 as uuidv4 } from 'uuid';

import Desc from './Desc'

const RoutingComponent = () => {
    const [cards, setcards] = useState
    ([
    {
        id: uuidv4(),
        title: "Secret Magic Control Agency",
        description: "Secret Magic Control Agency 2021",
        posterURL: "https://mycima.nl/wp-content/uploads/2021/03/Secret-Magic-Control-Agency-2021.jpg",
        rating: 2,
        trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/OESJJ2vZn9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
        id: uuidv4(),
        title: "Peter Rabbit 2",
        description: "Peter Rabbit 2: The Runaway (also known simply as Peter Rabbit 2 in other territories) is a 2021 3D live-action/computer-animated comedy film directed and co-produced by Will Gluck and written by Patrick Burleigh and Gluck. The film is a sequel to 2018's Peter Rabbit and is based on the stories of Peter Rabbit created by Beatrix Potter.",
        posterURL: "https://kbimages1-a.akamaihd.net/ba3b40f7-7926-44e3-9674-75f175b93da9/1200/1200/False/peter-rabbit-movie-2-novelisation.jpg",
        rating: 3,
        trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/PWBcqCz7l_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
        id: uuidv4(),
        title: "Ainbo",
        description: "The rain forest mythology animation film is about a young adventurous girl named Ainbo who saves her jungle paradise in the Amazon from loggers and miners. Ainbo gets help from her animal spirits, skinny armadillo Dillo and the heavy-set tapir Vaca.",
        posterURL: "https://cdn.001.3dvf.com/wp-content/uploads/2020/09/30152920/2020-09-30_152914-693x1024.jpg",
        rating: 4,
        trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/fMbV1BDlmqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }]
    )
    return (
        <Switch>
            
            <Route exact path="/" render={(props) =><App {...props}cards={cards} setcards={setcards}></App>}></Route>

            
            
            <Route exact path='/Desc/:id' render={(props)=><Desc {...props} cards={cards}></Desc>}></Route>

            
            
            

        </Switch>
    )
}

export default RoutingComponent
