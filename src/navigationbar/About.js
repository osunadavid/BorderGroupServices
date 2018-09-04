import React from "react";
import NavBar from "./NavBar";
import Footer from "../footer/Footer"

import './About.css'
import bgslogo from '../../dist/images/BorderGroupServices.png';

class About extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div className= "aboutpage-container" >

                <NavBar/>

                <div className="aboutpage-body" >


                    <div className="aboutpage-leftcolumn">

                        <h1 className="aboutpage-title"> About Us </h1>

                        <p className="aboutpage-description">

                            We have been in the U.S. Customs Brokerage business since 1988. This has given us the experience to offer you the best quality services. We understand the importance of your import / export process. We are focused in providing you personalized and professional services to enhance and expedite your shipments. We have been pioneers on the implementation of EDI processes.

                        </p>

                        <p className="aboutpage-description">

                            Paperless communication between companies saves time and money. Through our EDI (Electronic Data Interchange) programs we can offer you direct transfer of information. Our experience has been focused on Maquila process and the importation of fresh produce in the port of Otay Mesa and San Diego.

                        </p>

                        <p className="aboutpage-description">

                            We believe in the philosophy of "It is Good to be Big but It's Bigger to be Good" and we are certain that there is no small customers only important customers. We have the ability to understand our customer needs, by keeping us updated in trade and customs regulation we guide them to always be compliant.

                        </p>

                        <p className="aboutpage-description">

                        We are C-TPAT Certified and a Validated Company. Our people, our systems, and our commitment to serve are ready to provide you with the type of service you expect and deserve. Regardless of the level of service or expertise you require, we always provide our services promptly, efficiently and with courtesy.

                        </p>

                    </div>

                    <div className="aboutpage-middlecolumn">

                        <h1 className ="aboutpage-title"> Custom House Brokerage </h1>
                        <img className="bsglogo" img src = {bgslogo} />
                        <h2 className="aboutpage-title">Mission Statement</h2>
                        <p className="aboutpage-description">

                            "We will meet our clients' expectations and will earn their loyalty by providing excellent services and by keep them informed of changes in the industry. We treat our customer with respect honesty and integrity"

                        </p>

                    </div>

                    <div className="aboutpage-rightcolumn">

                        <h1 className="aboutpage-title"> Our Goals </h1>

                        <div className="goalslist">
                            <ul>
                                <li> Provide our customers with best quality services. </li>
                                <li> Always provide our services promptly, efficiently and with courtesy. </li>
                                <li> Keep updated on trade changes and new regulation. </li>
                                <li> Maintain our customers informed and in compliance with U.S. </li>
                                <li> Customs Regulations.</li>
                                <li> Develop our people.</li>
                                <li> Comply with C-TPAT security measures. </li>
                                <li> Grow our business. </li>
                            </ul>
                        </div>

                    </div>


                </div>

                <Footer />

            </div>

        );

    }

}

export default About;