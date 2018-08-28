import React from 'react';

import './Homepage.css';

import bgslogo from '../../dist/images/BorderGroupServices.png';
import usalogo from '../../dist/images/usaflag.png';
import mexlogo from '../../dist/images/mexicoflag.png';

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

                   <h3> Custom House Brokerage </h3>
                   <p> <img className="usalogo" img src={usalogo} /> (619) 710-2504 </p>
                   <p> <img className="mexlogo" img src={mexlogo} /> (664) 383-3430 </p>
                   <img className="bsglogo" img src = {bgslogo} />

               </div>

               <div className = "homepage-body " >


                   <ul className="left-services-column">
                       <li><a href="#import"></a> Import Process </li>
                       <li><a href="#export"></a> Export Process </li>
                       <li><a href="#custom"></a> Custom Consulting </li>
                       <li><a href="#warehouse"></a> Warehouse </li>
                       <li><a href="#forms"></a> Forms </li>
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