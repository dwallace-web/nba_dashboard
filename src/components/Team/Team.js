import React from 'react'
import Roster from './Roster';
import Games from './Games';
import Equipment from './Equipment';
import { useParams } from 'react-router-dom';
import PastGames from './PastGames';

const Team = (props) => {
    let { id } = useParams();

    return (
        <div>
            <div className="teams-display">
                <Roster teamID={id} />
                <div className="split-view">
                    <div>
                        <h4>Upcoming Games</h4>
                        <Games teamID={id} />
                    </div>
                    <div>
                        <h4>Previous Games</h4>
                        <PastGames teamID={id} />
                    </div>
                </div>
                <div className="bottom-view">
                    <Equipment teamID={id} />
                </div>
            </div>

        </div>
    )
}

export default Team
