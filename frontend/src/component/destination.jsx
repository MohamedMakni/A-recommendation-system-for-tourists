import React, { Component } from "react";


//const imgMyimageexample = require('./image/destination-1.jpg');



 
	class Destination extends Component  {
		 divStyle1 = {
			background:`url(${this.props.img})`,

			 }
		render() {
			
	return (
		<div className="col-md-3">
			<div class="destination-slider owl-carousel ftco-animate">
    				<div class="item"></div>
			  	<div className="Destination" >
							<a href="#" className="img d-flex justify-content-center align-items-center"  >
								<div className="icon d-flex justify-content-center align-items-center">
									<span className="icon-search2"></span>
								</div>
							</a>
						 <div className="text p-3">
							  <h3><a href="#">{this.props.name}</a></h3>
							  <span className="listing">{this.props.listing}</span>
					  	</div>
						</div>
						</div>
			</div>
	);
}}
export default Destination;
