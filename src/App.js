import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Aos from 'aos';
import "aos/dist/aos.css";
import ScrollToTop from './components/ScrollToTop';
Aos.init();

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component= {Home} />
      </Switch>
    </Router>
  );
}

export default App;
