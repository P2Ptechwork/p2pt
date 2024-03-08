import React from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './components/SchRegistration/SchRegistration';
import StRegister from './components/StRegistration/StRegistration'
import TeaRegister from './components/TeaRegister/TeaRegister'
import SchLogin from './components/SchLogin/SchLogin';
import SchDashboard from './components/SchDashboard/SchDashboard'
import Navbar from './components/Navbar/Navbar';
import './App.css';



const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/schdashboard" element={<SchDashboard />} />
        <Route path="/schregister" element={<RegistrationPage />} />
        <Route path="/stregister" element={<StRegister />} />
        <Route path="/tregister" element={<TeaRegister />} />
        <Route path="/schlogin" element={<SchLogin />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;