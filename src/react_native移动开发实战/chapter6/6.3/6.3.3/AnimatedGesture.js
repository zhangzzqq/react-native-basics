/**
 * 手势Gesture动画
 */
import React, {Component} from 'react';
import {View, StyleSheet, PanResponder, Animated, Image, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default class AnimatedGesture extends Component {

    state: {
        trans: AnimatedValueXY,
    }
    panResponder: PanResponder;

    constructor(props) {
        super(props);
        this.state = {
            trans: new Animated.ValueXY(),
        };
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true, //响应手势
            onPanResponderMove: Animated.event(
                [null, {dx: this.state.trans.x, dy: this.state.trans.y}] // 绑定动画值
            ),
            onPanResponderRelease: () => {//手松开，回到原始位置
                Animated.spring(this.state.trans, {toValue: {x: 0, y: 0}}
                ).start();
            },
            onPanResponderTerminate: () => {//手势中断，回到原始位置
                Animated.spring(this.state.trans, {toValue: {x: 0, y: 0}}
                ).start();
            },
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{
                    width: 60,
                    height: 60,
                    borderRadius: 40,
                    backgroundColor: 'blue',
                    transform: [
                        {translateY: this.state.trans.y},
                        {translateX: this.state.trans.x},
                    ],
                }}{...this.panResponder.panHandlers}>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 44,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    imageStyle: {
        height: 200,
        width: width
    },
});
