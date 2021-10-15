import { useState, useEffect } from "react";
import Header from './components/Header'
import LeagueGames from './components/League/LeagueGames'

function App() {

  const [games, setGames] = useState([])
  const [teams, setTeams] = useState([])

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

  //team handling
  useEffect(() => {
    const getTeams = async () => {
      const remoteTeams = await fetchTeams()
      setTeams(remoteTeams)
    }
    getTeams()
  }, [])

  const fetchTeams = async () => {
    const res = await fetch('http://lakers-backend.herokuapp.com/leaguedetails')
    const data = await res.json()
    console.log(data)
    return data.teams
  }

  return (
    <div className="App" >
      <LeagueGames games={games} />
      <Header teams={teams} />
    </div>
  );
}

export default App;
