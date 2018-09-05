import React from 'react';
import './Homepage.css';

import Services from './Services';


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