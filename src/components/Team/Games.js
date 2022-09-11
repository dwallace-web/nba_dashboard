import React from 'react'
import { useEffect, useState } from 'react'
import TeamGame from './TeamGame';

const Games = props => {

    const [nextGames, setNextGames] = useState([])

    // useEffect(() => {
    //     const getNextGames = async () => {
    //         const remoteNextGames = await fetchNextGames()
    //         setNextGames(remoteNextGames)
    //     }
    //     getNextGames()
    // }, [])

    // const fetchNextGames = async () => {
    //     const res = await fetch(`http://lakers-backend.herokuapp.com/eventsnext/${props.teamID}`)
    //     const data = await res.json()
    //     // console.log(data)
    //     return data.events
    // }

    let teamidentifer = `${props.teamID}`;

    useEffect(() => {
        const fetchGames = () => {
            return fetch(`https://lakers-backend.herokuapp.com/eventsnext/${teamidentifer}`)
                .then(res => (
                    res.json()))
                // .then(data => {
                //     console.log(data)
                // })
                .then(games => {
                    setNextGames(games.events)
                })
        }
        fetchGames();
    }, [teamidentifer])

    return (
        <div>
            {
                nextGames?.map((game) =>
                    <TeamGame game={game} key={game.idEvent} />
                )
            }
        </div>
    )
}

export default Games
