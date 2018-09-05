import React from 'react';

import './Homepage.css';

import NavBar from '../navigationbar/NavBar';
import Services from './Services';
import Footer from '../footer/Footer';

class Homepage extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
           <div className="homepage-container" >
               <Services/>
           </div>
        );
    }


}


export default Homepage;