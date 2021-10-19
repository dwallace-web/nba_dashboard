import React from 'react'
import { useEffect, useState } from 'react'
import PastGamesCard from './PastGamesCard'

const PastGames = props => {

    const [pastGames, setPastGames] = useState([])

    useEffect(() => {
        const getPastGames = async () => {
            const remotePastGames = await fetchPastGames()
            setPastGames(remotePastGames)
        }
        getPastGames()
    }, [])

    const fetchPastGames = async () => {
        const res = await fetch(`http://lakers-backend.herokuapp.com/eventslast/${props.teamID}`)
        const data = await res.json()
        // console.log(data)
        return data.results
    }

    return (
        <div>
            {
                pastGames.map((game) =>
                    <PastGamesCard game={game} key={game.idEvent} />
                )
            }
        </div>
    )
}

export default PastGames
