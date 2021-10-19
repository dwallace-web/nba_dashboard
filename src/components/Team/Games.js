import React from 'react'
import { useEffect, useState } from 'react'

const Games = props => {

    const [NextGames, setNextGames] = useState([])

    useEffect(() => {
        const getNextGames = async () => {
            const remoteNextGames = await fetchNextGames()
            setNextGames(remoteNextGames)
        }
        getNextGames()
    }, [])

    const fetchNextGames = async () => {
        const res = await fetch(`http://lakers-backend.herokuapp.com/eventsnext/${props.teamID}`)
        const data = await res.json()
        console.log(data)
        // return data.player
    }

    return (
        <div>
            <h4>Games</h4>
        </div>
    )
}

export default Games
