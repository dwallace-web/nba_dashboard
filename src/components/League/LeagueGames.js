import React from 'react'
import LeagueGame from './LeagueGame'

const LeagueGames = props => {

    return (
        <div className="game-display">

            {
                props.games.map((game) =>
                    <LeagueGame key={game.idEvent} game={game} />
                )
            }
        </div>
    )
}

export default LeagueGames
