import { useState, useEffect } from "react";
import LeagueGames from './components/League/LeagueGames'
import LeagueTeams from './components/League/LeagueTeams';

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
      <div className="container">
        <div className="header">
        </div>
        <div className="body">
          <div className="games-display">
            <LeagueGames games={games} />
          </div>
          <div className="teams-display">
            <LeagueTeams teams={teams} />
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    </div>
  );
}

export default App;
