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
                               <li><a href="#hero">HOME</a></li>
                               <li><a href="#about">ABOUT</a></li>
                               <li><a href="#contact">CONTACT</a></li>
                           </ul>
                       </nav>
                   </header>


               </div>

               < div className= "homepage-logo" >

                   <h2> Custom House Brokerage </h2>
                   <img className="bsglogo" img src = {bgslogo} />
                   <h4>Welcome</h4>
                   <p className="p_welcome">We are located in both sides of the Otay Mesa border <br></br>
                       with a wide range of services to facilitate your import <br></br>
                       and export process. Ourfocus is to provide outstanding <br></br>
                       services and Personalized Customer Services.<br></br></p>
                   <p> <img className="usalogo" img src={usalogo} /> (619) 710-2504 </p>
                   <p> <img className="mexlogo" img src={mexlogo} /> (664) 383-3430 </p>

               </div>

               <div className = "homepage-body " >


                   <ul className="left-services-column">
                       <li><a href="#import"></a> < img className="importicon" img src={import_icon} /> Import Process </li>
                       <li><a href="#export"></a> <img className="exporticon" img src={export_icon} /> Export Process </li>
                       <li><a href="#custom"></a> <img className="customicon" img src={custom_icon} /> Custom Consulting </li>
                       <li><a href="#warehouse"></a> <img className="warehouseicon" img src={warehouse_icon} /> Warehouse </li>
                       <li><a href="#forms"></a> <img className="formsicon" img src={forms_icon} /> Forms</li>
                   </ul>

                   <ul className="right-services-column">
                       <li><a href="#tracking"></a> Tracking </li>
                       <li><a href="#inventory"></a> Inventory </li>
                       <li><a href="#custom"></a> Border Wait Times </li>
                       <li><a href="#certified"></a> C-TPAD Certified </li>
                       <li><a href="#links"></a> Links </li>
                   </ul>


               </div>

               <div className = "homepage-footer">



               </div>




           </div>

        );
    }


}


export default Homepage;