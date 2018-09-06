import React from 'react';

import './Services.css';

import bgslogo from 'images/BorderGroupServices.png';
import usalogo from 'images/usaflag.png';
import mexlogo from 'images/mexicoflag.png';
import import_icon from 'images/import_icon.svg'
import export_icon from 'images/export_icon.svg';
import custom_icon from 'images/custom_icon.svg';
import warehouse_icon from 'images/warehouse_icon.svg';
import forms_icon from 'images/forms_icon.svg';
import tracking_icon from 'images/tracking_icon.svg';
import inventory_icon from 'images/inventory_icon.svg';
import border_icon from 'images/border_icon.svg';
import certified_icon from 'images/certified_icon.svg';
import links_icon from 'images/links_icon.svg';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

class Services extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {


        return (


            <div className="servicespage-container">

                <NavBar/>

                <div className= "servicespage-body">
                    <div className="servicespage-leftcolumn">

                        <h1 className="servicespage-title1"> Services </h1>
                        <hr className="title_hr"/>


                        <ul className="leftlist">

                            <li> <p className="listelement"> < img className="importicon" img src={import_icon} /> Import Process </p> </li>
                            <li> <p className="listelement"> <img className="exporticon" img src={export_icon} /> Export Process </p> </li>
                            <li> <p className="listelement"> <img className="customicon" img src={custom_icon} /> Custom Consulting </p> </li>
                            <li> <p className="listelement"> <img className="warehouseicon" img src={warehouse_icon} /> Warehouse </p></li>
                            <li> <p className="listelement"> <img className="formsicon" img src={forms_icon} /> Forms </p></li>

                        </ul>

                    </div>

                    <div className="servicespage-middlecolumn">

                        <h1 className="servicespage-bgs"> TESTING IMAGES </h1>
                        <hr className="title_hr"/>

                        < img className="bgs_logo" img src={bgslogo} />

                        <h1> Welcome </h1>

                        <hr className="title_hr"/>

                        <p className="p_welcome">We are located in both sides of the Otay Mesa border
                            with a wide range of services to facilitate your import
                            and export process. Our focus is to provide outstanding
                            services and Personalized Customer Services.
                        </p>

                        <hr className="title_hr"/>

                        <p className="usalogo"> <img src={usalogo} /> (619) 710-2504 </p>
                        <p className="mexlogo"> <img src={mexlogo} /> (664) 383-3430 </p>


                    </div>

                    <div className="servicespage-rightcolumn">

                        <h1 className="servicespage-title2"> Services </h1>
                        <hr className="title_hr2"/>

                        <ul className="rightlist">
                            <li><p className="listelement offset"> <img className="trackingicon" img src={tracking_icon} /> Tracking </p> </li>
                            <li><p className="listelement"> <img className="inventoryicon" img src={inventory_icon} /> Inventory </p> </li>
                            <li><p className="listelement"> <img className="bordericon" img src={border_icon} /> Border Wait Times  </p></li>
                            <li><p className="listelement"> <img className="certifiedicon" img src={certified_icon} /> C-TPAD Certified </p></li>
                            <li><p className="listelement"> <img className="linksicon" img src={links_icon} /> Links </p></li>
                        </ul>

                    </div>

                </div>
                <Footer/>
            </div>
        );

    }
}

export default Services;