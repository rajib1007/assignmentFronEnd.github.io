import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Assets from './pages/Assets';
import Tracker from './pages/Tracker';
import Planning from './pages/Planning';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/assets' component={Assets} /> 
          <Route path='/tracker' component={Tracker} />
          <Route path='/planning' component={Planning} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
