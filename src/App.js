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

                    <div className="app-container">
                        <Router basename={process.env.PUBLIC_URL}>
                            <Switch>
                                <Route exact path='/' component={Homepage}/>
                                <Route path='/about' component={About} />
                                <Route path='/contact' component={Contact}/>
                            </Switch>
                        </Router>
                    </div>

        );
    }
}

export default hot(module)(App);
