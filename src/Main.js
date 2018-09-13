import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import TransitionSwitch from 'react-router-transition-switch'
import Fader from 'react-fader'
import About from "./navigationbar/About";
import Contact from "./navigationbar/Contact";
import Homepage from "./homepage/Homepage";
import ImportPage from "./services/ImportPage";


const Main = () => (
            <main>
                <Router>

                    <TransitionSwitch component={Fader}>

                        <Route exact path='/' component={Homepage}/>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact}/>


                        <Route path='/importpage' component={ImportPage}/>


                    </TransitionSwitch>

                </Router>
            </main>
);

export default Main;