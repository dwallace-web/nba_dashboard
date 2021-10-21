import React from 'react'

const PastGamesCard = props => {
    return (
        <div className="game-element">
            <h3 className="game-element"> {props.game.strEventAlternate}  </h3>
            <h4 className="game-element">{props.game.dateEvent}</h4>
            <p className="game-element">{props.game.intHomeScore} to {props.game.intAwayScore} </p>
        </div>
    )
}

export default PastGamesCard
