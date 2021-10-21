import React from 'react'
import { tz } from 'moment-timezone';
import Moment from 'react-moment';

const TeamGame = props => {

    let time = props.game.strTimestamp;
    console.log(time)


    return (
        <div className="game-element">
            <h3 className="game-element">{props.game.strEventAlternate}</h3>
            <h4 className="next-game-element"><Moment format="MMM DD">{props.game.dateEvent}</Moment></h4>
            <p className="next-game-element">at&nbsp;<Moment format="h">{time}</Moment>&nbsp;Eastern</p>
        </div>
    )
}

export default TeamGame
