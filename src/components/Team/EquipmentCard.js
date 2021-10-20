import React from 'react'

const EquipmentCard = props => {
    return (
        <div className="team-gear" key={props.gear.idEquipment}>
            <h4>{props.gear.strSeason}</h4>
            <img src={props.gear.strEquipment} />
        </div>
    )
}

export default EquipmentCard
