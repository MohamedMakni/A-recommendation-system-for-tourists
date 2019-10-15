import React, { Component } from 'react';
import Pref from './pref';
import './Recher.css';

const imgMyimageexample = require('C:/Users/Haythem Lajjem/Desktop/project/frontend/src/images/bg_2.jpg');

const divStyle = {
    backgroundImage: `url(${imgMyimageexample})`,
  
    color: 'white',
    backgroundSize: 'cover' ,
    width: '100%',
    height: '650px',
   marginTop:'50px',
};


class Recher extends Component {
  render() {
    return (
      <div className="Recher" style={divStyle}> 
      <div className="" >
        
       <div className="">
          <div className="" data-scrollax-parent="true">
            <div className="col-md-12 ftco-animate">
              <br/><h1 className="mb-4"><strong>Explore amazing cities</strong></h1>
              <h1 className="mb-4">Find great places to stay, eat, shop, or visit from local experts</h1>
            </div>
            
            <form className="example" >
               <div>
                <input type="text" placeholder="Search.." name="search"/>
                 <button type="submit"className="fa fa-search"><strong>Chercher</strong></button>
               </div>  
              </form>
            
          </div>
        </div>
       <Pref/>
      </div>
    </div>
     
     
      
    );
  }

}


export default Recher;