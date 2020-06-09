import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, DatePickerAndroid, TouchableHighlight} from 'react-native';

let styles = {};

const {width, height} = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;

const DimensionsExample = () => (
    <View style={styles.container}>
        <Text>{width}</Text>
        <Text>{height}</Text>
        <Text>{windowWidth}</Text>

        <View>
            <Text>This is an Android specific component</Text>
            <TouchableHighlight onPress={showAlert}>
                <Text>SHOW ALERT</Text>
            </TouchableHighlight>
        </View>

    </View>
);


//时间选择器
function showAlert() {
    try {
        const {
            action,
            year,
            month,
            day,
        } = DatePickerAndroid.open({
            // Use `new Date()` for current date.
            // May 25 2020. Month 0 is January.
            date: new Date(2020, 4, 25),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
            // Selected year, month (0-11), day
        }
    } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
    }

}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DimensionsExample;