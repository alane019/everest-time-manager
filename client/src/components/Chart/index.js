import React, { Component } from "react";
import PieChart from "../PieChart";
import SyncIcon from "@material-ui/icons/Sync";
import IconButton from "@material-ui/core/IconButton";

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
            data: tasks.map((t) => (t.duration / 60).toFixed(2)),
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
        {Object.keys(this.state.chartData).length && (
          <PieChart
            chartData={this.state.chartData}
            Project="Minutes"
            legendPosition="bottom"
          />
        )}
        <IconButton
          style={{ position: "absolute", bottom: "30px", right: "30px" }}
          onClick={() => this.props.syncActions()}
        >
          <SyncIcon />
        </IconButton>
      </div>
    );
  }
}

export default Chart;
