import React from 'react';

import './Services.css';

import {Link} from "react-router-dom";

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

const TRACKING_LINK = "https://www.netchb.com/security/";
const BORDERTIMES_LINK = "https://apps.cbp.gov/bwt/display_rss_port.asp?port=250602";
const INVENTORY_LINK = "http://184.191.178.146:8181/swi/index.php";
const CTPAD_LINK = "https://www.cbp.gov/";

class Services extends React.Component {

    constructor(props) {
        super(props)
    }


    onTrackingButton(e){
        const newTab = window.open(TRACKING_LINK,'_blank');
        newTab.focus();
    }

    onBorderTimesButton(e){
        const newTab = window.open(BORDERTIMES_LINK, '_blank');
        newTab.focus();
    }

    onInventoryButton(e){
        const newTab = window.open(INVENTORY_LINK, '_blank');
        newTab.focus();
    }

    onCTPADButton(e){
        const newTab = window.open(CTPAD_LINK, '_blank');
        newTab.focus();
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
                            <li> <p className="listelement"> <Link to='/importpage'> <img src={import_icon} /> </Link> Import Process </p> </li>
                            <li> <p className="listelement"> <Link to='/exportpage'> <img src={export_icon} /> </Link> Export Process </p> </li>
                            <li> <p className="listelement"> <Link to='/customspage'> <img src={custom_icon} /> </Link> Custom Consulting </p> </li>
                            <li> <p className="listelement"> <Link to='/warehousepage'> <img src={warehouse_icon} /> </Link> Warehouse </p></li>
                            <li> <p className="listelement"> <Link to='/formspage'> <img src={forms_icon} /> </Link> Forms </p></li>

                        </ul>

                    </div>

                    <div className="servicespage-middlecolumn">

                        <h1 className="servicespage-bgs"> Custom House Brokerage </h1>
                        <hr className="title_hr"/>

                        <img src={bgslogo} />

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
                            <li><p className="listelement offset"> <img src={tracking_icon} onClick={this.onTrackingButton}/> Tracking </p> </li>
                            <li><p className="listelement"> <img src={inventory_icon} onClick={this.onInventoryButton} /> Inventory </p> </li>
                            <li><p className="listelement"> <img src={border_icon} onClick={this.onBorderTimesButton} /> Border Wait Times  </p></li>
                            <li><p className="listelement"> <img src={certified_icon} onClick={this.onCTPADButton} /> C-TPAD Certified </p></li>
                            <li><p className="listelement"> <Link to='/linkspage'><img src={links_icon} /> </Link> Links </p></li>
                        </ul>

                    </div>
                </div>
                <Footer/>
            </div>
        );

    }
}

export default Services;