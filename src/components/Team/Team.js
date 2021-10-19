import React from 'react'
import Roster from './Roster';
import Games from './Games';
// import Equipment from './Equipment';
import { useParams } from 'react-router-dom';
import PastGames from './PastGames';

const Team = (props) => {
    let { id } = useParams();

    return (
        <div>
            <div className="teams-display">
                <Roster teamID={id} />
                <Games teamID={id} />
                <PastGames teamID={id} />
            </div>

            {/* <Equipment teamID={id} /> */}
        </div>
    )
}

export default Team
