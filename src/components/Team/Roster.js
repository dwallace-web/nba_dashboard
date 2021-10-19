import React from 'react'
import { useEffect, useState } from 'react'

const Roster = props => {

    const [roster, setRoster] = useState([])

    useEffect(() => {
        const getRoster = async () => {
            const remoteRoster = await fetchRoster()
            setRoster(remoteRoster)
        }
        getRoster()
    }, [])

    const fetchRoster = async () => {
        const res = await fetch(`http://lakers-backend.herokuapp.com/lookupplayers/${props.teamID}`)
        const data = await res.json()
        console.log(data)
        return data.player
    }

    return (
        <div>
            <h4>Roster</h4>
        </div>
    )
}

export default Roster
