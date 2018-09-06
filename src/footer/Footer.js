import React from 'react';

import './Footer.css';

import fb_icon from 'images/fb_icon.svg';
import location_icon from 'images/location_icon.svg';
import twitter_icon from 'images/twitter_icon.svg';

const LOCATION_LINK = "https://goo.gl/maps/c2foCfQ7jwJ2";
const FB_LINK = "https://www.facebook.com/Border-Group-Services-935999686415141/";
const TWITTER_LINK = "https://twitter.com/EFRCustomsHouse";



class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    onLocationButton(e){
        const newTab = window.open(LOCATION_LINK, '_blank');
        newTab.focus();
    }

    onFbButton(e){
        const newTab = window.open(FB_LINK, '_blank');
        newTab.focus();
    }

    onTwitterButton(e){
        const newTab = window.open(TWITTER_LINK, '_blank');
        newTab.focus();
    }

    render(){

        return(
        <div className = "homepage-footer">
            <footer>

                <div className="contact-icons">

                    <ul>
                        <li> <img src={location_icon} onClick={this.onLocationButton}/> </li>
                        <li> <img src={fb_icon} onClick={this.onFbButton} /> </li>
                        <li> <img src={twitter_icon} onClick={this.onTwitterButton} /> </li>
                    </ul>

                </div>

                <p> Border Group Services &#169; All Rights Reserved </p>
            </footer>
        </div>
        );
    }


}

export default Footer;