import React from "react";
import Roster from "./Roster";
import Games from "./Games";
import Equipment from "./Equipment";
import { useParams } from "react-router-dom";
import PastGames from "./PastGames";

const Team = (props) => {
  let { id } = useParams();

  return (
    <div>
      <div className="teams-display">
        <Roster teamID={id} />
        <div className="split-view">
          <div>
            <h2>Upcoming Games</h2>
            <Games teamID={id} />
          </div>
          <div>
            <h2>Previous Games</h2>
            <PastGames teamID={id} />
          </div>
        </div>
        <div className="bottom-view">
          <div className="no_equipment">
            <h2>Team Equipment History</h2>
            <Equipment teamID={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
