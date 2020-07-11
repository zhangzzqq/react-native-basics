import React, {Component} from 'react';
import {Text, StyleSheet,TouchableOpacity, AppState} from 'react-native';

export default class AppStatePage extends Component {

    getCurrentState() {
        alert("当前状态：" + AppState.currentState)
    }

    render() {
        return (
            <TouchableOpacity style={styles.btnContainer} onPress={this.getCurrentState.bind(this)}>
                <Text style={styles.textStyle}>获取应用状态</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    btnContainer: {
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#EE7942',
        height: 38,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 18
    }
});
