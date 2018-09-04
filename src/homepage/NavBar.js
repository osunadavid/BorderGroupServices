import React from 'react';
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
                                <li><a href="#home">HOME</a></li>
                                <li><a href="#about">ABOUT</a></li>
                                <li><a href="#contact">CONTACT</a></li>
                            </ul>
                        </nav>
                    </header>


                </div>

        );
    }

}

export default NavBar;