import React from "react"
import { Switch, Route } from 'react-router-dom'
import Hello from "./helloScreen/hello"
import Start from "./startPage/start"
import JourneyBegins from "./theJourneypage/journeyBegins"
import CreateCard from "./theJourneypage/createCard"
import SelectCardColor from "./theJourneypage/selectCardColor"
import AnonymousOrNot from "./theJourneypage/anonymousOrNot"

import '../assets/cssFiles/common.css'


class App extends React.Component{

    render(){
         
        return (
            <div>
                <div className="main-app">
                    {
                        <Switch>
                            <Route exact path="/" component={Hello}/>
                            <Route exact path="/start" component={Start}/>
                            <Route exact path="/journeybegins" component={JourneyBegins}/>
                            <Route exact path="/create-card" component={CreateCard}/>
                            <Route exact path="/create-card/select-color" component={SelectCardColor}/>
                            <Route exact path="/anonymous-or-not" component={AnonymousOrNot}/>
                        </Switch>
                    }
                
                </div>
                <div className="preloader"></div>
            </div>
            
        )
    }
}

export default App