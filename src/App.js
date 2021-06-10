import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import Dropdown from './components/Dropdown';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  useEffect(() =>{
    const hideMenu = () =>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false);
      }
    }
    window.addEventListener("resize",hideMenu)
    return ()=>{
      window.removeEventListener('resize',hideMenu)
    }

  },[])
  return (
    <Router>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} />
      <Switch>
       <Route exact path="/">
        <Home></Home>
       </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
