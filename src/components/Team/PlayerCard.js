import React from 'react'

const PlayerCard = ({ player }) => {
    return (
        <div className="roster-view col">
            <img src={player.strThumb} alt={player.strPlayer} className="player-pic player-element" />
            <h3 className="player-name player-element">{player.strPlayer}</h3>
            <p className="player-element">{player.strPosition} </p>
        </div>

    )
}

export default PlayerCard
