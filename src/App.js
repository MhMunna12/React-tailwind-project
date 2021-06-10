import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hero from './components/Hero';
function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Hero/>
      </div>
    </Router>
  );
}

export default App;
