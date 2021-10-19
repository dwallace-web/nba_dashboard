import React from 'react'
import { useEffect, useState } from 'react'
import TeamGame from './TeamGame';

const Games = props => {

    const [nextGames, setNextGames] = useState([])

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
        return data.events
    }

    return (
        <div>
            {
                nextGames.map((game) =>
                    <TeamGame game={game} key={game.idEvent} />
                )
            }
        </div>
    )
}

export default Games
