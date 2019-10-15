import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import App from '../App';
import Pref from './pref';
import Contact from './contact';
import Home from './home';


const divStyle = {
  overflow: 'hidden',
  backgroundcolor: '#333',
  position: 'fixed',
  top: '0',
  width: '100%',
}
class Menu extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"  style={divStyle} id="ftco-navbar">
    <div className="container">
        <a className="navbar-brand" href="index.html">SitePcd.</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>
       
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about" >About</Link></li>
            <li className="nav-item"><Link to="/contact" >Contact</Link></li>
            <li className="nav-item cta"><a href="contact.html" className="nav-link"><span>Add listing</span></a></li>
          </ul>
        </div>
        </div>
        </nav>
        <Route path="/" exact component={Home} />  
        <Route path="/contact" component={Contact} /> 
      </div>
      </Router>
      
    );
  }
}

export default Menu;


