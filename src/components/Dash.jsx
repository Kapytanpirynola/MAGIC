// src/components/Dash.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../components/Footer';
import Chart from 'chart.js/auto';
import '../styles/Dash.css';
import HeaderDash from '../components/HeaderDash';

const Dash = () => {

  // Estado para almacenar los datos de la gráfica
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });
  
  // Estados para almacenar los datos de las tablas
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);

  // Estado para controlar si las gráficas están "apagadas"
  const [isGraphsInactive, setIsGraphsInactive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener datos de Firestore
        const dataCollection = collection(db, 'dailyRecords');
        const dataSnapshot = await getDocs(dataCollection);
        const dataList = dataSnapshot.docs.map(doc => doc.data());

        if (dataList.length > 0) {
          const dates = dataList.map(data => data.date || 'Unknown Date');
          const avgTemp = dataList.map(data => data.avgTemp || 0);
          const avgHumi = dataList.map(data => data.avgHumi || 0);
          const maxTemp = dataList.map(data => data.maxTemp || 0);
          const maxHumi = dataList.map(data => data.maxHumi || 0);
          const minTemp = dataList.map(data => data.minTemp || 0);
          const minHumi = dataList.map(data => data.minHumi || 0);

          // Configurar datos para las gráficas
          setChartData({
            labels: dates,
            datasets: [
              {
                label: 'Average Temperature',
                data: avgTemp,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false,
              },
              {
                label: 'Average Humidity',
                data: avgHumi,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false,
              },
              {
                label: 'Max Temperature',
                data: maxTemp,
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                fill: false,
              },
              {
                label: 'Max Humidity',
                data: maxHumi,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false,
              },
              {
                label: 'Min Temperature',
                data: minTemp,
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                fill: false,
              },
              {
                label: 'Min Humidity',
                data: minHumi,
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                fill: false,
              },
            ],
          });

          // Preparar datos para las tablas
          setTemperatureData(dataList.map(data => ({
            date: data.date || 'Unknown Date',
            avgTemp: data.avgTemp || 0,
            maxTemp: data.maxTemp || 0,
            minTemp: data.minTemp || 0,
          })));

          setHumidityData(dataList.map(data => ({
            date: data.date || 'Unknown Date',
            avgHumi: data.avgHumi || 0,
            maxHumi: data.maxHumi || 0,
            minHumi: data.minHumi || 0,
          })));
        } else {
          setChartData({ labels: [], datasets: [] });
          setTemperatureData([]);
          setHumidityData([]);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderDash/>
      <div className="dashboard-container">
        <h2>Weather Dashboard</h2>

        {/* Gráfica y Tabla de Temperatura */}
        <div className="chart-table-container">
          {/* Gráfica de Temperatura */}
          <div className={`chart-box ${isGraphsInactive ? 'inactive' : ''}`}>
            <h3 className="chart-title">Temperature Data</h3>
            <Line data={{
              labels: chartData.labels,
              datasets: chartData.datasets.filter(ds => ds.label.includes('Temperature'))
            }} options={{
              maintainAspectRatio: false, 
              responsive: true,
            }} />
          </div>

          {/* Tabla de Temperatura */}
          <div className="data-table-container">
            <h3>Temperature Data</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Average Temp</th>
                  <th>Max Temp</th>
                  <th>Min Temp</th>
                </tr>
              </thead>
              <tbody>
                {temperatureData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.date}</td>
                    <td>{data.avgTemp}°C</td>
                    <td>{data.maxTemp}°C</td>
                    <td>{data.minTemp}°C</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gráfica y Tabla de Humedad */}
        <div className="chart-table-container">
          {/* Gráfica de Humedad */}
          <div className={`chart-box ${isGraphsInactive ? 'inactive' : ''}`}>
            <h3 className="chart-title">Humidity Data</h3>
            <Line data={{
              labels: chartData.labels,
              datasets: chartData.datasets.filter(ds => ds.label.includes('Humidity'))
            }} options={{
              maintainAspectRatio: false, 
              responsive: true,
            }} />
          </div>

          {/* Tabla de Humedad */}
          <div className="data-table-container">
            <h3>Humidity Data</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Average Humidity</th>
                  <th>Max Humidity</th>
                  <th>Min Humidity</th>
                </tr>
              </thead>
              <tbody>
                {humidityData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.date}</td>
                    <td>{data.avgHumi}%</td>
                    <td>{data.maxHumi}%</td>
                    <td>{data.minHumi}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dash;
