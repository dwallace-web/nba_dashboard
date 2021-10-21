import React from 'react'

const EquipmentCard = props => {
    return (
        <div className="equipment-card col" key={props.gear.idEquipment}>
            <h4>{props.gear.strSeason}</h4>
            <img src={props.gear.strEquipment} className="gearpic" />
        </div>
    )
}

export default EquipmentCard
