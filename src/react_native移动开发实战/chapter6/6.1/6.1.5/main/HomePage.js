import React, {Component} from 'react';
import {StyleSheet, Text,View,Dimensions} from 'react-native';


const {width,height} = Dimensions.get('window');

export default class HomePage extends Component {

    render() {
        return (
            <View style={styles.flexStyle}>
                <Text style={styles.textStyle}>首页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexStyle: {
        flex: 1,
        width:width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    textStyle: {
        fontSize: 18
    }
});

