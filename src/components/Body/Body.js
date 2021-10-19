import React from 'react'
import LeagueTeams from '../League/LeagueTeams';
import LeagueGames from '../League/LeagueGames';
import Team from "../Team/Team";

import {
    Switch,
    Route,
} from 'react-router-dom'

const Body = props => {
    return (
        <div className="body">
            <div className="games-display">
                <LeagueGames games={props.games} />
            </div>

            <Switch>
                <Route path="/team/:id">
                    <div className="teams-display">
                        <Team />
                    </div>
                </Route>
                <Route path="/">
                    <div className="teams-display">
                        <LeagueTeams teams={props.teams} />
                    </div>
                </Route>
            </Switch>
        </div>

    )
}

export default Body
