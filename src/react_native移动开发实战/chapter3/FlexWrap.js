import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class FlexWrap extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.view}>视图1</Text>
                <Text style={styles.view}>视图2</Text>
                <Text style={styles.view}>视图3</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    view: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 28,
        backgroundColor: 'red'
    },
});
