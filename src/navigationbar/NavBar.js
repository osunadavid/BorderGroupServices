import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.css';
class NavBar extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return(

                <div className = "homepage-header" >

                    <header><a href="">
                        <h4 className="bgs-title">Border Group Services</h4>
                    </a>
                        <nav>
                            <ul>
                                <li><a href="/">HOME</a></li>
                                <li> <Link to="/about"> ABOUT </Link> </li>
                                <li> <Link to="/contact">CONTACT</Link></li>
                            </ul>
                        </nav>
                    </header>


                </div>

        );
    }

}

export default NavBar;