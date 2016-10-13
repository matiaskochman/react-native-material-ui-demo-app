//import native from './src';
//
//native();

import { AppRegistry } from 'react-native';
import React, { Component } from 'react';

import App from './src/App/App.react';


class Root extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('example', () => Root);
