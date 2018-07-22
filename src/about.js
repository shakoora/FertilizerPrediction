import React, {
    Component
} from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom'
import fire from './Config/Fire';
import './Home.css';
import Chart from './ChartView';


class Home extends Component {
    

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
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
              {
                label:'Population',
                data:[
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        });
      }

    render() {
        return ( 
            <div >

                
            <section >
            <div id = 'cssmenu' class = 'h-150' >
            <ul>
            <li class = ' has-sub' > 
                < a href = '#' > < span > Fertilizer Predications </span></a >
            <ul >
            <li class = 'has-sub' > < a href = '#' > < span > Product 1 </span></a >
            <ul >
            <li > < a href = '#' > < span > Sub Product </span></a > </li> 
            <li class = 'last' > < a href = '#' > < span > Sub Product </span></a > </li> 
            </ul> 
            </li> 
            <li class = 'has-sub' > < a href = '#' > < span > Product 2 </span></a >
            <ul >
            <li > < a href = '#' > < span > Sub Product </span></a > </li> 
            <li class = 'last' > < a href = '#' > < span > Sub Product </span></a > </li> 
            </ul> 
            </li> 
            </ul> 
            </li>             
            <li > < a href = '#' > < span > Urea </span></a > </li> 
            <li > < a href = '#' > < span > Muriate of potash (M.O.P.)  </span></a > </li> 
            <li > < a href = '#' > < span > Commercial Epson Salt (C.E.S.) </span></a > </li> 
            <li > < a href = '#' > < span > Triple Super Phosphate (T.S.P)  </span></a > </li> 
            <li > < a href = '#' > < span > Zinc Sulphate </span></a > </li> 
            <li > < a href = '#' > < span > Sulphate of Potash (S.O.P) </span></a > </li> 
            <li > < a href = '#' > < span > Borate </span></a > </li> 
            <li > < a href = '#' > < span > Nitrogen fertilizers </span></a > </li> 
            <li > < a href = '#' > < span > phosphorus fertilizer </span></a > </li> 
            <li > < a href = '#' > < span > potassium fertilizer </span></a > </li> 
            
            <li > < a href = '#' > < span > About Project </span></a > </li> 
            <li > < a href = '#' > < span > Contact </span></a > </li> 
         
            <li class = 'last' > < a href = '#' > < span > Logout </span></a > </li>



            <button onClick = {
                this.logout
            } > Logout </button>


            </ul> 
            </div>


            <article class = "texting" >
           

            <div className = "container" >
                <div className = "row" >
                    <div className = "col-sm-6" >
                    <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>

                     
                        </div>
</div>
</div>
            </article> 
            </section> 
            </div>



        );
    }
}

export default Home;