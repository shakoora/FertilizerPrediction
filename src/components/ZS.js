import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./Navigation";
import fire from '../Config/Fire';
import Chart from '../ChartView';
import '../Home.css';


import MOP  from './MOP';
import CES  from './CES';
import TSP  from './TSP';
import urea  from   './urea';
import SOP  from './SOP';
import BOR  from './BOR';
import NIF  from './NIF';
import PHF  from './PHF';
import POS  from './POS';
import About  from './About';
import Contact  from './Contact';

class ZS extends Component {
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
            labels: ['Zinc Gluconate', 'Zinc Oxide', 'Zinc Sulfate','Zinc Picolinate'],
            datasets:[
              {
                label:'kg',
                data:[
                  30,
                  42,
                  15,
                  87
                ],
                backgroundColor:[
                  'rgba(125, 125, 0)',
                  'rgba(0,125,125)',
                  'rgba(125,0,125)',
                  'rgba(125,78,21)',
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
                 <Route path="/urea" component={urea} />
                 <Route path="/SOP" component={SOP} />
                 <Route path="/BOR" component={BOR} />
                 <Route path="/NIF" component={NIF} />
                 <Route path="/PHF" component={PHF} />
                 <Route path="/POS" component={POS} />
                 <Route path="/About" component={About} />
                 <Route path="/Contact" component={Contact} />
                     <section >
                         <div id = 'cssmenu' class = 'h-150' >
                         <Navigation />
                         </div>
                         <article class = "texting" >
                                              < h2 > ZS Predications </h2> <br/ >
                                                  <div className = "container" >
                                                      <div className = "row" >
                                                          <Chart chartData={this.state.chartData} location="Zinc Sulfate" />
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
export default ZS;
