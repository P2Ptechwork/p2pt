import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/main_page/main_page';
import RegistrationPage from './components/sch_registration/sch_registration';

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