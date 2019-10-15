import React, { Component } from "react";
import Destination from "./destination";

const divStyle = {
   marginTop:'50px',
   
 };
 
const divStyle1 = {
  width: '100%',
  height: '350px',
  

 };
 const divStyle2={
   float: 'left',
 borderColor: 'rgb(221, 219, 219)',
 borderStyle: 'solid',
    borderWidth: '0.5px',
    paddinGright: '2px',
    marginTop: '0px',
    marginLeft: '1px',
    marginRight: '0px',
    width: '23%',
    height: '550px',
 }

class Destinations extends Component {

    state = {
        destinations: [
          {  name: "Lodon, UK" ,listing:"listing 10",},
          {  name: "Paris, France" ,listing:"listing 10",},
          { name: "San Francisco, USA" ,listing:"listing 10",},
          { name: "Lion, Singapore" ,listing:"listing 10",}
          
        ]
      };
    render() {
      return (
        <section className="ftco-section ftco-destination">
    	<div className="container">
    		<div className="row justify-content-start mb-5 pb-3">
            <h2 className="mb-8 " style={divStyle}><strong>Top Destination </strong> </h2>
        </div>
    	
        
         
        <div className="row">
    			<div className="col-md-12">
    				<div className="destination-slider owl-carousel ftco-animate">
    					<div className="item">

             <div style={divStyle2}>   
            <img src={require('C:/Users/Haythem Lajjem/Desktop/project/frontend/src/images/destination-1.jpg')} style={divStyle1}/>
    				<Destination name= {this.state.destinations[0].name} listing={this.state.destinations[0].listing}  />
           </div>
           <div style={divStyle2}>
            <img src={require('C:/Users/Haythem Lajjem/Desktop/project/frontend/src/images/destination-2.jpg')} style={divStyle1}/>
            <Destination name={this.state.destinations[1].name} listing={this.state.destinations[1].listing} />
            </div>
            <div style={divStyle2}>
            <img src={require('C:/Users/Haythem Lajjem/Desktop/project/frontend/src/images/destination-3.jpg')} style={divStyle1}/>
            <Destination name={this.state.destinations[2].name} listing={this.state.destinations[2].listing} />
            </div>
            <div style={divStyle2}>
            <img src={require('C:/Users/Haythem Lajjem/Desktop/project/frontend/src/images/destination-4.jpg')} style={divStyle1}/>
          	<Destination name={this.state.destinations[3].name} listing={this.state.destinations[3].listing} />
	    			</div>
           </div>  
    	</div>
      </div>
      </div>
      </div>
    	
    </section>)}}

export default Destinations;
