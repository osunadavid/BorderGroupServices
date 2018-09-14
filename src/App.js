import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import TransitionSwitch from 'react-router-transition-switch'
import Contact from "./navigationbar/Contact";
import ImportPage from "./services/ImportPage";
import Fader from "react-fader";
import About from "./navigationbar/About";
import Homepage from "./homepage/Homepage";

class App extends Component{
    render(){
        return(
                    <div className="app-container">
                        <Router basename="BorderGroupServices">

                            <TransitionSwitch component={Fader}>
                                <Route exact path='/' component={Homepage}/>
                                <Route path='/about' component={About} />
                                <Route path='/contact' component={Contact}/>


                                <Route path='/importpage' component={ImportPage}/>


                            </TransitionSwitch>

                        </Router>
                    </div>
        );
    }
}

export default hot(module)(App);
