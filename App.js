/**
 * @format
 */

import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Group from './src/redux/components/Group'
import rootReducer from './src/redux/reducers'

export default class App extends Component {
    render() {
        const store = createStore(rootReducer);
        return (
            <Provider store={store}>
                <Group />
            </Provider>
        );
    }
}
