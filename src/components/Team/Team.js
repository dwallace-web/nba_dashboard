import React from 'react'
import Equipment from './Equipment';
import Games from './Games';
import PreviousSchedule from './PreviousSchedule';
import Roster from './Roster';
import { useParams } from 'react-router-dom';

const Team = (props) => {
    let { id } = useParams();

    return (
        <div>
            <h3>ID: {id}</h3>
            <Roster teamID={id} />
            <Games teamID={id} />
            <Equipment teamID={id} />
            <PreviousSchedule teamID={id} />
        </div>
    )
}

export default Team
