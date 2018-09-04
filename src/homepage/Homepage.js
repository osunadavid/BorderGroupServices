import React from 'react';

import './Homepage.css';

import NavBar from './NavBar';
import Services from './Services';
import Footer from './Footer';

class Homepage extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return(


           <div className="homepage-container" >
               <NavBar/>
               <Services/>
               <Footer />
           </div>

        );
    }


}


export default Homepage;