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

    // let teamidentifer = `${props.teamID}`;

    // useEffect(() => {
    //     const fetchGames = () => {
    //         return fetch(`http://lakers-backend.herokuapp.com/eventsnext/${teamidentifer}`)
    //             .then(res => (
    //                 res.json()))
    //             .then(games => {
    //                 setPastGames(games.results)
    //             })
    //     }
    //     fetchGames();
    // }, [teamidentifer])

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
