import React from 'react';

import './Homepage.css';

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



               </div>

               <div className = "homepage-body " >



               </div>

               <div className = "homepage-footer">



               </div>




           </div>

        );
    }


}


export default Homepage;