import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import TransitionSwitch from 'react-router-transition-switch'
import Fader from 'react-fader'
import About from "./navigationbar/About";
import Contact from "./navigationbar/Contact";
import Homepage from "./homepage/Homepage";
import ImportPage from "./services/ImportPage";
import ExportPage from "./services/ExportPage";
import CustomsPage from "./services/CustomsPage";
import WarehousePage from "./services/WarehousePage";
import FormsPage from "./services/FormsPage";
import LinksPage from "./services/LinksPage";


const Main = () => (
            <main>
                <Router basename ="BorderGroupServices">

                    <TransitionSwitch component={Fader}>

                        <Route exact path='/' component={Homepage}/>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact}/>


                        <Route path='/importpage' component={ImportPage}/>
                        <Route path='/exportpage' component={ExportPage}/>
                        <Route path='/customspage' component={CustomsPage} />
                        <Route path='/warehousepage' component={WarehousePage}/>
                        <Route path='/formspage' component={FormsPage}/>
                        <Route path='/linkspage' component={LinksPage}/>


                    </TransitionSwitch>

                </Router>
            </main>
);

export default Main;