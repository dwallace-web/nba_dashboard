import React from 'react'

const LeagueGame = ({ game }) => {
    return (
        <div className="game-view">
            <h3 className="game-info">{game.strEventAlternate}</h3>
        </div>
    )
}

export default LeagueGame
