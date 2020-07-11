import React, {Component} from 'react';
import {ToastAndroid, StyleSheet, BackHandler,WebView} from 'react-native';

export default class BackHandlerPage extends Component {

    onBackPress() {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.LONG);
        BackHandler.exitApp()
        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress',this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress',this.onBackPress);
    }

    render() {
        return (
            <WebView
                source={{uri: 'https://www.baidu.com/'}}
                style={{marginTop: 40}}
            />
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
});
