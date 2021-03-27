import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import PieChart from './PieChart';

function ChartPage() {
 
  const [chartData, setChartData] = useState({})
  const projectNames = []
  const duration = []
  const projectColor = []

  useEffect(() => {
    // make API call
    API.getProjects()
        .then(res => {
            res.data.forEach(project => {
                projectNames.push(project.name)
                duration.push(project.duration)
                projectColor.push(project.color)
            })
            setChartData({
                chartData:{
                  labels: projectNames,
                  datasets:[
                    {
                      label:'Minutes',
                      data:duration,
                      backgroundColor:projectColor,
                      borderColor: projectColor,
                      borderWidth: 2,
                    }
                  ]
                }
              })
        })
  }, [])


      
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chart Page</h2>
        </div>
        {Object.keys(chartData).length &&
        <PieChart chartData={chartData} 
        Project="Minutes" 
        legendPosition="bottom"/>
        }
      </div>
    );
  }


export default ChartPage;