import React from 'react';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

import './ImportPage.css'

import check_icon from 'images/check_icon.svg';
import importpage_icon from 'images/importpage_icon.svg';

class ImportPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

                <div className="importpage-container">
                    <NavBar/>
                    <div className="importpage-body">

                        <div className="importpage-leftcolumn">

                            <div className="import-leftlist">


                                <ul>
                                    <li className="empty_space"> &#8203; </li>
                                    <li> <img src={check_icon} /> Entry Clearance </li>
                                    <li> <img src={check_icon} /> FDAT Transmission of Information</li>
                                    <li> <img src={check_icon} /> Electronic Filing to F&WL </li>
                                    <li> <img src={check_icon} /> U.S. Customs Bonds </li>
                                </ul>

                            </div>


                        </div>

                        <div className="importpage-middlecolumn">

                            <h1 className="importpage-title"> Import Process </h1>
                            <hr className="title_hr"/>
                            <img src={importpage_icon} />



                        </div>

                        <div className="importpage-rightcolumn">

                            <div className="import-rightlist">

                                <ul>
                                    <li className="empty_space"> &#8203;</li>
                                    <li> <img src={check_icon} /> Hazmat Entry Process  </li>
                                    <li> <img src={check_icon} /> e-Manifest </li>
                                    <li> <img src={check_icon} /> Reconciliations </li>
                                </ul>

                            </div>

                        </div>




                    </div>
                    <Footer/>
                </div>

        );

    }

}

export default ImportPage;