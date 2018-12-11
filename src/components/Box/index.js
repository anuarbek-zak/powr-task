import React, { Component } from 'react';
import './index.css';

class Box extends Component {
    render() {
        return (
            <div style={{'background': this.props.color}} className="box">
            </div>
        );
    }
}

export default Box;
