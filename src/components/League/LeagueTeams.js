import React from 'react'
import LeagueTeam from './LeagueTeam'
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom'

const LeagueTeams = props => {
    return (
        <div className="team-display">
            {
                props.teams.map((team) =>
                    <LeagueTeam team={team} key={team.idTeam} />
                )
            }
        </div>
    )
}

export default LeagueTeams