import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;