import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [nba, setNBA] = useState('');

  const fetchNBA = () => {
    let url = `http://lakers-backend.herokuapp.com/leaguedetails`

    fetch(url)
      .then(res => res.json())
      .then(data => setNBA(data))
      .catch(error => console.log(error))
  };
  fetchNBA()

  return (
    <div className="App" >
      {/* <Header /> */}
    </div>
  );
}

export default App;
