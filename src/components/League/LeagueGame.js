import React from 'react'
import {
    Link,
} from 'react-router-dom'

const LeagueGame = ({ game }) => {
    return (
        <div className="game-view">
            <p className="game-info">
                <Link to={`/team/${game.idAwayTeam}`}>
                    {game.strAwayTeam}
                </Link>
            </p>
            <p className="game-info"> @ </p>
            <p className="game-info">
                <Link to={`/team/${game.idHomeTeam}`}>
                    {game.strHomeTeam}
                </Link>
            </p>
        </div>
    )
}

export default LeagueGame
