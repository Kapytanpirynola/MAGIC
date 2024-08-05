// src/components/DashRealTime.jsx
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { realtimeDb, ref, onValue } from '../firebase';
import Footer from '../components/Footer';
import '../styles/Dash.css';
import HeaderDash from '../components/HeaderDash';

const DashRealTime = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Humidity (%)',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  });

  const [currentTemperature, setCurrentTemperature] = useState(null);
  const [currentHumidity, setCurrentHumidity] = useState(null);

  useEffect(() => {
    const tempRef = ref(realtimeDb, 'Living Room/temperature/value');
    const humiRef = ref(realtimeDb, 'Living Room/humidity/value');

    const unsubscribeTemp = onValue(tempRef, (snapshot) => {
      const temperatureValue = snapshot.val();
      setCurrentTemperature(temperatureValue);

      setChartData((prevData) => {
        const newLabels = [...prevData.labels, new Date().toLocaleTimeString()];
        const newTempData = [...prevData.datasets[0].data, temperatureValue];

        return {
          ...prevData,
          labels: newLabels.slice(-10),
          datasets: [
            { ...prevData.datasets[0], data: newTempData.slice(-10) },
            { ...prevData.datasets[1] },
          ]
        };
      });
    });

    const unsubscribeHumi = onValue(humiRef, (snapshot) => {
      const humidityValue = snapshot.val();
      setCurrentHumidity(humidityValue);

      setChartData((prevData) => {
        const newHumiData = [...prevData.datasets[1].data, humidityValue];

        return {
          ...prevData,
          datasets: [
            { ...prevData.datasets[0] },
            { ...prevData.datasets[1], data: newHumiData.slice(-10) }
          ]
        };
      });
    });

    return () => {
      unsubscribeTemp();
      unsubscribeHumi();
    };
  }, []);

  return (
    <>
      <HeaderDash />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Weather Dashboard</h2>

        <div className="chart-box">
          <h3 className="chart-title">Temperature & Humidity Data</h3>
          <Bar 
            data={chartData} 
            options={{
              maintainAspectRatio: false, 
              responsive: true,
              scales: {
                x: {
                  beginAtZero: true,
                  ticks: {
                    color: '#333',
                  },
                },
                y: {
                  beginAtZero: true,
                  ticks: {
                    color: '#333',
                  },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: '#333',
                  },
                },
                tooltip: {
                  callbacks: {
                    label: function(tooltipItem) {
                      const label = tooltipItem.dataset.label || '';
                      const value = tooltipItem.raw;
                      return `${label}: ${value}`;
                    }
                  }
                }
              },
            }} 
          />
        </div>

        <div className="current-conditions-container">
          <h3 className="current-conditions-title">Current Conditions</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Temperature</th>
                <th>Humidity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{currentTemperature !== null ? `${currentTemperature}°C` : 'Loading...'}</td>
                <td>{currentHumidity !== null ? `${currentHumidity}%` : 'Loading...'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashRealTime;
