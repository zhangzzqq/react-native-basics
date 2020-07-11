import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View,DeviceEventEmitter} from 'react-native';

const {width,height} = Dimensions.get('window');
export default class MinePage extends Component {

    eventEmitter(){
        DeviceEventEmitter.emit('unReadMsg',10)
    }

    render() {
        return (
            <View style={styles.flexStyle}>
                <TouchableOpacity style={styles.btnContainer} onPress={this.eventEmitter.bind(this)}>
                    <Text style={styles.textStyle}>DeviceEventEmitter</Text>
                </TouchableOpacity>
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
    btnContainer: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#EE7942',
        height: 40,
        width:width-40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        color: '#ffffff'
    }
});

