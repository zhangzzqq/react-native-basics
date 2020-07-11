import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class BoldAndBeautiful extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This is not really a bird nest.'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.baseText}>
                    <Text style={styles.titleText} onPress={this.onPressTitle}>
                        {this.state.titleText}{'\n'}{'\n'}
                    </Text>
                    <Text numberOfLines={5}>
                        {this.state.bodyText}
                    </Text>
                </Text>
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
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
