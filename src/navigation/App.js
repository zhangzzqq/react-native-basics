import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, StackActions, NavigationActions }
from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../pages/home/HomePage";
import DetailsScreen from "../pages/my/MyPage";

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
