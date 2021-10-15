import React from 'react'
import PropTypes from 'prop-types'

const LeagueGames = props => {

    return (
        <>
            {

                props.games.map((game) =>

                    <div key={game.idEvent}>
                        {game.strEventAlternate}
                    </div>
                )

            }
        </>
    )
}

LeagueGames.propTypes = {

}

export default LeagueGames
