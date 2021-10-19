import React from 'react'
import Roster from './Roster';
import Games from './Games';
// import Equipment from './Equipment';
// import PreviousSchedule from './PreviousSchedule';
import { useParams } from 'react-router-dom';

const Team = (props) => {
    let { id } = useParams();

    return (
        <div>
            <div className="teams-display">
                <Roster teamID={id} />
                <Games teamID={id} />
            </div>
            {/* <Equipment teamID={id} /> */}
            {/* <PreviousSchedule teamID={id} /> */}
        </div>
    )
}

export default Team
