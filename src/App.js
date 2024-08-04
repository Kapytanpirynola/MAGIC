import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Productos from './components/Productos';
import Footer from './components/Footer';
import Brid from './components/Brid';
import PopPup from './components/PopPup';
import Team from './components/Team';
import Dash from './components/Dash';
import Marker from './components/Marke';
import Chart from 'react-apexcharts';
import moment from 'moment';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/root"
          element={
            <>
              <Header />
              <Brid />
              <Marker />
              <Productos />
              <PopPup />
              <Team />
              <Footer />
            </>
          }
        />
        <Route path="/" element={<Navigate to="/root"/>} />
        <Route path="/dash" element={<Dash/>} />
      </Routes>
    </Router>
  );
}

export default App;
