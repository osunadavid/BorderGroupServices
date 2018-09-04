import React from 'react';

import './Homepage.css';

import bgslogo from '../../dist/images/BorderGroupServices.png';
import usalogo from '../../dist/images/usaflag.png';
import mexlogo from '../../dist/images/mexicoflag.png';
import import_icon from '../../dist/images/import_icon.svg'
import export_icon from '../../dist/images/export_icon.svg';
import custom_icon from '../../dist/images/custom_icon.svg';
import warehouse_icon from '../../dist/images/warehouse_icon.svg';
import forms_icon from '../../dist/images/forms_icon.svg';
import tracking_icon from '../../dist/images/tracking_icon.svg';
import inventory_icon from '../../dist/images/inventory_icon.svg';
import border_icon from '../../dist/images/border_icon.svg';
import certified_icon from '../../dist/images/certified_icon.svg';
import links_icon from '../../dist/images/links_icon.svg';

class Homepage extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return(


           <div className="homepage-container" >

               <div className = "homepage-header" >

                   <header><a href="">
                       <h4 className="bgs-title">Border Group Services</h4>
                   </a>
                       <nav>
                           <ul>
                               <li><a href="#home">HOME</a></li>
                               <li><a href="#about">ABOUT</a></li>
                               <li><a href="#contact">CONTACT</a></li>
                           </ul>
                       </nav>
                   </header>


               </div>

               <div className = "homepage-body">

                       <ul className="left-services-column">
                           <li className="services1"> <h3> Services </h3> </li>
                           <li> <p className="listelement"> < img className="importicon" img src={import_icon} /> Import Process </p> </li>
                           <li> <p className="listelement"> <img className="exporticon" img src={export_icon} /> Export Process </p> </li>
                           <li> <p className="listelement"> <img className="customicon" img src={custom_icon} /> Custom Consulting </p> </li>
                           <li> <p className="listelement"> <img className="warehouseicon" img src={warehouse_icon} /> Warehouse </p></li>
                           <li> <p className="listelement"> <img className="formsicon" img src={forms_icon} /> Forms </p></li>
                       </ul>

                       <div className="middle-column">

                       <h2 className ="welcome_title"> Custom House Brokerage </h2>
                           <hr className="title_hr"/>
                       <img className="bsglogo" img src = {bgslogo} />
                       <h4 className="welcome_text">Welcome</h4>
                           <hr className="welcome_hr" />
                       <p className="p_welcome">We are located in both sides of the Otay Mesa border
                           with a wide range of services to facilitate your import
                           and export process. Ourfocus is to provide outstanding
                           services and Personalized Customer Services. </p>
                           <hr className="text_hr" />
                       <p> <img className="usalogo" img src={usalogo} /> (619) 710-2504 </p>
                       <p> <img className="mexlogo" img src={mexlogo} /> (664) 383-3430 </p>
                           <hr className ="phone_hr"/>

                       </div>

                       <ul className="right-services-column">
                           <li className="services2"> <h3> Services </h3> </li>
                           <li><p className="listelement offset"> <img className="trackingicon" img src={tracking_icon} /> Tracking </p> </li>
                           <li><p className="listelement"> <img className="inventoryicon" img src={inventory_icon} /> Inventory </p> </li>
                           <li><p className="listelement"> <img className="bordericon" img src={border_icon} /> Border Wait Times  </p></li>
                           <li><p className="listelement"> <img className="certifiedicon" img src={certified_icon} /> C-TPAD Certified </p></li>
                           <li><p className="listelement"> <img className="linksicon" img src={links_icon} /> Links </p></li>
                       </ul>


                   </div>

               <div className = "homepage-footer">

                   <footer>

                   <p> Border Group Services &#169; All Rights Reserved </p>


                   </footer>

               </div>




           </div>

        );
    }


}


export default Homepage;