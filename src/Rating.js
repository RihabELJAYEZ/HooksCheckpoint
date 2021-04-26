import React from 'react';
import StarRatingComponent from 'react-star-rating-component';




const Rating = ({searchRait,handelChangeRait}) => {

    const onStarClick = (nextValue, prevValue, name) => {
        
        
        handelChangeRait(nextValue)
    }
    return (
        <div>
            <div>
                <StarRatingComponent starCount={5} value={searchRait} onStarClick={onStarClick}/>
            </div>
        </div>
    )
}

export default Rating


