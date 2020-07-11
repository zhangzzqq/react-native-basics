import React, {PureComponent} from 'react';
import {TouchableOpacity, StyleSheet, Text, View,NativeModules} from 'react-native';

export default class SomePage extends PureComponent {

    constructor(props) {
        super(props);
        this.callBack = this.callBack.bind(this);
        this.promiss = this.promiss.bind(this);
    }

    callBack() {
        NativeModules.CustomModule.callbackMethod('params', (result) => {
            console.log('callBack ok======>' + result)
        }, (error) => {
            console.log('callBack error======>' + error)
        });
    }

    promiss() {
        NativeModules.CustomModule.promiseMethod('params').then((result) => {
            console.log('Promiss ok======>' + result)
        }).catch((error) => {
            console.log('Promiss error======>' + result)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.callBack} style={styles.bindButtonStyle}>
                    <Text style={styles.submitStyle}>回调方式</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.promiss} style={styles.bindButtonStyle}>
                    <Text style={styles.submitStyle}>Promiss方式</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    bindButtonStyle: {
        backgroundColor: '#42B3E3',
        borderRadius: 22,
        height: 44,
        marginRight: 15,
        marginLeft: 15,
        marginTop: 20,
        justifyContent: 'center'
    },
    submitStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'white'
    },
});
