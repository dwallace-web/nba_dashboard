import React from 'react'
import PropTypes from 'prop-types'

const LeagueGame = ({ game }) => {
    return (
        <div className="game-view">
            <h3>{game.strEventAlternate}</h3>
        </div>
    )
}

LeagueGame.propTypes = {

}

export default LeagueGame
