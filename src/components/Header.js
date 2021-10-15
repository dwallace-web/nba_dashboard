import React from 'react'
// import PropTypes from 'prop-types'

const Header = props => {


    return (
        <div>
            {
                props.teams.map((team) =>
                    <div key={team.idTeam}>
                        <img src={team.strTeamBadge} alt={team.strTeam} />
                    </div>

                )
            }
        </div>
    )
}

// Header.propTypes = {

// }

export default Header
