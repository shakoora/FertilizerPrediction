import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./Navigation";
import fire from '../Config/Fire';
import Chart from '../ChartView';
import '../Home.css';


import urea  from './urea';
import CES  from './CES';
import TSP  from './TSP';
import ZS  from   './ZS';
import SOP  from './SOP';
import BOR  from './BOR';
import NIF  from './NIF';
import PHF  from './PHF';
import POS  from './POS';
import About  from './About';
import Contact  from './Contact';

class MOP extends Component {
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
            labels: ['Granular Urea', 'Ammonium Nitrate', 'Diammonium Phosphate'],
            datasets:[
              {
                label:'kg',
                data:[
                  70,
                  2,
                  19
                ],
                backgroundColor:[
                  'rgba(125, 125, 0)',
                  'rgba(0,125,125)',
                  'rgba(125,0,125)'

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

                 <Route path="/urea" component={urea} />
                 <Route path="/CES" component={CES} />
                 <Route path="/TSP" component={TSP} />
                 <Route path="/ZS" component={ZS} />
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
                                              < h2 > MOP Predications </h2> <br/ >
                                                  <div className = "container" >
                                                      <div className = "row" >
                                                          <Chart chartData={this.state.chartData} location="MOP" />
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
export default MOP;
