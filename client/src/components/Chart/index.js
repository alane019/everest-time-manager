import React, { Component } from "react";
import PieChart from "../PieChart";

class Task {
  constructor(actionData) {
    if (!Array.isArray(actionData) || !actionData.length) {
      throw new Error("Action created with bad data");
    }

    this.color = actionData[0].project.color;
    this.name = actionData[0].task.name;
    this.projectName = actionData[0].project.name;
    this.duration = actionData.reduce((acc, curr) => acc + curr.duration, 0);
  }
}

class Chart extends Component {
  constructor(props) {
    super(props);

    const taskMap = props.actions.reduce((acc, curr) => {
      if (acc[curr.task._id]) {
        acc[curr.task._id].push(curr);
      } else {
        acc[curr.task._id] = [curr];
      }
      return acc;
    }, {});

    const tasks = Object.keys(taskMap).map((taskId) => {
      const actionData = taskMap[taskId];
      return new Task(actionData);
    });

    this.state = {
      chartData: {
        labels: tasks.map((t) => `${t.projectName} - ${t.name}`),
        datasets: [
          {
            label: "Minutes",
            data: tasks.map((t) => t.duration),
            backgroundColor: tasks.map((t) => t.color),
            borderColor: "white",
            borderWidth: 2,
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        {Object.keys(this.state.chartData).length && (
          <PieChart
            chartData={this.state.chartData}
            Project="Minutes"
            legendPosition="bottom"
          />
        )}
      </div>
    );
  }
}

export default Chart;
