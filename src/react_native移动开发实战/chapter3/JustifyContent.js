import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class JustifyContent extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.view}>视图</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        height: 150,
        width: 150,
        fontSize: 28,
        backgroundColor: 'red',
        alignSelf:'center'
    },
});
