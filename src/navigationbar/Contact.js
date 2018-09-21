import React from "react";
import NavBar from "./NavBar";
import Footer from "../footer/Footer";
import bsglogo from "../../dist/images/BorderGroupServices.png";
import email_icon from "../../dist/images/email_icon.svg";
import usalogo from "../../dist/images/usaflag.png";
import mexlogo from   "../../dist/images/mexicoflag.png";

import './Contact.css';

class Contact extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){

        return(

            <div className= "contactpage-container" >

                <NavBar/>

                <div className="contactpage-body">

                    <div className="contactpage-middlecolumn">

                        <h1 className="contactpage_title"> Contact Our Team </h1>
                        <hr className="contact_hr"/>

                        <img src = {bsglogo} />
                        <hr className="contact_hr"/>

                        <h2 className="sd_title"> San Diego, California </h2>
                        <p className="bgs_address"> 9543 Heinrich Hertz Dr # 7, San Diego, CA 92154, USA </p>
                        <hr className="contact_hr"/>

                        <p className="contact-email"> < img src={email_icon} /> bgsbroker@bgs-chb.com </p>
                        <hr className="contact_hr"/>

                        <p className="usalogo"> <img src={usalogo} /> (619) 710-2504 </p>
                        <p className="mexlogo"> <img src={mexlogo} /> (664) 383-3430 </p>


                    </div>

                </div>

                <Footer/>

            </div>

        );

    }

}

export default Contact;