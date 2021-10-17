import React from 'react'
import Equipment from './Equipment';
import Games from './Games';
import PreviousSchedule from './PreviousSchedule';

const Team = (props) => {

    return (
        <div>
            <Games />
            <Equipment />
            <PreviousSchedule />
        </div>
    )
}

export default Team
