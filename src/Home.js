import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import fire from './Config/Fire';
import './Home.css';
import Calender from './Calender';
import urea  from './components/urea';
import MOP  from './components/MOP';
import CES  from './components/CES';
import TSP  from './components/TSP';
import ZS  from './components/ZS';
import SOP  from './components/SOP';
import BOR  from './components/BOR';
import NIF  from './components/NIF';
import PHF  from './components/PHF';
import POS  from './components/POS';
class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
            <div >
                 <BrowserRouter>
                    <div>
                        <Switch>
                        <Route path="/urea" component={urea} />
                        <Route path="/MOP" component={MOP} />
                        <Route path="/CES" component={CES} />
                        <Route path="/TSP" component={TSP} />
                        <Route path="/ZS" component={ZS} />
                        <Route path="/SOP" component={SOP} />
                        <Route path="/BOR" component={BOR} />
                        <Route path="/NIF" component={NIF} />
                        <Route path="/PHF" component={PHF} />
                        <Route path="/POS" component={POS} />
                        <section >
                                <div id = 'cssmenu' class = 'h-150' >
                                <Navigation />
                                </div>
                                <article class = "texting" >
                                    <h2> Get Predictions </h2>
                                        <div className = "container" >
                                            <div className = "row" >
                                                <div className = "col-sm-11" >
                                                    <h6> Planted Date </h6>  <p></p>
                                                        <Calender/> <p></p>
                                                            <h6> <p>Select the Area </p>
                                                                <select className='mb-3'>
                                                                <option value = "Anuradhapura" > Anuradhapura </option>
                                                                <option value = "Kurunagala" > Kurunagala </option>
                                                                <option selected value = "Polonnaruwa" > Polonnaruwa </option>
                                                                <option value = "Hmbanthota" > Hmbanthota </option> </select>
                                                            </h6>
                                                        <h6> Select the Seed Type <p></p>
                                                            <select>
                                                                <option value = "Bg 407" > Bg 407 </option>
                                                                <option value = "Bg 400-1" > Bg 400-1 </option>
                                                                <option selected value = "Bg 1639" > Bg 1639 </option>
                                                                <option value = "Bg 305" > Bg 305 </option>
                                                            </select>
                                                        </h6>
                                                </div>
                                                <div className = "col-sm-1" >
                                                <button type = "submit" class = "btn btn-primary srt" > Submit </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </section>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Home;
