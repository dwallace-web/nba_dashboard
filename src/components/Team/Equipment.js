import React from 'react'
import { useEffect, useState } from 'react'
import EquipmentCard from './EquipmentCard';


const Equipment = props => {

    const [equipment, setEquipment] = useState(null)

    let teamidentifier = `${props.teamID}`;

    useEffect(() => {
        const getEquipment = async () => {
            const remoteEquipment = await fetchEquipment()
            setEquipment(remoteEquipment)
        }
        getEquipment()
    }, [teamidentifier])

    const fetchEquipment = async () => {
        const res = await fetch(`http://lakers-backend.herokuapp.com/lookupequipment/${teamidentifier}`)
        const data = await res.json()
        console.log(data)
        return data.equipment
    }

    return (
        <>

            {
                equipment ?
                    <div className="equipment-cards">
                        <h4>Equipment History</h4>
                        {
                            equipment.map((gear) =>
                                <EquipmentCard gear={gear} key={gear.idEquipment} />
                            )
                        }
                    </div>
                    :
                    <div>
                        <h4> No equipment. Move Along!</h4>
                    </div>
            }
        </>
    )
}


export default Equipment
