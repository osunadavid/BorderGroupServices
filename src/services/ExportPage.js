import React from 'react';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

import './ExportPage.css';

class ExportPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){


        return(


                 <div className="exportpage-container">

                     <NavBar/>

                    <div className="exportpage-body">

                        <div className="exportpage-leftcolumn">



                        </div>


                        <div className="exportpage-middlecolumn">


                        </div>


                        <div className="exportpage-rightcolumn">


                        </div>



                    </div>

                     <Footer/>


                </div>

        );

    }




}

export default ExportPage;