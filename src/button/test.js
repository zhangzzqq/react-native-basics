import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Alert,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text, TouchableWithoutFeedback,
} from 'react-native';

export default class ButtonView extends Component {
    render() {
        return(
            <View style={{
                backgroundColor: '#ffaaaa',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'}}>
                <Button title="Button"
                        onPress={this.actionButton}
                        color={'#00f'}/>


                <TouchableOpacity style={styles.touchButton}
                                  onPress={() => {
                                      alert('TouchableOpacity')
                                  }}>
                    <Text style={styles.touchButtonText}>点击按钮1</Text>
                </TouchableOpacity>


                <TouchableHighlight activeOpacity={0.9}
                                    underlayColor={'#1aaf00'}
                                    style={[styles.touchButton]}
                                    onPress={() => {
                                        alert('TouchableHighlight')
                                    }}>
                    <Text style={styles.touchButtonText}>点击按钮2</Text>
                </TouchableHighlight>

                {/*显示背景 ,点击颜色, 透明度也是无效*/}
                <TouchableWithoutFeedback activeOpacity={0.9}
                                    underlayColor={'#1aaf00'}
                                    style={[styles.touchButton]}
                                    onPress={() => {
                                        alert('TouchableWithoutFeedback')
                                    }}>
                    <Text style={styles.touchButtonText}>点击按钮2</Text>
                </TouchableWithoutFeedback>

            </View>
        )
    }
    actionButton = () => {
        alert('Button')
    }
}
const styles = StyleSheet.create({
    touchButton: {
        height: 40,
        width: 100,
        borderRadius: 20,
        backgroundColor: '#fa1faa',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    touchButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    test:{
        color:'#FA7480'
    }, test1:{
        color:'#F5A623'
    }, test2:{
        color:'#82E485'
    } ,test3:{
        color:'#1BD0AB'
    } ,test4:{
        color:'#000'
    }
   
});

AppRegistry.registerComponent('ButtonView', ()=> ButtonView);