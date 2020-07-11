import React, {Component} from 'react';
import {
    StyleSheet,
    View, Text
} from 'react-native';


export default class HomePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 24}}>首页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

