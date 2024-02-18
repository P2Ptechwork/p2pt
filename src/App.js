import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/main_page/main_page';
import RegistrationPage from './components/SchRegistration/SchRegistration';
import StRegister from './components/StRegistration/StRegistration'
import SchLogin from './components/SchLogin/SchLogin';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/schregister" element={<RegistrationPage />} />
        <Route path="/stregister" element={<StRegister />} />
        <Route path="/schlogin" element={<SchLogin />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;