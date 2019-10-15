import React, { Component } from 'react';
import Recher from './Recher';
import Destinations from './destinations';

class Home extends Component {
    render() {
        return (
            <div>
                <Recher/>
                <Destinations/>
            </div>);}}

export default Home;