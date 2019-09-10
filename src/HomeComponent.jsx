import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HomeComponent extends Component {
    render () {
        return (
            <div>
                <p>Hello world!</p>
                <img src="assets/pencil.png" alt="nothing" />
                <img src="assets/browser.svg" alt="nothing" />
            </div>
        );
    }
}

export default HomeComponent;

const wrapper = document.getElementById('main-component');
wrapper ? ReactDOM.render(<HomeComponent />, wrapper) : false;
