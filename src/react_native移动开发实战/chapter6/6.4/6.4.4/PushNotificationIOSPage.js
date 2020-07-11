import React, {Component} from 'react';
import {AlertIOS, Dimensions, StyleSheet, Text, TouchableOpacity, View,PushNotificationIOS} from 'react-native';

const {width} = Dimensions.get('window');

export default class PushNotificationIOSPage extends Component {


    componentDidMount(){
        PushNotificationIOS.addEventListener('notification', this.onNotification);
        PushNotificationIOS.addEventListener('localNotification', this.onLocalNotification);
    }

    componentWillUnmount(){
        PushNotificationIOS.removeEventListener('notification', this.onNotification);
        PushNotificationIOS.removeEventListener('localNotification', this.onLocalNotification);
    }

    onNotification(notification) {
        AlertIOS.alert(
            'Push Notification Received',
            'Alert message: ' + notification.getMessage(),
            [{
                text: 'Dismiss',
                onPress: null,
            }]
        );
    }

    onLocalNotification(notification){
        AlertIOS.alert(
            'Local Notification Received',
            'Alert message: ' + notification.getMessage(),
            [{
                text: 'Dismiss',
                onPress: null,
            }]
        );
    }


    sendNotification() {
        PushNotificationIOS.scheduleLocalNotification({
            fireDate: new Date().getTime() + 5000,
            alertBody: '定时通知',
            category: 'REACT_NATIVE',
            applicationIconBadgeNumber: 5
        })
    }

    sendLocalNotification() {
        PushNotificationIOS.presentLocalNotification({
            alertBody: '即时通知',
            sound: 'default',
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnContainer} onPress={this.sendNotification}>
                    <Text style={styles.textStyle}>发送延时通知</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={this.sendLocalNotification}>
                    <Text style={styles.textStyle}>发送本地通知</Text>
                </TouchableOpacity>
            </View>
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
    btnContainer: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#EE7942',
        height: 38,
        width:width-80,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 18
    }
});
