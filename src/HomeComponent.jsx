import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import svgFile from './browser.svg';
import pngFile from './pencil.png';

// const svgFile = require('./browser.svg');

class HomeComponent extends Component {
    render () {
        return (
            <div>
                <p>Hello world!</p>
                <img src={pngFile} alt="nothing" />
                <img src={svgFile} alt="nothing" />
            </div>
        );
    }
}

export default HomeComponent;

const wrapper = document.getElementById('main-component');
wrapper ? ReactDOM.render(<HomeComponent />, wrapper) : false;
