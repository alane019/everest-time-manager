import React, { Component } from 'react';
import API from '../../utils/API';
import Chart from './Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }
 
  componentDidMount(){
    this.getChartData();
  }

  getChartData(){
    // API not finished. Dummy chart data in place for now.

    // API.getAction(data)
    //   .then(res => {
    //   const charts = res.data;
    //   let labels = charts.chartData.labels;
    //   let data = charts.chartData.datasets.data;
    //   console.log(data.Object.values(data)[0])
    //     });
      
    this.setState({
      chartData:{
        labels: ['Cleaning', 'Biking', 'Reading', 'Coding', 'Working'],
        datasets:[
          {
            label:'Minutes',
            data:[
              30,
              60,
              70,
              90,
              100
            ],
            backgroundColor:[
              '#8e9aaf',
              '#cbc0d3',
              '#efd3d7',
              '#feeafa',
              '#dee2ff',
            ],
            borderColor: [
              '#8e9aaf',
              '#cbc0d3',
              '#efd3d7',
              '#feeafa',
              '#dee2ff',
            ],
            borderWidth: 2,
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chart Page</h2>
        </div>
        {Object.keys(this.state.chartData).length &&
        <Chart chartData={this.state.chartData} 
        Project="Minutes" 
        legendPosition="bottom"/>
        }
      </div>
    );
  }
}

export default App;