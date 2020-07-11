import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Flex extends Component<Props> {
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
        flex: 0.4,
        alignItems:'center',
        backgroundColor: '#0dd',
        flexDirection:'row'
    },
    view_one: {
        height: 150,
        width: 150,
        fontSize: 28,
        backgroundColor: 'blue',
        flex: 1
    },
    view_two: {
        height: 150,
        width: 150,
        fontSize: 28,
        backgroundColor: 'red',
        flex: 5
    }
});
