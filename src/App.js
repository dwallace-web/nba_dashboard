import { useState, useEffect } from "react";
import LeagueTeams from './components/League/LeagueTeams';
import LeagueGames from './components/League/LeagueGames';
import Header from './components/Body/Header';
import Footer from './components/Body/Footer';
import NavBar from './components/Body/Navbar';
import {
  Switch,
  Route,
} from 'react-router-dom'
import Team from "./components/Team/Team";

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
    <div className="App">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="navbar">
          <NavBar />
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
          <Footer />
        </div>
      </div>

      <Switch>
        <Route path="/team/:id">
          <Team />
        </Route>
      </Switch>

    </div>
  );

}

export default App;
