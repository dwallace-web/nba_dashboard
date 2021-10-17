import React from 'react'
import { SiFacebook, SiTwitter, SiInstagram, SiYoutube, SiSafari } from "react-icons/si";
import { IconContext } from 'react-icons/lib';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

const LeagueTeam = ({ team }) => {
    return (
        <IconContext.Provider value={{ className: "team-icons" }}>
            <div className="team-view">
                <img src={team.strTeamBadge} alt={team.strTeam} className="team-badge team-element" />
                <h3 className="team-name team-element">{team.strTeam}</h3>
                {/* <h4 className="team-info-location">{team.strStadiumLocation}</h4> */}
                <h4 className="team-info-founded team-element">Est. {team.intFormedYear} </h4>
                <ul className="team-links team-element">
                    <li className="team-icons team-element"><a target="_blank" rel="noreferrer" href={`https://${team.strFacebook}`}><SiFacebook /></a></li>
                    <li className="team-icons team-element"><a target="_blank" rel="noreferrer" href={`https://${team.strTwitter}`}><SiTwitter /></a></li>
                    <li className="team-icons team-element"><a target="_blank" rel="noreferrer" href={`https://${team.strInstagram}`}><SiInstagram /></a></li>
                    <li className="team-icons team-element"><a target="_blank" rel="noreferrer" href={`https://${team.strYoutube}`}><SiYoutube /></a></li>
                    <li className="team-icons team-element"><a target="_blank" rel="noreferrer" href={`https://${team.strWebsite}`}> <SiSafari /> </a> </li>
                </ul>
            </div>
        </IconContext.Provider>
    )
}

export default LeagueTeam