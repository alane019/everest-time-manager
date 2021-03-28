import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

function PieChart(props) {
  const [chartData, setChartData] = useState(props.chartData);

  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    project: "Minutes",
  };

  return (
    <div className="chart">
      <Pie
        data={chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Time Spent On Project Tasks In " + props.project,
            fontSize: 25,
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
          },
        }}
      />
    </div>
  );
}

export default PieChart;
