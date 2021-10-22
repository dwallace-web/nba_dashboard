import React from 'react'
import { useEffect, useState } from 'react'
import PlayerCard from './PlayerCard'

const Roster = props => {

    const [roster, setRoster] = useState([])

    // useEffect(() => {
    //     const getRoster = async () => {
    //         const remoteRoster = await fetchRoster()
    //         setRoster(remoteRoster)
    //     }
    //     getRoster()
    // }, [])

    // const fetchRoster = async () => {
    //     const res = await fetch(`http://lakers-backend.herokuapp.com/lookupplayers/${props.teamID}`)
    //     const data = await res.json()
    //     // console.log(data)
    //     return data.player
    // }

    let teamidentifer = `${props.teamID}`;

    useEffect(() => {
        const fetchGames = () => {
            return fetch(`https://lakers-backend.herokuapp.com/lookupplayers/${teamidentifer}`)
                .then(res => (
                    res.json()))
                .then(roster => {
                    setRoster(roster.player)
                })
                .then(window.scrollTo(0, 0))
        }
        fetchGames();
    }, [teamidentifer])

    return (
        <div className="roster-display">
            {
                roster.map((player) =>
                    <PlayerCard player={player} key={player.idPlayer} />
                )
            }
        </div>
    )
}

export default Roster
