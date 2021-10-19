import React from 'react'

const PlayerCard = ({ player }) => {
    return (
        <div className="roster-view">
            <img src={player.strThumb} alt={player.strPlayer} className="team-badge player-element" />
            <h3 className="player-name player-element">{player.strPlayer}</h3>
            <h4 className="player-info-founded player-element">{player.strPosition} </h4>
        </div>

    )
}

export default PlayerCard
