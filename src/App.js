import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import About from "./navigationbar/About";
import Contact from "./navigationbar/Contact";
import Homepage from "./homepage/Homepage";

class App extends Component{
    render(){
        return(
                <Router basename={process.env.PUBLIC_URL}>
                    <div className="app-container">
                    <Switch>
                        <Route exact path='/' component={Homepage}/>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                    </div>
                </Router>
        );
    }
}

export default hot(module)(App);
