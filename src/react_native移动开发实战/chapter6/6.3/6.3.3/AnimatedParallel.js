import React, {Component} from 'react';
import {View, StyleSheet, Text, Animated, Easing, TouchableOpacity} from 'react-native';

/**
 * 并行动画
 */
export default class AnimatedParallel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
            rotateValue: new Animated.Value(0),
        };
    }

    onPress() {
        Animated.parallel([
            Animated.spring(this.state.bounceValue, {
                toValue: 1,
            }),
            Animated.timing(this.state.rotateValue, {
                toValue: 1,
                easing: Easing.elastic(1),
            })
        ]).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.content, {transform: [
                        {rotate: this.state.rotateValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [
                                    '0deg', '360deg'
                                ],
                            })},{
                            scale:this.state.bounceValue,
                        }
                    ]}]}>
                    <Text style={styles.content}>Hello World!</Text>
                </Animated.View>
                <TouchableOpacity style={styles.btnContainer} onPress={this.onPress.bind(this)}>
                    <Text style={styles.textStyle}>并行动画</Text>
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
    content: {
        backgroundColor: '#FF0000',
        marginBottom: 10,
        padding: 10
    },
    btnContainer: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#EE7942',
        height: 38,
        width: 320,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        color: '#ffffff',
    }
});
