import React from 'react'

const TeamGame = props => {
    return (
        <div className="game-game">
            <h3 className="game-element">{props.game.strEventAlternate}</h3>
            {/* <h4 className="player-info-founded player-element">{player.strPosition} </h4> */}
        </div>
    )
}

export default TeamGame
