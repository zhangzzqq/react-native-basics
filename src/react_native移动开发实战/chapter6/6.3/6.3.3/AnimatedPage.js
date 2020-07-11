import React, {Component} from 'react';
import {View, StyleSheet, Text, Animated, Easing, TouchableOpacity} from 'react-native';


export default class AnimatedPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeIn: new Animated.Value(0),
        };
    }

    onPress() {
        Animated.timing(this.state.fadeIn, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
        }).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{opacity: this.state.fadeIn}}>
                    <Text style={styles.content}>Hello World!</Text>
                </Animated.View>
                <TouchableOpacity style={styles.btnContainer} onPress={this.onPress.bind(this)}>
                    <Text style={styles.textStyle}>渐变显示</Text>
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
