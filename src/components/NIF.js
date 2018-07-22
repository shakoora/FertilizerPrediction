import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./Navigation";
import fire from '../Config/Fire';
import Chart from '../ChartView';
import '../Home.css';


import MOP  from './MOP';
import CES  from './CES';
import TSP  from './TSP';
import ZS  from   './ZS';
import SOP  from './SOP';
import BOR  from './BOR';
import urea  from './urea';
import PHF  from './PHF';
import POS  from './POS';
import About  from './About';
import Contact  from './Contact';

class NIF extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            chartData:{}
          }
    }
    componentWillMount(){
        this.getChartData();
      }
      getChartData(){
        // Ajax calls here
        this.setState({
          chartData:{
            labels: ['Nitrate Fertilizers', 'Ammonium Fertilizers', 'Nitrate and Ammonium Fertilizers','Amide Fertilizers'],
            datasets:[
              {
                label:'kg',
                data:[
                  30,
                  20,
                  10,
                  80
                ],
                backgroundColor:[
                  'rgba(125, 125, 0)',
                  'rgba(0,125,125)',
                  'rgba(125,0,125)',
                  'rgba(32,54,89)',

                ]
              }
            ]
          }
        });
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

                 <Route path="/MOP" component={MOP} />
                 <Route path="/CES" component={CES} />
                 <Route path="/TSP" component={TSP} />
                 <Route path="/ZS" component={ZS} />
                 <Route path="/SOP" component={SOP} />
                 <Route path="/BOR" component={BOR} />
                 <Route path="/urea" component={urea} />
                 <Route path="/PHF" component={PHF} />
                 <Route path="/POS" component={POS} />
                 <Route path="/About" component={About} />
                 <Route path="/Contact" component={Contact} />
                     <section >
                         <div id = 'cssmenu' class = 'h-150' >
                         <Navigation />
                         </div>
                         <article class = "texting" >
                                              < h2 > NIF Predications </h2> <br/ >
                                                  <div className = "container" >
                                                      <div className = "row" >
                                                          <Chart chartData={this.state.chartData} location="Nitrogenous Fertilizers" />
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
export default NIF;
