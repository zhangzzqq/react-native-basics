
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import MyCountTime from './MyCountTime'




export default class test extends Component {


    render() {
        return (

            <View>

                <Text>12</Text>

                <MyCountTime timeLeft={150}>

                </MyCountTime>

            </View>
        );
    }


}

