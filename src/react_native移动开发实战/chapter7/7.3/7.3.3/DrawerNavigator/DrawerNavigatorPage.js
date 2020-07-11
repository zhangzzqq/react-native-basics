import React, {PureComponent} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {createAppContainer, createDrawerNavigator} from 'react-navigation'

import Home from './tab/HomePage'
import Main from './tab/DrawMainPage'
import Mine from './tab/MinePage'

const DrawerTabNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                tabBarLabel: '首页',
            }),
        },
        Main: {
            screen: Main,
            navigationOptions: () => ({
                tabBarLabel: '购物车',
            }),
        },
        Mine: {
            screen: Mine,
            navigationOptions: () => ({
                tabBarLabel: '我的',
            })
        }
    }, {
        order: ['Main','Home', 'Mine'],
        initialRouteName: 'Main',
        drawerWidth: 160,
        drawerPosition: 'left',
        contentOptions: {
            // activeTintColor: 'white',
            // activeBackgroundColor: 'blue',
            // inactiveTintColor: 'black',
            // inactiveBackgroundColor: 'red',
        }
    }
);

const AppContainer = createAppContainer(DrawerTabNavigator);

export default class DrawerNavigatorPage extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
               <AppContainer/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 44,
        backgroundColor: "#f3f3f3"
    },
    iconStyle: {
        width: 25,
        height: 25
    },
});
