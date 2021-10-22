import { useState, useEffect } from "react";
import Header from './components/Body/Header';

import Footer from './components/Body/Footer';

import Body from "./components/Body/Body";

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
    const res = await fetch('https://lakers-backend.herokuapp.com/leaguenextevents')
    const data = await res.json()
    // console.log(data)
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
    const res = await fetch('https://lakers-backend.herokuapp.com/leaguedetails')
    const data = await res.json()
    // console.log(data)
    return data.teams
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <Body teams={teams} games={games} />
        <Footer teams={teams} />
      </div>
    </div>
  );

}

export default App;
