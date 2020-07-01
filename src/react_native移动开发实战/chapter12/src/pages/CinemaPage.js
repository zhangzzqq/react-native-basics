import React, {PureComponent} from 'react';
import {View, SafeAreaView, StyleSheet, WebView} from 'react-native';

export default class CinemaPage extends PureComponent {

    static navigationOptions = {
        headerTitle: '影院列表',
    };

    render() {
        let url='https://h5.m.taopiaopiao.com/app/moviemain/pages/cinema-list/index.html';
        return (
            <SafeAreaView style={styles.container}>
                <WebView source={{uri: url}}/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});
