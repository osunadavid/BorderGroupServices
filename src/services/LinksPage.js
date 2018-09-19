import React from 'react';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

import './LinksPage.css';

class LinksPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div className="linkspage-container">

                <NavBar/>

                <div className="linkspage-body">

                    <div className="linkspage-leftcolumn">



                    </div>


                    <div className="linkspage-middlecolumn">


                    </div>


                    <div className="linkspage-rightcolumn">


                    </div>



                </div>

                <Footer/>

            </div>

        );
    }

}

export default LinksPage;