import React, { Component} from "react";
import {hot} from "react-hot-loader";

import Homepage from './homepage/Homepage.js';

class App extends Component{
    render(){
        return(

                <div className="app-container">
                <Homepage/>
                </div>
        );
    }
}

export default hot(module)(App);