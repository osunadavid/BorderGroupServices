import React from 'react';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

import './ExportPage.css';

import bgslogo from 'images/BorderGroupServices.png';
import check_icon from 'images/check_icon.svg';

class ExportPage extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){


        return(


                 <div className="exportpage-container">

                     <NavBar/>

                    <div className="exportpage-body">

                        <div className="exportpage-leftcolumn">

                            <h1> Services </h1>
                            <hr className="title_hr"/>

                            <div className="exportpage-leftlist">
                                <ul>
                                    <li> <img src={check_icon} /> Electronic Transmission to the Deparment of Commerce </li>
                                    <li> <img src={check_icon} /> Cancellation of TIB </li>
                                </ul>
                            </div>

                        </div>


                        <div className="exportpage-middlecolumn">

                            <h1> Export Process </h1>
                            <hr className="title_hr"/>

                            <img src={bgslogo} />
                            <hr className="title_hr"/>

                            <p className="exportpage-text">

                                These are the following export processes we offer assistance with. Please feel free to
                                contact us for more information or any other inquiries.

                            </p>
                            <hr className="title_hr"/>




                        </div>


                        <div className="exportpage-rightcolumn">

                            <h1 className="blank_header"> Services </h1>
                            <hr className="title_hr"/>

                            <div className="exportpage-rightlist">
                                <ul>
                                    <li> <img src={check_icon} /> Cancellation on Inbonds</li>
                                    <li> <img src={check_icon} /> Cancellation of TIB </li>
                                </ul>

                            </div>


                        </div>



                    </div>

                     <Footer/>


                </div>

        );

    }




}

export default ExportPage;