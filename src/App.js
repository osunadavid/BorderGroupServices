import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Switch, Route } from 'react-router-dom'
import About from "./navigationbar/About";
import Contact from "./navigationbar/Contact";
import Homepage from "./homepage/Homepage";

class App extends Component{
    render(){
        return(

                <div className="app-container">

                   < Homepage/>


                </div>
        );
    }
}

export default hot(module)(App);