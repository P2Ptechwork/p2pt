import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/main_page/main_page';
import RegistrationPage from './components/SchRegistration/SchRegistration';
import StRegister from './components/StRegistration/StRegistration'
import TeaRegister from './components/TeaRegister/TeaRegister'
import SchLogin from './components/SchLogin/SchLogin';
import SchDashboard from './components/SchDashboard/SchDashboard'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/schdashboard" element={<SchDashboard />} />
        <Route path="/schregister" element={<RegistrationPage />} />
        <Route path="/stregister" element={<StRegister />} />
        <Route path="/tregister" element={<TeaRegister />} />
        <Route path="/schlogin" element={<SchLogin />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;