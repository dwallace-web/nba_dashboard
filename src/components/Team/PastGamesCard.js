import React from 'react'
import Games from './Games'

const PastGamesCard = props => {
    return (
        <div>
            <h4>{props.game.dateEvent}</h4>
            {props.game.strEventAlternate}
            {props.game.intHomeScore} to {props.game.intHomeAway}
        </div>
    )
}

export default PastGamesCard
