import React, {  } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Unlocking from './pages/unlocking';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Router>
        <Header/>
        <div className='page-wrapper'>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/unlocking" component={Unlocking} />
            </Switch>
        </div>      
        <Footer/>
      </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
