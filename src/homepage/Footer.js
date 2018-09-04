import React from 'react';

import './Footer.css';

import fb_icon from '../../dist/images/fb_icon.svg';
import location_icon from '../../dist/images/location_icon.svg';
import twitter_icon from '../../dist/images/twitter_icon.svg';

class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
        <div className = "homepage-footer">
            <footer>

                <div className="contact-icons">

                    <ul>
                        <li> <img src={location_icon} /> </li>
                        <li> <img src={fb_icon} /> </li>
                        <li> <img src={twitter_icon} /> </li>
                    </ul>

                </div>

                <p> Border Group Services &#169; All Rights Reserved </p>
            </footer>
        </div>
        );
    }


}

export default Footer;