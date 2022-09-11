import React from 'react'
import LeagueTeam from './LeagueTeam'



const LeagueTeams = props => {
    return (
        <div className="team-display">
            {
                props.teams?.map((team) =>
                    <LeagueTeam team={team} key={team.idTeam} />
                )
            }
        </div>
    )
}

export default LeagueTeams