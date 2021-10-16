import React from 'react'
import PropTypes from 'prop-types'
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

LeagueGames.propTypes = {

}

export default LeagueGames
