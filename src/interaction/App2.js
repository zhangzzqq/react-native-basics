import React, { Component } from 'react';
import {
  Alert, Button, StyleSheet, View,
  DeviceEventEmitter, ToastAndroid,
  NativeModules,
} from 'react-native';
import ToastExample from "../../ToastExample";
// var { NativeModules } = require('react-native');
// var storeModule=NativeModules.StoreModule;
import { NativeEventEmitter } from 'react-native';


export default class ButtonBasics extends Component {
  //注册监听
  UNSAFE_componentWillMount() {

    DeviceEventEmitter.addListener('EventName', function (msg) {
      console.log(msg);
      alert("send success");


    });


  }
  // componentWillMount() {
  //   DeviceEventEmitter.addListener('EventName', function (msg) {

  //     console.log(msg);

  //     ToastAndroid.show("DeviceEventEmitter收到消息:" + "\n" + msg.key, ToastAndroid.SHORT)

  //   });
  // }



  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onPressButton2() {
    // Alert.alert('You tapped the button!')
    ToastExample.show("Awesome", ToastExample.LONG);

  }

  _onPressButton3() {
    var storeModule = NativeModules.StoreModule;
    storeModule.addUser("jjz", "123456", (msg) => {
      alert(msg);
    }, (errorMsg) => {
      alert(errorMsg)
    });

  }


  _onPressButton4() {
    var storeModule = NativeModules.StoreModule;
    storeModule.login('jjz', '123456').then((map) => {
      alert(map['user_id']);
    }, (code, message) => {
      alert(message);
    })
  }

  _onPressButton5() {
    NativeModules.StoreModule.getTime();
  }


  _onPressButton6() {
    NativeModules.ImagePickerModule.pickImage(null);
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton2}
            title="toast button"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton3}
            title="callback button"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton4}
            title="promise button"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton5}
            title="js监听 button"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton6}
            title="startActivityForResult button"
          />
        </View>





        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>








        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="toast button"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
