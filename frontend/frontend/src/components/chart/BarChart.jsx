import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { UserData } from './Data';

const userData = {
  labels: UserData.map((data) => data.id),
  datasets: [{
    label: "Lost",
    data: UserData.map((data) => data.cost),
    backgroundColor: [
      'rgba(255, 0, 0, 0.6)', // Red with 60% opacity
      'rgba(255, 165, 0, 0.6)', // Orange with 60% opacity
      'rgba(255, 255, 0, 0.6)' // Yellow with 60% opacity
      // Add more colors as needed
    ],
    borderColor: 'gray',
    borderWidth: 2,
  }],
};

function BarChart({ chartData }) {
  useEffect(() => {
    document.title = 'BarChart';
  });

  return (
    <div className='container'>
      <div className="person-item">
        <div className="left-column">
          <Bar data={chartData} />
        </div>
        <div className="right-column">
          <div className="justify-center">
            <h1>BarChart Us</h1>
          </div>
        </div>
        {/* Add a horizontal line after each item */}
        <hr className="horizontal-line" />
      </div>
    </div>
  );
}

export { BarChart, userData }; // Export the BarChart component and userData object

export default BarChart; // Optionally, you can also export BarChart as the default export
