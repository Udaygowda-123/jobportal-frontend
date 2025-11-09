import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function CustomerAnalysis(){
  const data = {
    labels: ['Jan','Feb','Mar','Apr','May'],
    datasets: [
      { label: 'Applications', data: [12, 19, 8, 17, 22], borderWidth: 1 }
    ]
  };
  return (
    <div className="card">
      <h3 className="font-semibold mb-4">Customer Analysis</h3>
      <div style={{height:300}}>
        <Bar data={data} />
      </div>
    </div>
  );
}
