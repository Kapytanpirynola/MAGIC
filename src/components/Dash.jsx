import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment';

const trigoStrength = 3; // Factor de ajuste para la función seno
let iteration = 11; // Contador para la generación de datos

// Genera una serie de tiempo con datos cada 5 minutos, basados en una función trigonométrica
const generateMinuteWiseTimeSeries = (baseval, count, yrange) => {
  let i = 0;
  let series = [];
  while (i < count) {
    let x = baseval; // Tiempo en milisegundos
    let y = (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2); // Valor generado
    series.push({ x, y }); // Agrega el par {x, y} a la serie
    baseval += 300000; // Incrementa el tiempo en 5 minutos (300,000 ms)
    i++;
  }
  return series; // Devuelve la serie generada
};

// Genera un número aleatorio dentro de un rango dado
const getRangeRandom = (yrange) => {
  return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
};

// Genera un valor aleatorio basado en una función trigonométrica
const getRandom = () => {
  const i = iteration;
  return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2);
};

const Dash = () => {
  // Estado para las opciones del gráfico de columnas
  const [optionsColumn, setOptionsColumn] = useState({
    chart: {
      height: 200,
      type: 'bar',
      animations: {
        enabled: false, // Desactiva las animaciones
      },
      toolbar: {
        show: false, // Oculta la barra de herramientas
      },
      zoom: {
        enabled: false, // Desactiva el zoom
      },
    },
    dataLabels: {
      enabled: false, // Desactiva las etiquetas de datos
    },
    stroke: {
      width: 0, // Sin borde en las columnas
    },
    series: [
      {
        name: 'Load Average', // Nombre de la serie
        data: generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, { min: 10, max: 110 }),
      },
    ],
    xaxis: {
      type: 'datetime', // Eje X como serie de tiempo
      range: 2700000, // Rango de 45 minutos
    },
  });

  // Estado para las opciones del gráfico de líneas
  const [optionsLine, setOptionsLine] = useState({
    chart: {
      height: 200,
      type: 'line',
      stacked: true, // Gráficos apilados
      animations: {
        enabled: true, // Activa las animaciones
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000, // Velocidad de la animación
        },
      },
      toolbar: {
        show: false, // Oculta la barra de herramientas
      },
      zoom: {
        enabled: false, // Desactiva el zoom
      },
    },
    dataLabels: {
      enabled: false, // Desactiva las etiquetas de datos
    },
    stroke: {
      curve: 'straight', // Línea recta
      width: 5, // Ancho de la línea
    },
    series: [
      {
        name: 'Running', // Nombre de la serie
        data: generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, { min: 30, max: 110 }),
      },
      {
        name: 'Waiting', // Nombre de la serie
        data: generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, { min: 30, max: 110 }),
      },
    ],
    xaxis: {
      type: 'datetime', // Eje X como serie de tiempo
      range: 45, // Rango en unidades de tiempo
    },
  });

  // useEffect se ejecuta al montar el componente y configura un intervalo para actualizar los datos
  useEffect(() => {
    const interval = setInterval(() => {
      iteration++; // Incrementa el contador de iteración
      const newDataColumn = optionsColumn.series[0].data.slice();
      newDataColumn.push({ x: newDataColumn[newDataColumn.length - 1].x + 300000, y: getRandom() }); // Agrega un nuevo dato al final
      newDataColumn.shift(); // Elimina el primer dato

      const newDataLine1 = optionsLine.series[0].data.slice();
      const newDataLine2 = optionsLine.series[1].data.slice();
      newDataLine1.push({ x: newDataLine1[newDataLine1.length - 1].x + 300000, y: getRandom() }); // Agrega un nuevo dato al final para la primera serie
      newDataLine2.push({ x: newDataLine2[newDataLine2.length - 1].x + 300000, y: getRandom() }); // Agrega un nuevo dato al final para la segunda serie
      newDataLine1.shift(); // Elimina el primer dato
      newDataLine2.shift(); // Elimina el primer dato

      // Actualiza el estado del gráfico de columnas
      setOptionsColumn((prev) => ({
        ...prev,
        series: [{ ...prev.series[0], data: newDataColumn }],
      }));

      // Actualiza el estado del gráfico de líneas
      setOptionsLine((prev) => ({
        ...prev,
        series: [
          { ...prev.series[0], data: newDataLine1 },
          { ...prev.series[1], data: newDataLine2 },
        ],
      }));
    }, 3000); // Intervalo de 3 segundos para la actualización

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [optionsColumn, optionsLine]);

  return (
    <div style={{ background: '#1B213B', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <ReactApexChart options={optionsColumn} series={optionsColumn.series} type="bar" height={200} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <ReactApexChart options={optionsLine} series={optionsLine.series} type="line" height={200} />
      </div>
    </div>
  );
};

export default Dash;
