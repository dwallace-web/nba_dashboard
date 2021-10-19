import React from 'react'
// import Equipment from './Equipment';
// import Games from './Games';
// import PreviousSchedule from './PreviousSchedule';
import Roster from './Roster';
import { useParams } from 'react-router-dom';

const Team = (props) => {
    let { id } = useParams();

    return (
        <div>
            <div className="teams-display">
                <Roster teamID={id} />
            </div>
            {/* <Games teamID={id} /> */}
            {/* <Equipment teamID={id} /> */}
            {/* <PreviousSchedule teamID={id} /> */}
        </div>
    )
}

export default Team
