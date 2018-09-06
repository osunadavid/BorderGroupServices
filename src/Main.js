import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './homepage/Homepage';
import About from "./navigationbar/About";
import Contact from "./navigationbar/Contact";


const Main = () => (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact}/>
        </Switch>
);

export default Main;