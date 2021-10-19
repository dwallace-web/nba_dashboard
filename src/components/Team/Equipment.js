import React from 'react'
import { useEffect, useState } from 'react'


const Equipment = props => {

    const [equipment, setEquipment] = useState([])

    useEffect(() => {
        const getEquipment = async () => {
            const remoteEquipment = await fetchEquipment()
            setEquipment(remoteEquipment)
        }
        getEquipment()
    }, [])

    const fetchEquipment = async () => {
        const res = await fetch(`http://lakers-backend.herokuapp.com/lookupequipment/${props.teamID}`)
        const data = await res.json()
        console.log(data)
        return data.equipment
    }

    return (
        <div>
            <h4>Equipment</h4>
        </div>
    )
}


export default Equipment
