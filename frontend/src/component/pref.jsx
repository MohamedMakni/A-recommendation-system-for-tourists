import React, { Component } from "react";
import './pref.css';

class Pref extends Component {
    render() {
        return (

            <div className="pref">
            
            
            <form>
            <div className="ab" >
                        <p>Je veux un pays</p>
                <select className="option" id="visa"> 
                        <option value="avec visa">avec visa</option>
                        <option value="avec visa à l'arrivée">avec visa à l'arrivée</option>
                        <option value="sans visa">sans visa</option>
                        
    
                </select>
                </div>
            <div className="a">
                    <p>Je vais payer</p>
                <select className="option" id="budget"> 
                    
                        <option value="0">budget</option>
                        <option value="1000">1000 DT</option>
                        <option value="1500">1500 DT</option>
                        <option value="2000">2000 DT</option>
                        <option value="2500">2500 DT</option>
                        <option value="3000">3000 DT</option>
                        <option value="3500">3500 DT</option>
                        <option value="4000">4000 DT</option>
                        <option value="4500">4500 DT</option>
                        <option value="5000">5000 DT</option>
                        <option value="5500">5500 DT</option>
                        <option value="6000">6000 DT</option>
                        <option value="6500">6500 DT</option>
                        <option value="7000">7000 DT</option>
                        <option value="7500">7500 DT</option>
                        <option value="10000">10000 DT</option>
                        <option value="15000">15000 DT</option>
                        <option value="20000">20000 DT</option>
    
                </select>
               </div>
            
            <div className="a">
                        <p> Je vais voyager en</p>
                <input type="radio" name="saison" value="ete" className="b"  checked/> ETE 
                <input type="radio" name="saison" value="hiver" className="b"/> HIVER
                </div>
            
                
            
            <div className="a">
                        <p>Je vais voyager</p>
                <select className="option" id="coup"> 
                        <option value="Individuellement">individuellement</option>
                        <option value="En couple">couple</option>
                        <option value="En couple avec enfants">couple avec enfants</option>
    
                </select>
            </div>
           
             
                <div className="a">
                        <p>Je vais passer&nbsp;</p>
                <select className="option" id="période"> 
                        
                        <option value="2">2 jours</option>
                        <option value="3">3 jours</option>
                        <option value="4">4 jours</option>
                        <option value="5">5 jours</option>
                        <option value="6">6 jours</option>
                        <option value="7">7 jours</option>
                        <option value="8">8 jours</option>
                        <option value="9">9 jours</option>
                        <option value="10">10 jours</option>
    
                </select>
                 </div> 
                 <div className="ac">
                        <p>Je vais voyager avec </p>
                <select className="option" id="enfants"> 
                        <option value="0">0 enfants</option>
                        <option value="1">1 enfant</option>
                        <option value="2">2 enfants</option>
                        <option value="3">3 enfants</option>
                        <option value="4">4 enfants</option>
                        <option value="5">5 enfants</option>
    
                </select>
                </div>
                
                 <div className="d"> 
                        <button type="submit" ><strong>Chercher moi<br/>une destination</strong> </button>
                </div>  
            </form>
        </div>







        )}}

        export default Pref;