import React from 'react';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

import './FormsPage.css';

class FormsPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div className="formspage-container">
                <NavBar/>
                <div className="formspage-body">

                    <div className="formspage-leftcolumn">



                    </div>


                    <div className="formspage-middlecolumn">


                    </div>


                    <div className="formspage-rightcolumn">


                    </div>



                </div>
                <Footer/>
            </div>

        );

    }
}

export default FormsPage;