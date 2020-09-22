import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    StatusBar,
    Alert,
    AppRegistry
} from 'react-native';

export default class MyCountTime extends Component {
    constructor(props) {
        super(props);
        let timeLeft = this.props.timeLeft > 0 ? this.props.timeLeft : 5;
        let width = this.props.width || 100;
        let height = this.props.height || 50;
        let color = this.props.color || '#42A5F5';
        let fontSize = this.props.fontSize || 30;
        let fontWeight = this.props.fontWeight || '600';
        let borderColor = this.props.borderColor || '#42A5F5';
        let borderWidth = this.props.borderWidth || 1;
        let borderRadius = this.props.borderRadius || 4;
        let backgroundColor = this.props.backgroundColor || '#42A5F5';
        let begin = 0;
        let press = this.props.press;

        this.afterEnd = this.props.afterEnd || this._afterEnd;
        this.style = this.props.style;

        this.state = {
            timeLeft: timeLeft,
            begin: begin
        };
        this.countTextStyle = {
            textAlign: 'center',
            color: '#42A5F5',
            fontSize: fontSize,
            fontWeight: fontWeight

        };
        this.countViewStyle = {
            backgroundColor: backgroundColor,
            alignItems: 'center',
            borderColor: borderColor,
            borderWidth: borderWidth,
            borderRadius: borderRadius,
            width: width,
            height: height
        }
    }

    countdownfn(timeLeft, callback, begin) {
        if (timeLeft > 0) {
            this.state.begin = 1;
            console.log("===lin===>");

            let that = this;
            let interval = setInterval(function () {
                if (that.state.timeLeft < 1) {
                    clearInterval(interval);
                    callback(that)
                } else {
                    let totalTime = that.state.timeLeft;
                    that.setState({
                        timeLeft: totalTime - 1
                    })
                }
            }, 1000)
        }
    }

    _beginCountDown() {
        if (this.state.begin === 1) {
            return;
        }
        let time = this.state.timeLeft;
        console.log("===lin===> time " + time);
        let afterEnd = this.afterEnd;
        let begin = this.state.begin;
        console.log("===lin===> start " + begin);
        this.countdownfn(time, afterEnd, begin)
    }

    _afterEnd(that) {
        console.log('------------time over');
        that.setState({
            begin: 0,
            timeLeft: 5,
        })
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{ position: 'absolute', top: 13, right: 43, height: 30 }}>
                <Text
                    onPress={this._beginCountDown.bind(this)}
                    style={{ color: '#42A5F5', fontSize: 17, height: 40, zIndex: 999 }}> {this.state.begin === 0 ? '点击获取验证码' : this.state.timeLeft} </Text>

            </View>
        )
    }
}
