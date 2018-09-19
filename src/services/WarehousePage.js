import React from 'react';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

import './WarehousePage.css';

class WarehousePage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div className="warehousepage-container">
                <NavBar/>
                <div className="warehousepage-body">

                    <div className="warehousepage-leftcolumn">



                    </div>


                    <div className="warehousepage-middlecolumn">


                    </div>


                    <div className="warehousepage-rightcolumn">


                    </div>



                </div>
                <Footer/>
            </div>


        );

    }


}

export default WarehousePage;