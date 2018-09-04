import React from "react";
import NavBar from "./NavBar";
import Footer from "../footer/Footer";

import './Contact.css';

class Contact extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div className= "contactpage-container" >

                <NavBar/>

                <div className="contactpage-body">

                </div>

                <Footer/>

            </div>

        );

    }

}

export default Contact;