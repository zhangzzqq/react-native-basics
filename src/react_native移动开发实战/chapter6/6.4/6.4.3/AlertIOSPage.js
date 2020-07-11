import React, {Component} from 'react';
import {AlertIOS, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const {width} = Dimensions.get('window');

export default class AlertIOSPage extends Component {

    confirm() {
        AlertIOS.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: '确认', onPress: () => console.log('确认 Pressed!')},
                {text: '取消', onPress: () => console.log('取消 Pressed!')},
            ]
        )
    }

    input() {
        AlertIOS.prompt(
            'Alert Title',
            'My Alert Input',
            [
                {text: '确认', onPress: () => console.log('确认 Pressed!')},
                {text: '取消', onPress: () => console.log('取消 Pressed!')},
            ]
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnContainer} onPress={this.confirm.bind(this)}>
                    <Text style={styles.textStyle}>警告弹框</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={this.input.bind(this)}>
                    <Text style={styles.textStyle}>输入弹框</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    btnContainer: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#EE7942',
        height: 38,
        width:width-120,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 18
    }
});
