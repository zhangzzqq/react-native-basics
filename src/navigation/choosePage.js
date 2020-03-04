// choosePage.js
import React, {Component} from 'react';
import page1 from './page1';
import page2 from './page2';
import { createStackNavigator } from 'react-navigation-stack';
export default class choosePage extends Component {

    render() {
        return (
            <MyNavigator/>
        );
    }
}
const MyNavigator = createStackNavigator({
    p1: {screen: page1},
    p2: {screen: page2},
}, {
    initialRouteName: 'p1',
});