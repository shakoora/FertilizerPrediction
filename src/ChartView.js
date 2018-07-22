import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './Home.css';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
    chartData:props.chartData
    }
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
  }
  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={1000}
	        height={475}
          options={{
            title:{
              fontColor: 'black',
              display:this.props.displayTitle,
              text:'Predictable '+this.props.location + ' amount (kg/ht)',
              fontSize:30
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      fontColor: 'black',
                  },
              }],
            xAxes: [{
                  ticks: {
                      fontColor: 'white',
                  },
              }]
          }
          }}
        />
      </div>
    )
  }
}
export default Chart;
