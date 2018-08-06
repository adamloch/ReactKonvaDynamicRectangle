import React, { Component } from 'react';
import Canvas from '../Canvas/Canvas';
import logo from '../../logo.svg';
import '../../styles/App.css';

class App extends Component {
    state = {
        image: logo
    }

    render() {
        return (
                <div className="Canvas">
                    <Canvas />
                </div>
        );
    }
}

export default App;
