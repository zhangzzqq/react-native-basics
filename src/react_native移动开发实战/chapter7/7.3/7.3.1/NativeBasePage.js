import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Container,Header,Title,Button,Content,Footer,Text} from 'native-base'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class NativeBasePage extends Component {

    render() {
        return (
            <Container theme={styles.container}>
                <Header>
                    <Title>NativeBase</Title>
                </Header>
                <Content style={styles.contentStyle}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    contentStyle: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
