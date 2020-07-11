import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class FlexDirection extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.view_one}>视图1</Text>
                <Text style={styles.view_two}>视图2</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection:'row'
    },
    view_one: {
        height:200,
        width:200,
        textAlign:'center',
        fontSize:28,
        backgroundColor: 'red'
    },
    view_two: {
        height:200,
        width:200,
        textAlign:'center',
        fontSize:28,
        backgroundColor: 'green'
    },
});
