import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class AlignSelf extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerSon}>
                    <Text style={styles.view_one}>视图1</Text>
                    <Text style={styles.view_two}>视图2</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:100,
        backgroundColor: '#Ff0',
    },
    containerSon: {
        flex: 1,
        paddingTop:100,
        backgroundColor: '#Ff0',
        alignItems:'flex-end'
    },
    view_one: {
        height: 150,
        width: 150,
        fontSize: 28,
        backgroundColor: 'blue',
    },
    view_two: {
        height: 150,
        width: 150,
        fontSize: 28,
        backgroundColor: 'red',
        alignSelf:'flex-start'

    },


});
