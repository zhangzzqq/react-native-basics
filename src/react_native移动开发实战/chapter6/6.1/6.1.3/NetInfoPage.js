import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, NetInfo} from 'react-native';

export default class NetInfoPage extends Component {

    componentDidMount() {
        NetInfo.addEventListener('change', this.handleNetInfo);
    }

    componentWillUnmount() {
        NetInfo.removeEventListener('change', this.handleNetInfo);
    }

    handleNetInfo(status) {
        alert('当前联网状态：' + status)
    }

    render() {
        return (
            <TouchableOpacity style={styles.btnContainer} onPress={this.getNetInfo.bind(this)}>
                <Text style={styles.textStyle}>获取网络状态</Text>
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
