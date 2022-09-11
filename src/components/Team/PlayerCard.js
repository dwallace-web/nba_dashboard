import React from "react";
import { BsPersonBadgeFill } from "react-icons/bs";

const PlayerCard = ({ player }) => {
  return (
    <div className="roster-view col">
      {player.strThumb ? (
        <img
          src={player.strThumb}
          alt={player.strPlayer}
          className="player-pic player-element"
        />
      ) : (
        <div>
          <h1>
            <BsPersonBadgeFill />
          </h1>
          <p>
            No player image is available.
          </p>
        </div>
      )}
      <h3 className="player-name player-element">{player.strPlayer}</h3>
      <p className="player-element">{player.strPosition} </p>
    </div>
  );
};

export default PlayerCard;
