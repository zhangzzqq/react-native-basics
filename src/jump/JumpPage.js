import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  // Navigator,


} from 'react-native';

import { StackNavigator } from 'react-navigation'

function RouteConfig() {

}

function StackNavigatorConfig() {
    
}

const Navigator = StackNavigator(RouteConfig, StackNavigatorConfig);

import FirstPageComponent from './FirstPageComponent';


export default class HelloWorld extends React.Component {

  render() {

    let defaultName = 'FirstPageName';
    let defaultComponent = FirstPageComponent;

    return (
        <Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={(route) => {
              return Navigator.SceneConfigs.FloatFromRight;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }}/>
    );
  }
}

AppRegistry.registerComponent('SampleAppMovies', () => HelloWorld);