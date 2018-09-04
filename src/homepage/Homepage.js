import React from 'react';

import './Homepage.css';

import NavBar from './NavBar';
import Services from './Services'

class Homepage extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return(


           <div className="homepage-container" >

               <NavBar/>
               <Services/>

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