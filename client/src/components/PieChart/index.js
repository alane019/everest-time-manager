import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    project: "Minutes",
  };

  render() {
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          width={1000}
          height={500}
          options={{
            maintainAspectRatio: false,
            title: {
              display: this.props.displayTitle,
              text: "Time Spent On Project Tasks In " + this.props.project,
              fontSize: 25,
            },
          }}
        />
      </div>
    );
  }
}

export default PieChart;
