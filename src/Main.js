import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import About from "./navigationbar/About";
import Contact from "./navigationbar/Contact";
import Homepage from "./homepage/Homepage";


const Main = () => (
            <main>
                <Router>
                    <Switch>

                        <Route exact path='/' component={Homepage}/>

                        <Route path='/about' component={About} />

                        <Route path='/contact' component={Contact}/>

                    </Switch>
                </Router>
            </main>
);

export default Main;