import React from 'react'
import { useEffect, useState } from 'react'

const PreviousSchedule = props => {

    const [Schedule, setSchedule] = useState()

    useEffect(() => {
        const getSchedule = async () => {
            const remoteSchedule = await fetchSchedule()
            setSchedule(remoteSchedule)
        }
        getSchedule()
    }, [])

    const fetchSchedule = async () => {
        const res = await fetch(`http://lakers-backend.herokuapp.com/eventslast/${props.teamID}`)
        const data = await res.json()
        console.log(data)
        // return data.player
    }


    return (
        <div>
            <h4>Previous Schedule</h4>
        </div>
    )
}

export default PreviousSchedule
