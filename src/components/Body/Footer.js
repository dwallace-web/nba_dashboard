import React from 'react'
import {
    Link,
} from 'react-router-dom'

const Footer = props => {

    return (
        <div className="footer">
            {
                props.teams.map((team) =>
                    <p class="footer-stuff" key={team.idTeam}>
                        <Link to={`/team/${team.idTeam}`}>
                            {team.strTeam}
                        </Link>
                    </p>
                )
            }
        </div >
    )
}

export default Footer
