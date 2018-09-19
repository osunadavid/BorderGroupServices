import React from 'react';

import './CustomsPage.css';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

class CustomsPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

                <div className="customspage-container">
                    <NavBar/>
                    <div className="customspage-body">

                        <div className="custonspage-leftcolumn">



                        </div>


                        <div className="customspage-middlecolumn">


                        </div>


                        <div className="customspage-rightcolumn">


                        </div>



                    </div>
                    <Footer/>
                </div>
        );
    }




}

export default CustomsPage;