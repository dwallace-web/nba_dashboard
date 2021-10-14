import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {

  const [games, setGames] = useState([])
  // const [teams, setTeams] = useState([])

  //game handling
  useEffect(() => {
    const getGames = async () => {
      const remoteGames = await fetchGames()
      setGames(remoteGames)
    }
    getGames()
  }, [])
  const fetchGames = async () => {
    const res = await fetch('http://lakers-backend.herokuapp.com/leaguenextevents')
    const data = await res.json()
    console.log(data)
    return data.events
  }

  // //team handling
  // useEffect(() => {
  //   const getTeams = async () => {
  //     const remoteTeams = await fetchTeams()
  //     setTeams(remoteTeams)
  //   }
  //   getTeams()
  // }, [])

  // const fetchTeams = async () => {
  //   const res = await fetch('http://lakers-backend.herokuapp.com/leaguedetails')
  //   const data = await res.json()
  //   console.log(data)
  //   // return data.events
  // }

  return (
    <div className="App" >
      <Header games={games} />
    </div>
  );
}

export default App;
