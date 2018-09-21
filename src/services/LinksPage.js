import React from 'react';
import NavBar from "../navigationbar/NavBar";
import Footer from "../footer/Footer";

import './LinksPage.css';

import bgslogo from 'images/BorderGroupServices.png';


const DFAIMPORT_LINK = "https://www.accessdata.fda.gov/cms_ia/ialist.html";
const CTPAT_LINK = "https://www.cbp.gov/xp/cgov/trade/cargo_security/ctpat/";
const HARMONIZED_LINK = "https://www.usitc.gov/tata/hts/bychapter/index.htm%20";
const FDA_LINK = "https://www.fda.gov/default.htm%20";

const CBP_LINK = "https://www.cbp.gov/";
const USEPA_LINK = "https://www.epa.gov/pesticides/regulating/tolerances-sp.html%20";
const USDA_LINK = "https://epermits.aphis.usda.gov/manual/index.cfm?ACTION=pubHome";

class LinksPage extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onDFAButtonLink(e){
        var newTab = window.open(DFAIMPORT_LINK, "_blank");
        newTab.focus();
    }

    onCTPATButtonLink(e){
        var newTab = window.open(CTPAT_LINK, "_blank");
        newTab.focus();
    }

    onHarmonizedButtonLink(e){
        var newTab = window.open(HARMONIZED_LINK, "_blank");
        newTab.focus();
    }

    onFDAButtonLink(e){
        var newTab = window.open(FDA_LINK, "_blank");
        newTab.focus();
    }

    onCBPButtonLink(e){
        var newTab = window.open(CBP_LINK, "_blank");
        newTab.focus();
    }

    onUSEPAButtonLink(e){
        var newTab = window.open(USEPA_LINK, "_blank");
        newTab.focus();
    }

    onUSDAButtonLink(e){
        var newTab = window.open(USDA_LINK, "_blank");
        newTab.focus();
    }

    render(){

        return(

            <div className="linkspage-container">

                <NavBar/>

                <div className="linkspage-body">

                    <div className="linkspage-leftcolumn">

                        <h1> Links  </h1>
                        <hr className="title_hr"/>

                        <div className="linkspage-leftlist">


                            <ul>
                                <li className="links-listelements" onClick={this.onDFAButtonLink}> DFA Import Alerts </li>
                                <li className="links-listelements" onClick={this.onCTPATButtonLink}> C-TPAT </li>
                                <li className="links-listelements" onClick={this.onHarmonizedButtonLink}> Harmonized Tariff Schedule </li>
                                <li className="links-listelements" onClick={this.onFDAButtonLink}> FDA </li>
                            </ul>

                        </div>



                    </div>


                    <div className="linkspage-middlecolumn">

                        <h1> BGS Links </h1>
                        <hr className="title_hr"/>

                        <img src={bgslogo} />

                        <hr className="title_hr"/>

                        <p className="linkspage-text">

                            These are the pivotal links to help facilitate your business needs.

                        </p>
                        <hr className="title_hr"/>


                    </div>


                    <div className="linkspage-rightcolumn">

                        <h1 className="secondlink"> Links </h1>
                        <hr className="title_hr"/>

                        <div className="linkspage-rightlist">


                            <ul>
                                <li className="links-listelements" onClick={this.onCBPButtonLink}> United States Customs </li>
                                <li className="links-listelements" onClick={this.onUSEPAButtonLink}> US EPA </li>
                                <li className="links-listelements" onClick={this.onUSDAButtonLink}> USDA </li>
                            </ul>

                        </div>




                    </div>



                </div>

                <Footer/>

            </div>

        );
    }

}

export default LinksPage;