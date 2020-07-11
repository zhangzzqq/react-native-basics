import React, {PureComponent} from 'react';
import {StyleSheet, Image, Text, View, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './HomePage'
import Mine from './MinePage'

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                tabBarLabel: '首页',
                tabBarIcon:({focused})=>{
                    if(focused){
                        return(
                            <Image source={require('./images/tabbar_homepage_selected.png')} style={styles.iconStyle}/>
                        )
                    }else{
                        return(
                            <Image source={require('./images/tabbar_homepage.png')} style={styles.iconStyle}/>
                        )
                    }
                }
            }),
        },
        Mine: {
            screen: Mine,
            navigationOptions: () => ({
                tabBarLabel: '我的',
                tabBarIcon:({focused})=>{
                    if(focused){
                        return(
                            <Image source={require('./images/tabbar_mine_selected.png')} style={styles.iconStyle}/>
                        )
                    }else{
                        return(
                            <Image source={require('./images/tabbar_mine.png')} style={styles.iconStyle}/>
                        )
                    }
                }
            })
        }
    }, {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        showIcon: true,
        showLabel: true,
        pressOpacity: 0.8,
        tabBarOptions: {
            activeTintColor: 'green',
            style: {
                backgroundColor: '#fff',
            },
        }
    }
);

const AppContainer = createAppContainer(BottomTabNavigator);


export default class TabNavigatorPage extends PureComponent {

    render() {
        return (
            <AppContainer/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3"
    },
    iconStyle: {
        width:25,
        height:25
    }
});
