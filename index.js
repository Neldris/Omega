import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import store from './src/api/omega/stores/'
import {Provider} from 'react-redux';

const omega =()=>
            <Provider store={store}>
                <App/>
            </Provider>



AppRegistry.registerComponent('Omega', () => omega);
