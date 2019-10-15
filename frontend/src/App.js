import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Destinations from "./component/destinations";

import Recher from "./component/Recher";
import Menu from "./component/menu";
import Footer from "./component/Footer";
import Home from './component/home';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
         <Menu/>
         
        <Footer/>
        </Router>
        
      </div>
    );
  }
}

export default App;
      

