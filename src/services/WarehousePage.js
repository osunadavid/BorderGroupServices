import React from 'react';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

import './WarehousePage.css';

import bgslogo from 'images/BorderGroupServices.png';
import check_icon from 'images/check_icon.svg';

class WarehousePage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div className="warehousepage-container">
                <NavBar/>
                <div className="warehousepage-body">

                    <div className="warehousepage-leftcolumn">

                        <h1> Services </h1>
                        <hr className="title_hr"/>


                        <div className="warehousepage-leftlist">
                            <ul>
                                <li>  <img src={check_icon} /> Web based warehouse system. </li>
                                <li>  <img src={check_icon} /> Reception and coordination of merchandise. </li>
                                <li>  <img src={check_icon} /> Sorting, labeling and loading of merchandise. </li>
                            </ul>

                        </div>



                    </div>


                    <div className="warehousepage-middlecolumn">

                        <h1> Warehouse </h1>
                        <hr className="title_hr"/>

                        <img src={bgslogo} />
                        <hr className="title_hr"/>

                        <p className="warehousepage-text">
                            These are the following warehouse services we offer assistance with. Please feel free to
                            contact us for more information or any other inquiries.
                        </p>

                        <hr className="title_hr"/>


                    </div>


                    <div className="warehousepage-rightcolumn">


                        <h1 className="blank_header"> Services </h1>
                        <hr className="title_hr"/>


                        <div className="warehousepage-rightlist">
                            <ul>
                                <li> <img src={check_icon} />  Secure facilities to meet your needs.</li>
                                <li> <img src={check_icon} />  Bar-Code inventory system. </li>
                                <li> <img src={check_icon} /> Daily inventories sent via e-mail or fax.</li>
                            </ul>

                        </div>

                    </div>



                </div>
                <Footer/>
            </div>


        );

    }


}

export default WarehousePage;