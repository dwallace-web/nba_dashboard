import React from 'react'
import { SiFacebook, SiTwitter, SiInstagram, SiYoutube, SiSafari } from "react-icons/si";

const LeagueTeam = ({ team }) => {
    return (
        <div className="team-view">
            <img src={team.strTeamBadge} alt={team.strTeam} className="team-badge" />
            <h3 className="team-name">{team.strTeam}</h3>
            <h4 className="team-info-short"> {team.strStadiumLocation} | {team.intFormedYear}</h4>
            <ul className="team-links">
                <li className="team-icons"><a target="_blank" rel="noreferrer" href={`https://${team.strFacebook}`}><SiFacebook /></a></li>
                <li className="team-icons"><a target="_blank" rel="noreferrer" href={`https://${team.strTwitter}`}><SiTwitter /></a></li>
                <li className="team-icons"><a target="_blank" rel="noreferrer" href={`https://${team.strInstagram}`}><SiInstagram /></a></li>
                <li className="team-icons"><a target="_blank" rel="noreferrer" href={`https://${team.strYoutube}`}><SiYoutube /></a></li>
                <li className="team-icons"><a target="_blank" rel="noreferrer" href={`https://${team.strWebsite}`}> <SiSafari /> </a> </li>
            </ul>
        </div>
    )
}

export default LeagueTeam