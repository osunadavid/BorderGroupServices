import React from "react";
import NavBar from "./NavBar";
import Footer from "../footer/Footer"

import './About.css'

class About extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div className= "aboutpage-container" >

                <NavBar/>

                <div className="aboutpage-body" >



                </div>

                <Footer />

            </div>

        );

    }

}

export default About;