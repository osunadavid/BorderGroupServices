import React from 'react';

import './CustomsPage.css';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

import check_icon from 'images/check_icon.svg';
import bgslogo from 'images/BorderGroupServices.png';

class CustomsPage extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){

        return(

                <div className="customspage-container">
                    <NavBar/>
                    <div className="customspage-body">

                        <div className="customspage-leftcolumn">

                            <h1> Services </h1>
                            <hr className="title_hr"/>

                            <div className="customspage-leftlist">

                                <ul>
                                    <li> <img src={check_icon} /> Tariff Classification </li>
                                    <li> <img src={check_icon} /> NAFTA Compliance</li>
                                    <li> <img src={check_icon} /> Post Entry Adjustment</li>
                                </ul>

                            </div>



                        </div>


                        <div className="customspage-middlecolumn">

                            <h1> Custom Consulting </h1>
                            <hr className="title_hr"/>

                            <img src={bgslogo} />
                            <hr className="title_hr"/>

                            <p className="custompage-text">
                                These are the following consulting services we offer assistance with. Please feel free to
                                contact us for more information or any other inquiries.

                            </p>

                            <hr className="title_hr"/>


                        </div>


                        <div className="customspage-rightcolumn">

                            <h1 className="blank_header"> Services </h1>
                            <hr className="title_hr"/>

                            <div className="customspage-rightlist">
                                <ul>
                                    <li> <img src={check_icon} /> Specific Product Requirements</li>
                                    <li> <img src={check_icon} /> US Custons Request for Information</li>
                                    <li> <img src={check_icon} /> US Marking of Products</li>
                                </ul>

                            </div>



                        </div>
                    </div>
                    <Footer/>
                </div>
        );
    }




}

export default CustomsPage;