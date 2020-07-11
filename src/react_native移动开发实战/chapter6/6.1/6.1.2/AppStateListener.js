import React, {Component} from 'react';
import {Text, StyleSheet,View, AppState} from 'react-native';

export default class AppStateListener extends Component {

    componentWillMount() {
        AppState.addEventListener('change', this.handleAppState);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppState);
    }

    handleAppState(appState) {
        alert('当前状态为：'+appState);
    }

    render() {
        return (
            <View style={styles.btnContainer}>
                <Text style={styles.textStyle}>状态监听中...</Text>
            </View>
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
