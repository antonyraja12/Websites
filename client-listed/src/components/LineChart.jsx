// src/components/LineChart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function LineChart() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    axios
      .get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')

      .then((response) => {
        const data = response.data; 

        const chartData = {
          labels: [],
          datasets: [
            {
              label: 'My Line Chart',
              data: [],
              fill: false, 
              borderColor: 'rgba(75,192,192,1)', 
              borderWidth: 2, 
            },
          ],
        };
          console.log(data)
        data.forEach((entry) => {
          chartData.labels.push(entry.date);
          chartData.datasets[0].data.push(entry.value);
        });

        setChartData(chartData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const options = {
    scales: {
      x: {
        type: 'time', 
        time: {
          unit: 'day', 
        },
        title: {
          display: true,
          text: 'Date', 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value', 
        },
      },
    },
  };
  

  return (
    <div className="line-chart">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
